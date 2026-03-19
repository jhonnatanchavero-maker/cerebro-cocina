import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Cerebro de Cocina | Como en Casa',
  description: 'El sistema inteligente para gestionar tu cocina profesional. 100 fichas técnicas, alérgenos, escandallo, producción semanal y asistente IA.',
  keywords: 'cocina profesional, fichas técnicas, alérgenos, escandallo, restaurante',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&display=swap"
          rel="stylesheet"
        />
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
      </body>
    </html>
  )
}
