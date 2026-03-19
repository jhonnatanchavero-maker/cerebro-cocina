'use client'

import { useState } from 'react'
import { Bell, TrendingUp, TrendingDown, Camera, Settings, AlertTriangle, Check } from 'lucide-react'
import toast from 'react-hot-toast'

interface PriceAlert {
  id: string
  ingredient: string
  supplier: string
  oldPrice: number
  newPrice: number
  changePercent: number
  date: string
  isRead: boolean
}

const MOCK_ALERTS: PriceAlert[] = [
  { id: '1', ingredient: 'Gambas frescas', supplier: 'Pescadería', oldPrice: 14.50, newPrice: 17.10, changePercent: 17.9, date: 'Hoy 09:30', isRead: false },
  { id: '2', ingredient: 'Aceite de oliva virgen extra', supplier: 'Alimentación', oldPrice: 4.20, newPrice: 5.15, changePercent: 22.6, date: 'Hoy 08:15', isRead: false },
  { id: '3', ingredient: 'Harina de trigo', supplier: 'Alimentación', oldPrice: 0.85, newPrice: 0.92, changePercent: 8.2, date: 'Ayer', isRead: false },
  { id: '4', ingredient: 'Ternera para guisar', supplier: 'Carnicería', oldPrice: 11.00, newPrice: 12.50, changePercent: 13.6, date: 'Hace 2 días', isRead: true },
  { id: '5', ingredient: 'Patatas', supplier: 'Frutería/Verdulería', oldPrice: 0.65, newPrice: 0.58, changePercent: -10.8, date: 'Hace 3 días', isRead: true },
  { id: '6', ingredient: 'Merluza fresca', supplier: 'Pescadería', oldPrice: 8.50, newPrice: 7.80, changePercent: -8.2, date: 'Hace 4 días', isRead: true },
  { id: '7', ingredient: 'Chorizo ibérico', supplier: 'Carnicería', oldPrice: 9.00, newPrice: 10.20, changePercent: 13.3, date: 'Hace 5 días', isRead: true },
]

