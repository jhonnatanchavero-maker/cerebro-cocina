'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Mic, MicOff, X, Send, ChefHat, Square, Sparkles } from 'lucide-react'
import { recipes } from '@/data/recipes'
import { addNote, addModification, findRecipeId } from '@/lib/recipe-overrides'
import { correctKitchenSpeech } from '@/lib/speech-corrections'

interface Message { role: 'user' | 'assistant'; content: string }
type State = 'idle' | 'listening' | 'thinking' | 'speaking'

interface AppAction {
  type: 'navigate' | 'search_recipe' | 'modify_recipe' | 'save_note' | 'calculate_cost' | 'scale_recipe'
  params: {
    path?: string; query?: string; recipe_name?: string
    mod_type?: 'replace' | 'add' | 'remove'
    from?: string; to?: string; ingredient?: string
    quantity?: string; note?: string; portions?: number
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function getSR() {
  if (typeof window === 'undefined') return null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any
  return w.SpeechRecognition || w.webkitSpeechRecognition || null
}

function normalize(t: string) {
  return t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
}

const WAKE_WORDS = ['oido cocina', 'oye cocina', 'hey cocina', 'hola cocina', 'oido chef', 'oye chef', 'hey chef']
const isWake = (t: string) => WAKE_WORDS.some(w => normalize(t).includes(w))

function speakText(text: string, onEnd?: () => void) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) { onEnd?.(); return }
  window.speechSynthesis.cancel()
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text]
  let i = 0
  function speakNext() {
    if (i >= sentences.length) { onEnd?.(); return }
    const u = new SpeechSynthesisUtterance(sentences[i++].trim())
    u.lang = 'es-ES'; u.rate = 1.05; u.pitch = 1
    u.onend = speakNext; u.onerror = speakNext
    window.speechSynthesis.speak(u)
  }
  speakNext()
}

function calcCost(recipeName: string, portions: number): string {
  const recipeId = findRecipeId(recipeName, recipes)
  const recipe = recipes.find(r => r.id === recipeId)
  if (!recipe) return `No encontré la receta "${recipeName}"`
  const p = portions || recipe.portions
  let prices: Record<string, number> = {}
  try { const s = localStorage.getItem('escanallo_ingredients'); if (s) prices = JSON.parse(s) } catch { /**/ }
  const def: Record<string, number> = {
    pollo: 4.5, carne: 7, cerdo: 5.5, ternera: 11, merluza: 9, bacalao: 8, gambas: 14,
    salmon: 9, patata: 0.7, cebolla: 0.5, tomate: 1.0, pimiento: 1.4, ajo: 2.5,
    aceite: 3.5, harina: 0.7, azucar: 0.9, huevo: 2.2, leche: 0.9, nata: 2.2,
    queso: 5.5, mantequilla: 4.5, arroz: 1.2, pasta: 1.5, alubia: 2, lenteja: 1.5,
    garbanzo: 1.8, chorizo: 7, jamon: 12, verdura: 1.2, zanahoria: 0.8,
  }
  const scale = p / recipe.portions; let total = 0
  for (const ing of recipe.ingredients) {
    const n = ing.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const ck = Object.keys(prices).find(k => n.includes(k.toLowerCase()))
    const dk = Object.keys(def).find(k => n.includes(k))
    const price = ck ? prices[ck] : (dk ? def[dk] : 2.5)
    const qty = ing.quantity
    const kg = ing.unit === 'g' ? qty / 1000 : ing.unit === 'kg' ? qty : ing.unit === 'ml' ? qty / 1000 : ing.unit === 'L' ? qty : 0.08
    total += kg * scale * price
  }
  const per = total / p
  return `${recipe.title} para ${p} raciones: coste total ${total.toFixed(2)}€, ${per.toFixed(2)}€ por ración, precio sugerido ${(per * 3.5).toFixed(2)}€`
}

// ── Constants ──────────────────────────────────────────────────────────────
const N_BARS = 36

