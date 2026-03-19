'use client'

import { useState, useRef, useEffect } from 'react'
import { Mic, MicOff, X, Send, ChefHat } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

type AssistantState = 'idle' | 'listening' | 'thinking' | 'speaking'

// Type-safe Web Speech API wrapper
function getSpeechRecognition() {
  if (typeof window === 'undefined') return null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any
  return w.SpeechRecognition || w.webkitSpeechRecognition || null
}

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy Chef IA. Puedo ayudarte con recetas, alérgenos y técnicas de cocina. ¿En qué te puedo ayudar?' }
  ])
  const [inputText, setInputText] = useState('')
  const [state, setState] = useState<AssistantState>('idle')
  const [speechSupported, setSpeechSupported] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSpeechSupported(!!getSpeechRecognition())
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage(text: string) {
    if (!text.trim() || state !== 'idle') return
    const userMsg: Message = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInputText('')
    setState('thinking')

    try {
      const history = messages.slice(-8)
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, conversationHistory: history })
      })
      const data = await res.json()
      const reply = data.reply || 'Lo siento, no pude procesar tu consulta.'
      const assistantMsg: Message = { role: 'assistant', content: reply }
      setMessages(prev => [...prev, assistantMsg])

      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        setState('speaking')
        window.speechSynthesis.cancel()
        const utterance = new SpeechSynthesisUtterance(reply)
        utterance.lang = 'es-ES'
        utterance.rate = 0.92
        utterance.onend = () => setState('idle')
        utterance.onerror = () => setState('idle')
        window.speechSynthesis.speak(utterance)
      } else {
        setState('idle')
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error de conexión. Inténtalo de nuevo.' }])
      setState('idle')
    }
  }

  function startListening() {
    const SR = getSpeechRecognition()
    if (!SR) return
    setState('listening')
    const recognition = new SR()
    recognition.lang = 'es-ES'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.onresult = (event: { results: { [k: number]: { [k: number]: { transcript: string } } } }) => {
      const transcript = event.results[0][0].transcript
      recognition.stop()
      sendMessage(transcript)
    }
    recognition.onerror = () => setState('idle')
    recognition.onend = () => { if (state === 'listening') setState('idle') }
    recognition.start()
    recognitionRef.current = recognition
  }

  function stopListening() {
    recognitionRef.current?.stop()
    setState('idle')
  }

  function stopSpeaking() {
    if (typeof window !== 'undefined') window.speechSynthesis?.cancel()
    setState('idle')
  }

  const stateLabel: Record<AssistantState, string> = {
    idle: 'En línea', listening: 'Escuchando...', thinking: 'Pensando...', speaking: 'Respondiendo...'
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl z-50 transition-all hover:scale-110"
          style={{ background: 'linear-gradient(135deg, #4285F4, #2557C7)', boxShadow: '0 4px 20px rgba(66,133,244,0.5)' }}
          title="Asistente Chef IA"
        >
          <ChefHat className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100"
          style={{ height: '490px', maxHeight: 'calc(100vh - 48px)' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-4 flex-shrink-0"
               style={{ background: 'linear-gradient(135deg, #4285F4, #2557C7)' }}>
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">Chef IA</p>
              <p className="text-blue-100 text-xs">{stateLabel[state]}</p>
            </div>
            {state === 'listening' && (
              <div className="flex items-end gap-0.5 h-5 mr-1">
                {[1,2,3,4].map(i => (
                  <div key={i} className="voice-bar bg-white rounded-full w-1"
                       style={{ animationDelay: `${i * 0.1}s`, height: '6px' }} />
                ))}
              </div>
            )}
            <button
              onClick={() => { setIsOpen(false); stopSpeaking() }}
              className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <ChefHat className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed
                  ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-sm' : 'bg-gray-100 text-gray-900 rounded-tl-sm'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {state === 'thinking' && (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <ChefHat className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-gray-100 px-3 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1">
                    {[0, 0.15, 0.3].map((d, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-gray-400"
                           style={{ animation: `voice-wave 0.8s ease-in-out ${d}s infinite` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage(inputText)}
                placeholder="Pregunta sobre una receta..."
                disabled={state !== 'idle'}
                className="flex-1 px-3 py-2 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:outline-none transition-all disabled:opacity-50"
              />
              {state === 'speaking' ? (
                <button onClick={stopSpeaking}
                  className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 transition-colors flex-shrink-0">
                  <MicOff className="w-4 h-4" />
                </button>
              ) : speechSupported ? (
                <button
                  onClick={state === 'listening' ? stopListening : startListening}
                  disabled={state === 'thinking'}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 disabled:opacity-50
                    ${state === 'listening' ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-primary'}`}
                >
                  {state === 'listening' ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
              ) : null}
              <button
                onClick={() => sendMessage(inputText)}
                disabled={!inputText.trim() || state !== 'idle'}
                className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors flex-shrink-0 disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {state === 'listening' && (
              <p className="text-xs text-center text-primary mt-2 font-medium animate-pulse">🎤 Habla ahora...</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
