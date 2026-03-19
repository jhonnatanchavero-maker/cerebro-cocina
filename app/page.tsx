'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { createClient } from '@/lib/supabase/client'

const features = [
  { icon: '📋', text: '100 fichas técnicas reales de carta' },
  { icon: '🌾', text: '14 alérgenos EU 1169/2011 por receta' },
  { icon: '📊', text: 'Escandallo y coste por ración actualizable' },
  { icon: '🛒', text: 'Lista de compra automática por proveedor' },
  { icon: '📱', text: 'WhatsApp directo a cada proveedor' },
  { icon: '🤖', text: 'Asistente IA de voz estilo chef profesional' },
  { icon: '📅', text: 'Hoja de producción semanal (jueves)' },
  { icon: '🔔', text: 'Alertas cuando suben precios de ingredientes' },
]

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
      // Demo mode - bypass auth for demo@comiencasa.es
      if (email === 'demo@comiencasa.es' && password === 'demo1234') {
        toast.success('¡Bienvenido al modo demo!')
        setTimeout(() => router.push('/dashboard'), 800)
        return
      }

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
    <div className="min-h-screen flex" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #EBF2FF 50%, #e8f5e9 100%)' }}>
      {/* Left - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 py-12">
        <div
          className="space-y-8"
          style={{ animation: 'fade-in 0.6s ease-out' }}
        >
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
              style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}
            >
              👨‍🍳
            </div>
            <div>
              <h1
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: 'Fraunces, Georgia, serif' }}
              >
                Como en Casa
              </h1>
              <p className="text-sm text-gray-500 font-medium">Restaurante · Catering</p>
            </div>
          </div>

          {/* Hero text */}
          <div>
            <h2
              className="text-5xl font-bold leading-tight"
              style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1A1A2E' }}
            >
              Cerebro de
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Cocina
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 leading-relaxed">
              El sistema inteligente para gestionar tu cocina profesional con precisión y eficiencia.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80"
                style={{ animation: `fade-in 0.6s ease-out ${i * 0.05}s both` }}
              >
                <span className="text-xl">{f.icon}</span>
                <span className="text-sm text-gray-700 font-medium">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, #4285F4, #2557C7)' }}>
            <div className="text-white">
              <div className="text-3xl font-bold" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>€99<span className="text-lg font-normal">/mes</span></div>
              <div className="text-blue-100 text-sm">por restaurante · sin permanencia</div>
            </div>
            <div className="ml-auto text-white/80 text-sm">
              <div>✓ Acceso completo</div>
              <div>✓ Soporte incluido</div>
              <div>✓ Actualizaciones</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <div
          className="w-full max-w-md"
          style={{ animation: 'slide-up 0.5s ease-out' }}
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
              style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}
            >
              👨‍🍳
            </div>
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              Cerebro de Cocina
            </h1>
          </div>

          {/* Login card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              Iniciar sesión
            </h3>
            <p className="text-gray-500 text-sm mb-8">Accede a tu cocina inteligente</p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="chef@restaurante.es"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-900 bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-900 bg-gray-50 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: loading ? '#9CA3AF' : 'linear-gradient(135deg, #4285F4, #2557C7)', boxShadow: loading ? 'none' : '0 4px 15px rgba(66,133,244,0.4)' }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Entrando...
                  </>
                ) : 'Entrar al sistema'}
              </button>
            </form>

            {/* Demo hint */}
            <div
              className="mt-6 p-4 rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
              style={{ background: '#EBF2FF' }}
              onClick={useDemoCredentials}
            >
              <p className="text-xs font-semibold text-blue-700 mb-1">🎮 Acceso demo (click para rellenar)</p>
              <p className="text-xs text-blue-600">demo@comiencasa.es · demo1234</p>
            </div>

            {/* Register link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                ¿Nuevo cliente?{' '}
                <a href="mailto:info@comiencasa.es?subject=Solicitar acceso Cerebro de Cocina"
                   className="text-blue-600 font-semibold hover:underline">
                  Solicitar acceso →
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-6">
            © 2024 Como en Casa · Cerebro de Cocina · v1.0
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