export default function AlertasPage() {
  const [alerts, setAlerts] = useState<PriceAlert[]>(MOCK_ALERTS)
  const [threshold, setThreshold] = useState(10)

  const unread = alerts.filter(a => !a.isRead)
  const increases = alerts.filter(a => a.changePercent > 0)
  const decreases = alerts.filter(a => a.changePercent < 0)

  function markAllRead() {
    setAlerts(prev => prev.map(a => ({ ...a, isRead: true })))
    toast.success('Todas las alertas marcadas como leídas')
  }

  function markRead(id: string) {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, isRead: true } : a))
  }

  function playSoundAlert() {
    // Create a simple beep using Web Audio API
    try {
      const AudioContext = window.AudioContext || (window as unknown as Record<string, unknown>).webkitAudioContext as typeof window.AudioContext
      if (AudioContext) {
        const ctx = new AudioContext()
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.frequency.value = 880
        gain.gain.setValueAtTime(0.3, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)
        osc.start(ctx.currentTime)
        osc.stop(ctx.currentTime + 0.3)
      }
    } catch { /* ignore */ }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            🔔 Alertas de Precio
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            {unread.length} alertas sin leer · {increases.length} subidas · {decreases.length} bajadas
          </p>
        </div>
        {unread.length > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-primary-light text-primary hover:bg-primary/20 transition-colors"
          >
            <Check className="w-4 h-4" />
            Marcar todas leídas
          </button>
        )}
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card p-4 text-center border-l-4 border-red-400">
          <div className="text-2xl font-bold text-red-500">{increases.length}</div>
          <div className="text-xs text-gray-500 mt-1">Subidas de precio</div>
        </div>
        <div className="card p-4 text-center border-l-4 border-green-400">
          <div className="text-2xl font-bold text-green-500">{decreases.length}</div>
          <div className="text-xs text-gray-500 mt-1">Bajadas de precio</div>
        </div>
        <div className="card p-4 text-center border-l-4 border-orange-400">
          <div className="text-2xl font-bold text-orange-500">
            {alerts.filter(a => a.changePercent > threshold).length}
          </div>
          <div className="text-xs text-gray-500 mt-1">Críticas (&gt;{threshold}%)</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts list */}
        <div className="lg:col-span-2 space-y-3">
          <h2 className="font-bold text-gray-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Historial de alertas
          </h2>

          {alerts.map(alert => {
            const isIncrease = alert.changePercent > 0
            const isCritical = Math.abs(alert.changePercent) > threshold
            return (
              <div
                key={alert.id}
                onClick={() => markRead(alert.id)}
                className={`card p-4 cursor-pointer transition-all hover:shadow-card-hover
                  ${!alert.isRead ? 'border-l-4 ' + (isIncrease ? 'border-red-400' : 'border-green-400') : 'opacity-70'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-xl flex-shrink-0 ${isCritical && !alert.isRead ? 'alert-badge' : ''}`}
                       style={{ background: isIncrease ? '#FEE2E2' : '#D1FAE5' }}>
                    {isIncrease
                      ? <TrendingUp className="w-4 h-4 text-red-500" />
                      : <TrendingDown className="w-4 h-4 text-green-500" />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-gray-900 text-sm">{alert.ingredient}</p>
                      {!alert.isRead && (
                        <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      )}
                      {isCritical && !alert.isRead && (
                        <span className="text-xs px-1.5 py-0.5 rounded-full bg-red-100 text-red-600 font-semibold">
                          ¡Crítico!
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{alert.supplier} · {alert.date}</p>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-xs text-gray-400">€{alert.oldPrice.toFixed(2)}/kg</span>
                      <span className="text-xs">→</span>
                      <span className="text-xs font-bold text-gray-900">€{alert.newPrice.toFixed(2)}/kg</span>
                    </div>
                  </div>
                  <div className={`text-right flex-shrink-0 text-sm font-bold
                    ${isIncrease ? 'text-red-500' : 'text-green-500'}`}>
                    {isIncrease ? '+' : ''}{alert.changePercent.toFixed(1)}%
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Config + Scan */}
        <div className="space-y-4">
          {/* Alert config */}
          <div className="card p-5">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4 text-primary" />
              Configurar alertas
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Umbral de alerta (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={threshold}
                    onChange={e => setThreshold(parseInt(e.target.value))}
                    className="flex-1 accent-primary"
                  />
                  <span className="text-sm font-bold text-primary w-10 text-right">{threshold}%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Alertar cuando el precio cambie más de {threshold}%
                </p>
              </div>

              <button
                onClick={() => {
                  playSoundAlert()
                  toast.success('Alerta sonora activada ✓')
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-medium border border-primary text-primary hover:bg-primary-light transition-colors"
              >
                <Bell className="w-4 h-4" />
                Probar alerta sonora
              </button>
            </div>
          </div>

          {/* Scan albaran */}
          <div className="card p-5">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4 text-primary" />
              Escanear Albarán
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-primary-light rounded-2xl p-6 text-center border-2 border-dashed border-primary/30">
              <div className="text-4xl mb-3">📸</div>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                Escaneo de albaranes con IA
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Fotografía el albarán del proveedor y actualizaremos los precios automáticamente
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-light text-primary">
                🚀 Próximamente
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Integración con Claude Vision API · OCR automático
            </p>
          </div>

          {/* Stats */}
          <div className="card p-4">
            <h2 className="font-bold text-gray-900 mb-3 text-sm">Ingredientes más volátiles</h2>
            <div className="space-y-2">
              {['Aceite de oliva', 'Gambas', 'Ternera', 'Bacalao'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="text-xs font-medium text-gray-700 flex-1">{item}</div>
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${[85, 70, 55, 40][i]}%`,
                        background: ['#EA4335', '#F97316', '#FBBC04', '#34A853'][i]
                      }}
                    />
                  </div>
                  <div className="text-xs font-bold" style={{
                    color: ['#EA4335', '#F97316', '#FBBC04', '#34A853'][i]
                  }}>
                    {['+22%', '+18%', '+14%', '+8%'][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