const STATE_COLORS: Record<State, string> = {
  idle: '#6B7280',
  listening: '#EF4444',
  thinking: '#F59E0B',
  speaking: '#4F8EF7',
}

const STATE_RING_COLORS: Record<State, string> = {
  idle: 'transparent',
  listening: 'rgba(239,68,68,0.6)',
  thinking: 'rgba(245,158,11,0.6)',
  speaking: 'rgba(79,142,247,0.6)',
}

const SUGGESTIONS = [
  'Ve a recetas',
  'Busca la merluza',
  '¿Cuánto cuesta el cocido para 20?',
  '¿Cómo se hace la lasaña?',
  '¿Qué recetas no tienen gluten?',
  'Añade ajo a la carbonara',
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function VoiceAssistant() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [streamText, setStreamText] = useState('')
  const [inputText, setInputText] = useState('')
  const [state, setState] = useState<State>('idle')
  const [wakeActive, setWakeActive] = useState(false)
  const [bars, setBars] = useState<number[]>(Array(N_BARS).fill(3))
  const [speechSupported, setSpeechSupported] = useState(false)
  const [micPermission, setMicPermission] = useState<'unknown' | 'granted' | 'denied'>('unknown')
  const [notification, setNotification] = useState('')

  const stateRef = useRef<State>('idle')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recogRef = useRef<any>(null)
  const wakeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const animFrameRef = useRef<number>(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => { stateRef.current = state }, [state])
  useEffect(() => {
    setSpeechSupported(!!getSR())
    // Pre-check microphone permission state (non-blocking)
    if (typeof navigator !== 'undefined' && navigator.permissions) {
      navigator.permissions.query({ name: 'microphone' as PermissionName }).then(result => {
        setMicPermission(result.state === 'granted' ? 'granted' : result.state === 'denied' ? 'denied' : 'unknown')
        result.onchange = () => {
          setMicPermission(result.state === 'granted' ? 'granted' : result.state === 'denied' ? 'denied' : 'unknown')
        }
      }).catch(() => { /* permissions API not available */ })
    }
  }, [])
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, streamText])

  function notify(text: string) {
    setNotification(text)
    setTimeout(() => setNotification(''), 3000)
  }

  // ── Animated bars ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (state === 'listening' || state === 'speaking' || state === 'thinking') {
      let t = 0
      const speed = state === 'listening' ? 0.22 : state === 'thinking' ? 0.08 : 0.14
      const amp   = state === 'listening' ? 26   : state === 'thinking' ? 10  : 18
      const base  = state === 'listening' ? 8    : state === 'thinking' ? 20  : 16
      function animate() {
        t += speed
        setBars(Array.from({ length: N_BARS }, (_, i) =>
          Math.max(3, Math.sin(t + i * 0.32) * amp + base + Math.random() * 5)
        ))
        animFrameRef.current = requestAnimationFrame(animate)
      }
      animate()
      return () => cancelAnimationFrame(animFrameRef.current)
    } else {
      cancelAnimationFrame(animFrameRef.current)
      setBars(Array(N_BARS).fill(3))
    }
  }, [state])

  // ── Execute app action ─────────────────────────────────────────────────────
  const executeAction = useCallback((action: AppAction) => {
    const { type, params } = action
    if (type === 'navigate' && params.path) {
      setTimeout(() => router.push(params.path!), 800); return
    }
    if (type === 'search_recipe' && params.query) {
      setTimeout(() => router.push(`/recetas?q=${encodeURIComponent(params.query!)}`), 800); return
    }
    if (type === 'scale_recipe' && params.recipe_name) {
      const id = findRecipeId(params.recipe_name, recipes)
      if (id) setTimeout(() => router.push(`/recetas/${id}?p=${params.portions || 10}`), 800); return
    }
    if (type === 'save_note' && params.recipe_name && params.note) {
      const id = findRecipeId(params.recipe_name, recipes)
      if (id) { addNote(id, params.note); notify('Nota guardada en ' + params.recipe_name); setTimeout(() => router.push(`/recetas/${id}`), 1200) }; return
    }
    if (type === 'modify_recipe' && params.recipe_name) {
      const id = findRecipeId(params.recipe_name, recipes)
      if (id) {
        if (params.mod_type === 'replace') addModification(id, { type: 'replace', from: params.from, to: params.to })
        else if (params.mod_type === 'add') addModification(id, { type: 'add', to: params.ingredient, quantity: params.quantity })
        else if (params.mod_type === 'remove') addModification(id, { type: 'remove', from: params.ingredient })
        notify('Modificación guardada')
        setTimeout(() => router.push(`/recetas/${id}`), 1200)
      }; return
    }
    if (type === 'calculate_cost' && params.recipe_name) {
      const result = calcCost(params.recipe_name, params.portions || 0)
      setMessages(prev => [...prev, { role: 'assistant', content: result }])
      setState('speaking')
      stateRef.current = 'speaking'
      speakText(result, () => { setState('idle'); stateRef.current = 'idle'; scheduleWakeRestart() })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  // ── Send message with streaming ────────────────────────────────────────────
  const sendMessage = useCallback(async (text: string, fromVoice = false) => {
    if (!text.trim()) return
    // For voice calls, allow 'listening' state; for typed calls only from 'idle'
    if (!fromVoice && stateRef.current !== 'idle') return
    if (fromVoice && stateRef.current !== 'idle' && stateRef.current !== 'listening') return

    // Immediately update ref so further guard checks pass
    setState('thinking')
    stateRef.current = 'thinking'

    setMessages(prev => [...prev, { role: 'user', content: text }])
    setInputText('')
    setStreamText('')

    const abort = new AbortController()
    abortRef.current = abort

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, conversationHistory: messages.slice(-12) }),
        signal: abort.signal,
      })

      if (!res.ok || !res.body) throw new Error('Error de red')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''
      setState('speaking')
      stateRef.current = 'speaking'

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        full += chunk

        if (full.includes('___ACTION___')) {
          const [speechPart, actionJson] = full.split('___ACTION___')
          const speech = speechPart.trim()
          try {
            const parsed = JSON.parse(actionJson.trim())
            if (speech) {
              setMessages(prev => [...prev, { role: 'assistant', content: speech }])
              speakText(speech, () => {})
            }
            executeAction(parsed.action)
            setState('idle')
            stateRef.current = 'idle'
            scheduleWakeRestart()
          } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: full }])
            speakText(full, () => { setState('idle'); stateRef.current = 'idle'; scheduleWakeRestart() })
          }
          setStreamText('')
          return
        }

        setStreamText(full)
      }

      setStreamText('')
      if (full.trim()) {
        setMessages(prev => [...prev, { role: 'assistant', content: full }])
        speakText(full, () => { setState('idle'); stateRef.current = 'idle'; scheduleWakeRestart() })
      } else {
        setState('idle'); stateRef.current = 'idle'; scheduleWakeRestart()
      }

    } catch (err) {
      if ((err as Error).name === 'AbortError') return
      const msg = 'Error de conexión. Inténtalo de nuevo.'
      setStreamText('')
      setMessages(prev => [...prev, { role: 'assistant', content: msg }])
      speakText(msg, () => { setState('idle'); stateRef.current = 'idle'; scheduleWakeRestart() })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, executeAction])

  function stopAll() {
    abortRef.current?.abort()
    window.speechSynthesis?.cancel()
    recogRef.current?.stop()
    setStreamText('')
    setState('idle')
    stateRef.current = 'idle'
    scheduleWakeRestart()
  }

  // ── Wake word listener ─────────────────────────────────────────────────────
  const startWakeListenerSafe = useCallback(() => {
    if (stateRef.current !== 'idle') return
    const SR = getSR(); if (!SR) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wake = new SR() as any
    wake.lang = 'es-ES'; wake.continuous = false; wake.interimResults = false; wake.maxAlternatives = 1
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wake.onresult = (e: any) => {
      const t = e.results[0][0].transcript
      if (isWake(t) && stateRef.current === 'idle') {
        wake.abort(); recogRef.current = null
        setWakeActive(false); setIsOpen(true)
        speakText('Dime', () => startCommandListening())
      } else scheduleWakeRestart()
    }
    wake.onerror = () => { setWakeActive(false); scheduleWakeRestart() }
    wake.onend = () => { if (stateRef.current === 'idle') scheduleWakeRestart(); else setWakeActive(false) }
    try { wake.start(); setWakeActive(true); recogRef.current = wake } catch { scheduleWakeRestart() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function scheduleWakeRestart() {
    if (wakeTimerRef.current) clearTimeout(wakeTimerRef.current)
    wakeTimerRef.current = setTimeout(() => { if (stateRef.current === 'idle') startWakeListenerSafe() }, 1200)
  }

  useEffect(() => {
    const t = setTimeout(() => startWakeListenerSafe(), 2000)
    return () => {
      clearTimeout(t)
      if (wakeTimerRef.current) clearTimeout(wakeTimerRef.current)
      recogRef.current?.stop()
      abortRef.current?.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Command listener ───────────────────────────────────────────────────────
  function startCommandListening() {
    const SR = getSR(); if (!SR) { notify('Micrófono no disponible en este navegador'); return }
    if (micPermission === 'denied') {
      notify('Permiso de micrófono denegado. Actívalo en los ajustes del navegador.')
      return
    }
    if (wakeTimerRef.current) clearTimeout(wakeTimerRef.current)
    recogRef.current?.abort()
    recogRef.current = null
    setWakeActive(false)

    // On HTTPS: explicitly request mic permission via getUserMedia before SpeechRecognition
    // This ensures the permission prompt appears even on first-time HTTPS visits
    const requestAndListen = () => {
      setTimeout(() => {
      setState('listening')
      stateRef.current = 'listening'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rec = new SR() as any
      rec.lang = 'es-ES'; rec.continuous = false; rec.interimResults = true; rec.maxAlternatives = 3

      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const SGL = (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList
        if (SGL) {
          const names = recipes.map(r => r.title.toLowerCase()).join(' | ')
          const g = `#JSGF V1.0; grammar c; public <c> = oido cocina | ve a | busca | añade | cambia | cuánto cuesta | escala | ${names} | pollo | merluza | bacalao | lasaña | tortilla | cocido;`
          const gl = new SGL(); gl.addFromString(g, 1); rec.grammars = gl
        }
      } catch { /**/ }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rec.onresult = (e: any) => {
        let raw = ''
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) raw = e.results[i][0].transcript
        }
        if (!raw) return
        rec.stop()
        recogRef.current = null
        const corrected = correctKitchenSpeech(raw)
        // Pass fromVoice=true so sendMessage allows call from 'listening' state
        sendMessage(corrected, true)
      }
      rec.onerror = (e: { error: string }) => {
        setState('idle'); stateRef.current = 'idle'
        if (e.error === 'not-allowed') notify('Permiso de micrófono denegado. Actívalo en Ajustes del navegador.')
        else if (e.error === 'no-speech') { notify('No se detectó voz. Inténtalo de nuevo.'); scheduleWakeRestart() }
        else scheduleWakeRestart()
      }
      rec.onend = () => {
        if (stateRef.current === 'listening') {
          setState('idle'); stateRef.current = 'idle'; scheduleWakeRestart()
        }
      }
      try { rec.start(); recogRef.current = rec } catch { setState('idle'); stateRef.current = 'idle'; scheduleWakeRestart() }
      }, 300)
    }

    // On HTTPS request mic permission explicitly first to trigger the browser prompt
    if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia && micPermission !== 'granted') {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          // Permission granted — stop the stream immediately (SpeechRecognition manages its own)
          stream.getTracks().forEach(t => t.stop())
          setMicPermission('granted')
          requestAndListen()
        })
        .catch(err => {
          if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
            setMicPermission('denied')
            notify('Permiso de micrófono denegado. Actívalo en los ajustes del navegador.')
          } else {
            // getUserMedia not required (e.g. already granted), proceed anyway
            requestAndListen()
          }
        })
    } else {
      requestAndListen()
    }
  }

  function handleMicClick() {
    if (state === 'listening') { recogRef.current?.stop(); setState('idle'); stateRef.current = 'idle'; scheduleWakeRestart(); return }
    if (state === 'speaking' || state === 'thinking') { stopAll(); return }
    startCommandListening()
  }

  // ── Derived UI values ──────────────────────────────────────────────────────
  const ringColor = STATE_RING_COLORS[state]
  const barColor = STATE_COLORS[state]

  const statusLabel: Record<State, string> = {
    idle: wakeActive ? 'Di "oído cocina" o toca el micrófono' : 'Toca el micrófono para hablar',
    listening: 'Escuchando... habla ahora',
    thinking: 'Procesando tu consulta...',
    speaking: 'Respondiendo...',
  }

  const micLabel: Record<State, string> = {
    idle: wakeActive ? '● Di "oído cocina"' : 'Toca para hablar',
    listening: 'Toca para cancelar',
    thinking: 'Toca para detener',
    speaking: 'Toca para detener',
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Notification toast */}
      {notification && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[80] flex items-center gap-2 bg-[#1E2433] text-white text-sm px-5 py-3 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#4F8EF7] flex-shrink-0" />
          {notification}
        </div>
      )}

      {/* Floating button (closed state) */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); startCommandListening() }}
          aria-label="Abrir asistente de voz"
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #1A1F2E 0%, #0D1117 100%)',
            boxShadow: '0 4px 24px rgba(79,142,247,0.25), 0 0 0 1px rgba(79,142,247,0.15)',
          }}
        >
          <ChefHat className="w-6 h-6 text-[#4F8EF7]" />
          <span className="text-[#4F8EF7] font-bold tracking-widest" style={{ fontSize: 7 }}>CHEF IA</span>
          {wakeActive && (
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0D1117] animate-pulse" />
          )}
        </button>
      )}

      {/* Full-screen overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{
            background: 'linear-gradient(180deg, #070B14 0%, #0A0F1E 50%, #060A12 100%)',
            fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-3">
              {/* Avatar with glow */}
              <div
                className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #1E2D4A 0%, #0F1A2E 100%)',
                  boxShadow: state !== 'idle'
                    ? `0 0 16px ${ringColor}, 0 0 4px ${ringColor}`
                    : '0 0 0 1px rgba(79,142,247,0.2)',
                  transition: 'box-shadow 0.4s ease',
                }}
              >
                <ChefHat className="w-4.5 h-4.5" style={{ color: state !== 'idle' ? barColor : '#4F8EF7' }} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm leading-tight tracking-wide">Chef IA · Como en Casa</p>
                <p
                  className="text-xs leading-tight transition-colors duration-300"
                  style={{ color: barColor }}
                >
                  {statusLabel[state]}
                </p>
              </div>
            </div>
            <button
              onClick={() => { stopAll(); setIsOpen(false) }}
              aria-label="Cerrar asistente"
              className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-150 hover:bg-white/10 active:scale-90"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <X className="w-4 h-4 text-white/50" />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.08) transparent' }}>

            {/* Empty state */}
            {messages.length === 0 && !streamText && (
              <div className="flex flex-col items-center justify-center h-full text-center gap-5 py-8">
                {/* Large glowing chef icon */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at center, #1A2D4A 0%, #0A0F1E 70%)',
                    boxShadow: '0 0 40px rgba(79,142,247,0.15), inset 0 0 20px rgba(79,142,247,0.05)',
                    border: '1px solid rgba(79,142,247,0.15)',
                  }}
                >
                  <ChefHat className="w-12 h-12 text-[#4F8EF7]" style={{ opacity: 0.7 }} />
                </div>
                <div>
                  <p className="font-semibold text-white text-xl leading-tight">Hola, soy Chef IA</p>
                  <p className="text-white/40 text-sm mt-1.5 max-w-xs leading-relaxed">
                    Tu asistente inteligente de cocina.<br />Pregúntame lo que necesites.
                  </p>
                </div>
                {/* Suggestion chips */}
                <div className="flex flex-wrap gap-2 justify-center max-w-sm mt-1">
                  {SUGGESTIONS.map(s => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-xs px-3.5 py-2 rounded-full cursor-pointer transition-all duration-150 hover:scale-105 active:scale-95"
                      style={{
                        background: 'rgba(79,142,247,0.08)',
                        border: '1px solid rgba(79,142,247,0.18)',
                        color: 'rgba(255,255,255,0.65)',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message list */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center mr-2.5 mt-1 flex-shrink-0 self-end"
                    style={{
                      background: 'linear-gradient(135deg, #1E2D4A 0%, #0F1A2E 100%)',
                      border: '1px solid rgba(79,142,247,0.2)',
                    }}
                  >
                    <ChefHat className="w-3.5 h-3.5 text-[#4F8EF7]" />
                  </div>
                )}
                <div
                  className="max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                  style={msg.role === 'user'
                    ? {
                        background: 'linear-gradient(135deg, #1E3A6E 0%, #152C55 100%)',
                        color: '#E8F0FF',
                        borderBottomRightRadius: 4,
                        border: '1px solid rgba(79,142,247,0.2)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.05)',
                        color: 'rgba(255,255,255,0.85)',
                        borderBottomLeftRadius: 4,
                        border: '1px solid rgba(255,255,255,0.07)',
                      }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Live streaming text */}
            {streamText && (
              <div className="flex justify-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center mr-2.5 mt-1 flex-shrink-0 self-end"
                  style={{
                    background: 'linear-gradient(135deg, #1E2D4A 0%, #0F1A2E 100%)',
                    border: '1px solid rgba(79,142,247,0.3)',
                    boxShadow: '0 0 8px rgba(79,142,247,0.2)',
                  }}
                >
                  <ChefHat className="w-3.5 h-3.5 text-[#4F8EF7]" />
                </div>
                <div
                  className="max-w-[80%] px-4 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed whitespace-pre-wrap"
                  style={{
                    background: 'rgba(79,142,247,0.06)',
                    color: 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(79,142,247,0.12)',
                  }}
                >
                  {streamText}
                  <span
                    className="inline-block w-0.5 h-3.5 ml-0.5 align-middle animate-pulse"
                    style={{ background: '#4F8EF7' }}
                  />
                </div>
              </div>
            )}

            {/* Thinking indicator */}
            {state === 'thinking' && !streamText && (
              <div className="flex justify-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center mr-2.5 self-end flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #1E2D4A 0%, #0F1A2E 100%)',
                    border: '1px solid rgba(245,158,11,0.3)',
                    boxShadow: '0 0 8px rgba(245,158,11,0.15)',
                  }}
                >
                  <ChefHat className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div
                  className="px-4 py-3.5 rounded-2xl rounded-bl-sm flex gap-1.5 items-center"
                  style={{
                    background: 'rgba(245,158,11,0.06)',
                    border: '1px solid rgba(245,158,11,0.1)',
                  }}
                >
                  {[0, 0.18, 0.36].map((d, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: '#F59E0B',
                        animation: `voice-wave 0.7s ease-in-out ${d}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Waveform visualizer */}
          <div
            className="flex items-center justify-center px-6 flex-shrink-0"
            style={{ height: 60, borderTop: '1px solid rgba(255,255,255,0.04)' }}
          >
            <div className="flex items-center gap-[2.5px]">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 2.5,
                    height: `${Math.min(h, 52)}px`,
                    background: state !== 'idle'
                      ? `linear-gradient(to top, ${barColor}99, ${barColor})`
                      : 'rgba(255,255,255,0.08)',
                    transition: 'height 0.06s ease, background 0.3s ease',
                    opacity: state !== 'idle' ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Text input */}
          <div className="px-4 pb-3 flex gap-2.5 flex-shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && state === 'idle' && sendMessage(inputText)}
              placeholder="O escribe tu pregunta aquí..."
              disabled={state !== 'idle'}
              className="flex-1 px-4 py-2.5 text-sm rounded-2xl focus:outline-none transition-all disabled:opacity-30"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
              }}
            />
            <button
              onClick={() => sendMessage(inputText)}
              disabled={!inputText.trim() || state !== 'idle'}
              aria-label="Enviar mensaje"
              className="w-10 h-10 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-150 hover:opacity-90 active:scale-90 disabled:opacity-25 flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #2E5BC7 0%, #4F8EF7 100%)',
              }}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Mic button with Alexa-style glowing ring */}
          <div className="flex flex-col items-center pb-10 pt-1 gap-2 flex-shrink-0">
            <div className="relative flex items-center justify-center">
              {/* Outer pulse rings for active states */}
              {state === 'listening' && (
                <>
                  <span
                    className="absolute rounded-full animate-ping"
                    style={{
                      width: 120, height: 120,
                      background: 'rgba(239,68,68,0.08)',
                      animationDuration: '1.2s',
                    }}
                  />
                  <span
                    className="absolute rounded-full animate-ping"
                    style={{
                      width: 96, height: 96,
                      background: 'rgba(239,68,68,0.12)',
                      animationDuration: '1.2s',
                      animationDelay: '0.3s',
                    }}
                  />
                </>
              )}
              {state === 'speaking' && (
                <span
                  className="absolute rounded-full animate-ping"
                  style={{
                    width: 104, height: 104,
                    background: 'rgba(79,142,247,0.1)',
                    animationDuration: '1.4s',
                  }}
                />
              )}

              {/* Alexa-style glowing ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 82, height: 82,
                  background: state !== 'idle'
                    ? `conic-gradient(${barColor} 0deg, ${barColor}88 90deg, transparent 180deg, ${barColor}44 270deg, ${barColor} 360deg)`
                    : 'transparent',
                  opacity: state !== 'idle' ? 0.7 : 0,
                  filter: `blur(6px)`,
                  transition: 'opacity 0.4s ease, background 0.4s ease',
                  animation: state !== 'idle' ? 'spin 3s linear infinite' : 'none',
                }}
              />

              {/* Main mic button */}
              <button
                onClick={handleMicClick}
                aria-label={state === 'idle' ? 'Activar micrófono' : 'Detener'}
                className="relative flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 active:scale-95"
                style={{
                  width: 80, height: 80,
                  background: state === 'listening'
                    ? 'linear-gradient(135deg, #3B0E0E 0%, #1A0505 100%)'
                    : state === 'speaking'
                    ? 'linear-gradient(135deg, #0E1F3B 0%, #05101A 100%)'
                    : state === 'thinking'
                    ? 'linear-gradient(135deg, #2A1C00 0%, #140E00 100%)'
                    : 'linear-gradient(135deg, #1A1F2E 0%, #0D1117 100%)',
                  boxShadow: state !== 'idle'
                    ? `0 0 30px ${ringColor}, 0 0 60px ${ringColor}40, inset 0 0 20px rgba(0,0,0,0.5)`
                    : '0 4px 24px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.3)',
                  border: `2px solid ${state !== 'idle' ? barColor + '60' : 'rgba(255,255,255,0.08)'}`,
                  transition: 'all 0.3s ease',
                }}
              >
                {state === 'listening' ? (
                  <MicOff className="w-8 h-8 text-red-400" />
                ) : (state === 'speaking' || state === 'thinking') ? (
                  <Square className="w-6 h-6 text-white/80" fill="currentColor" />
                ) : (
                  <Mic className="w-8 h-8" style={{ color: speechSupported ? '#4F8EF7' : 'rgba(255,255,255,0.3)' }} />
                )}
              </button>
            </div>

            <p className="text-xs text-center transition-colors duration-300" style={{ color: barColor, opacity: 0.8 }}>
              {micLabel[state]}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        input::placeholder { color: rgba(255,255,255,0.3); }
        @media (prefers-reduced-motion: reduce) {
          .animate-ping, .animate-pulse { animation: none !important; }
        }
      `}</style>
    </>
  )
}
