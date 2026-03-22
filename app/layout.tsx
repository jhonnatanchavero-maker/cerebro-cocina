import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Como en Casa · Cerebro de Cocina',
  description: 'El sistema inteligente para gestionar tu cocina profesional. 100 fichas técnicas, alérgenos, escandallo, producción semanal y asistente IA de voz.',
  keywords: 'cocina profesional, fichas técnicas, alérgenos, escandallo, restaurante, como en casa',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Chef IA',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Chef IA',
    'application-name': 'Chef IA',
    'msapplication-TileColor': '#4285F4',
  }
}

export const viewport: Viewport = {
  themeColor: '#4285F4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Chef IA" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: { borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '14px' },
            success: { iconTheme: { primary: '#34A853', secondary: '#fff' } },
            error: { iconTheme: { primary: '#EA4335', secondary: '#fff' } },
          }}
        />
        {/* Register service worker */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').catch(function() {});
              });
            }
          `
        }} />
      </body>
    </html>
  )
}
