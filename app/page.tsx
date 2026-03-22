'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { createClient } from '@/lib/supabase/client'
import {
  ClipboardList, Wheat, BarChart2, ShoppingCart,
  MessageSquare, Bot, Calendar, Bell,
  ChefHat, Loader2, ArrowRight, CheckCircle2
} from 'lucide-react'

const features = [
  { icon: ClipboardList, text: '100 fichas técnicas reales de carta' },
  { icon: Wheat, text: '14 alérgenos EU 1169/2011 por receta' },
  { icon: BarChart2, text: 'Escandallo y coste por ración actualizable' },
  { icon: ShoppingCart, text: 'Lista de compra automática por proveedor' },
  { icon: MessageSquare, text: 'WhatsApp directo a cada proveedor' },
  { icon: Bot, text: 'Asistente IA de voz estilo chef profesional' },
  { icon: Calendar, text: 'Hoja de producción semanal (jueves)' },
  { icon: Bell, text: 'Alertas cuando suben precios de ingredientes' },
]

// Animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' as const, delay },
})

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      toast.success('¡Bienvenido de vuelta!')
      router.push('/dashboard')
      router.refresh()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error al iniciar sesión'
      toast.error(msg.includes('Invalid login') ? 'Email o contraseña incorrectos' : msg)
    } finally {
      setLoading(false)
    }
  }

  function useDemoCredentials() {
    setEmail('demo@comiencasa.es')
    setPassword('demo1234')
  }

  return (
    <div
      className="min-h-screen flex"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #EBF2FF 55%, #e8f5e9 100%)' }}
    >
      {/* ── Left — Branding ──────────────────────────────────── */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 py-12">
        <div className="space-y-8 max-w-lg">
          {/* Logo */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #4285F4, #34A853)',
                boxShadow: '0 8px 24px rgba(66,133,244,0.35)',
              }}
            >
              <ChefHat className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1
                className="text-xl font-bold text-slate-900 leading-tight"
                style={{ fontFamily: 'Fraunces, Georgia, serif' }}
              >
                Como en Casa
              </h1>
              <p className="text-sm text-slate-500 font-medium">Restaurante · Catering</p>
            </div>
          </motion.div>

          {/* Hero text */}
          <motion.div {...fadeUp(0.18)}>
            <h2
              className="text-5xl font-bold leading-tight text-slate-900"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              Cerebro de{' '}
              <span className="text-gradient-blue block">Cocina</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              El sistema inteligente para gestionar tu cocina profesional con precisión y eficiencia.
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div {...fadeUp(0.26)} className="grid grid-cols-2 gap-2.5">
            {features.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl glass-card"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#EBF2FF' }}
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm text-slate-700 font-medium leading-tight">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Pricing card */}
          <motion.div
            {...fadeUp(0.34)}
            className="flex items-center gap-5 p-5 rounded-2xl text-white"
            style={{ background: 'linear-gradient(135deg, #4285F4, #2557C7)', boxShadow: '0 8px 24px rgba(66,133,244,0.35)' }}
          >
            <div>
              <div
                className="text-3xl font-bold leading-none"
                style={{ fontFamily: 'Fraunces, Georgia, serif' }}
              >
                €99
                <span className="text-lg font-normal text-blue-200">/mes</span>
              </div>
              <div className="text-blue-200 text-sm mt-1">por restaurante · sin permanencia</div>
            </div>
            <div className="ml-auto text-sm text-blue-100 space-y-1">
              {['Acceso completo', 'Soporte incluido', 'Actualizaciones'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Right — Login form ────────────────────────────────── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)', boxShadow: '0 6px 18px rgba(66,133,244,0.35)' }}
            >
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <h1
              className="text-2xl font-bold text-slate-900"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              Cerebro de Cocina
            </h1>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-glass p-8 border border-slate-100">
            <h3
              className="text-2xl font-bold text-slate-900 mb-1"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              Iniciar sesión
            </h3>
            <p className="text-slate-500 text-sm mb-8">Accede a tu cocina inteligente</p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="chef@restaurante.es"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="input-field"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3 text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  <>
                    Entrar al sistema
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Demo hint */}
            <button
              type="button"
              onClick={useDemoCredentials}
              className="mt-5 w-full p-4 rounded-xl text-left cursor-pointer transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
              style={{ background: '#EBF2FF' }}
            >
              <p className="text-xs font-semibold text-primary-700 mb-1 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5" />
                Acceso demo — click para rellenar
              </p>
              <p className="text-xs text-primary-600">demo@comiencasa.es · demo1234</p>
            </button>

            {/* Register link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                ¿Nuevo cliente?{' '}
                <a
                  href="mailto:info@comiencasa.es?subject=Solicitar acceso Cerebro de Cocina"
                  className="text-primary font-semibold hover:text-primary-700 transition-colors"
                >
                  Solicitar acceso
                  <ArrowRight className="inline w-3.5 h-3.5 ml-0.5" />
                </a>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            © 2024 Como en Casa · Cerebro de Cocina · v1.0
          </p>
        </motion.div>
      </div>
    </div>
  )
}
