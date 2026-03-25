'use client'

import { useState, useEffect } from 'react'
import { Download, X, Smartphone } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) return
    // Check if already dismissed
    if (localStorage.getItem('pwa-install-dismissed')) return

    // iOS detection
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window.navigator as any).standalone
    setIsIOS(ios)
    if (ios) {
      setTimeout(() => setShowBanner(true), 3000)
      return
    }

    // Android / Chrome
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setTimeout(() => setShowBanner(true), 2000)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') setShowBanner(false)
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowBanner(false)
    setDismissed(true)
    localStorage.setItem('pwa-install-dismissed', '1')
  }

  if (!showBanner || dismissed) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up"
      style={{ animation: 'slideUp 0.4s ease-out' }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
      `}</style>

      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        border: '1px solid rgba(66,133,244,0.4)',
        borderRadius: '16px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}>
        {/* Icon */}
        <div style={{
          width: 48, height: 48, borderRadius: 12, flexShrink: 0,
          background: 'linear-gradient(135deg, #4285F4, #34A853)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Smartphone size={24} color="white" />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: 'white', fontWeight: 700, fontSize: 14, margin: 0 }}>
            Instala Cerebro Cocina
          </p>
          {isIOS ? (
            <p style={{ color: '#94a3b8', fontSize: 12, margin: '2px 0 0' }}>
              Pulsa <strong style={{ color: '#4285F4' }}>Compartir</strong> → "Añadir a pantalla de inicio"
            </p>
          ) : (
            <p style={{ color: '#94a3b8', fontSize: 12, margin: '2px 0 0' }}>
              Acceso directo desde tu tablet o móvil
            </p>
          )}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          {!isIOS && (
            <button
              onClick={handleInstall}
              style={{
                background: 'linear-gradient(135deg, #4285F4, #34A853)',
                border: 'none', borderRadius: 10,
                color: 'white', fontWeight: 700, fontSize: 13,
                padding: '8px 16px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <Download size={14} />
              Instalar
            </button>
          )}
          <button
            onClick={handleDismiss}
            style={{
              background: 'rgba(255,255,255,0.1)', border: 'none',
              borderRadius: 10, color: '#94a3b8', padding: '8px',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
