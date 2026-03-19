'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, BookOpen, ClipboardList, ShoppingCart,
  Calculator, Bell, Settings, Mic, X, ChevronRight,
  LogOut, Menu
} from 'lucide-react'
import VoiceAssistant from '@/components/VoiceAssistant'

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: null },
  { href: '/recetas', icon: BookOpen, label: 'Recetas', badge: '100' },
  { href: '/produccion', icon: ClipboardList, label: 'Producción', badge: null },
  { href: '/compras', icon: ShoppingCart, label: 'Compras', badge: null },
  { href: '/escanallo', icon: Calculator, label: 'Escandallo', badge: null },
  { href: '/alertas', icon: Bell, label: 'Alertas', badge: '3' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <div className="flex h-screen bg-bg overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 ease-in-out bg-white border-r border-gray-100 shadow-sm
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${sidebarExpanded ? 'w-60' : 'w-16 lg:w-16 hover:w-60'}
        `}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
        style={{ transition: 'width 0.25s ease, transform 0.3s ease' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-3 h-16 border-b border-gray-50 overflow-hidden">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm"
            style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}
          >
            👨‍🍳
          </div>
          <div className="overflow-hidden whitespace-nowrap">
            <p className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Cerebro de
            </p>
            <p className="text-xs text-blue-600 font-semibold">Cocina</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-hidden">
          {navItems.map(({ href, icon: Icon, label, badge }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group relative overflow-hidden whitespace-nowrap
                ${isActive(href)
                  ? 'bg-primary-light text-primary font-semibold'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm overflow-hidden">{label}</span>
              {badge && (
                <span className={`ml-auto text-xs font-bold px-1.5 py-0.5 rounded-full flex-shrink-0
                  ${isActive(href) ? 'bg-primary/20 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                  {badge}
                </span>
              )}
              {isActive(href) && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-2 border-t border-gray-50 space-y-1 overflow-hidden">
          <Link href="/configuracion"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-all whitespace-nowrap overflow-hidden">
            <Settings className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">Configuración</span>
          </Link>
          <button
            onClick={() => router.push('/')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all whitespace-nowrap overflow-hidden">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">Salir</span>
          </button>
        </div>
      </aside>

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-16">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center px-4 lg:px-6 gap-4 flex-shrink-0">
          {/* Mobile menu */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900 hidden sm:block" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Como en Casa
            </span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium hidden sm:block">
              ● En línea
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Link href="/alertas" className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full alert-badge" />
            </Link>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-sm font-bold">
              C
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>

      {/* Voice Assistant */}
      <VoiceAssistant />
    </div>
  )
}
