'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, ClipboardList, ShoppingCart,
  Calculator, Bell, Settings, LogOut, Menu, X,
  ChefHat, Utensils
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  const expanded = mobileOpen || hovered

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <div className="flex h-screen bg-bg overflow-hidden">

      {/* ── Sidebar ───────────────────────────────────────────── */}
      <motion.aside
        className="fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-sidebar-border overflow-hidden"
        initial={false}
        animate={{
          width: expanded ? 240 : 64,
          x: mobileOpen ? 0 : undefined,
        }}
        style={{ boxShadow: expanded ? '2px 0 20px rgba(66,133,244,0.06)' : '1px 0 0 #F1F5F9' }}
        transition={{ type: 'spring', stiffness: 380, damping: 38 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-sidebar-border flex-shrink-0 overflow-hidden">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}
          >
            <ChefHat className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
          </div>
          <motion.div
            className="overflow-hidden whitespace-nowrap"
            animate={{ opacity: expanded ? 1 : 0, x: expanded ? 0 : -8 }}
            transition={{ duration: 0.18 }}
          >
            <p className="text-sm font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Cerebro de
            </p>
            <p className="text-xs font-semibold" style={{ color: '#4285F4' }}>Cocina</p>
          </motion.div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-hidden">
          {navItems.map(({ href, icon: Icon, label, badge }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group relative cursor-pointer
                  ${active
                    ? 'bg-primary-50 text-primary font-semibold'
                    : 'text-slate-500 hover:bg-sidebar-hover hover:text-slate-800'
                  }`}
                style={{ minHeight: 44 }}
              >
                {active && <span className="nav-active-dot" />}
                <Icon
                  className="flex-shrink-0 transition-colors"
                  style={{ width: 18, height: 18, color: active ? '#4285F4' : undefined }}
                />
                <motion.div
                  className="flex items-center gap-2 overflow-hidden whitespace-nowrap flex-1"
                  animate={{ opacity: expanded ? 1 : 0, width: expanded ? 'auto' : 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-sm">{label}</span>
                  {badge && (
                    <span className={`ml-auto text-xs font-bold px-1.5 py-0.5 rounded-full flex-shrink-0
                      ${active ? 'bg-primary-100 text-primary-700' : 'bg-slate-100 text-slate-500'}`}>
                      {badge}
                    </span>
                  )}
                </motion.div>
              </Link>
            )
          })}
        </nav>

        {/* Divider */}
        <div className="mx-2 h-px bg-sidebar-border" />

        {/* Bottom */}
        <div className="p-2 space-y-0.5 overflow-hidden">
          <Link
            href="/configuracion"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-sidebar-hover hover:text-slate-800 transition-all cursor-pointer"
            style={{ minHeight: 44 }}
          >
            <Settings className="flex-shrink-0" style={{ width: 18, height: 18 }} />
            <motion.span
              className="text-sm whitespace-nowrap overflow-hidden"
              animate={{ opacity: expanded ? 1 : 0, width: expanded ? 'auto' : 0 }}
              transition={{ duration: 0.15 }}
            >
              Configuración
            </motion.span>
          </Link>
          <button
            onClick={() => router.push('/')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all cursor-pointer"
            style={{ minHeight: 44 }}
          >
            <LogOut className="flex-shrink-0" style={{ width: 18, height: 18 }} />
            <motion.span
              className="text-sm whitespace-nowrap overflow-hidden"
              animate={{ opacity: expanded ? 1 : 0, width: expanded ? 'auto' : 0 }}
              transition={{ duration: 0.15 }}
            >
              Salir
            </motion.span>
          </button>
        </div>
      </motion.aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ marginLeft: 64 }}>

        {/* Top bar */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center px-4 lg:px-6 gap-4 flex-shrink-0">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Utensils className="w-4 h-4 text-primary hidden sm:block" />
            <span
              className="text-lg font-bold text-slate-900 hidden sm:block"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              Como en Casa
            </span>
            <span className="flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium hidden sm:flex">
              <span className="status-online" />
              En línea
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            {/* Alert bell */}
            <Link
              href="/alertas"
              className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Ver alertas"
            >
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full alert-badge" />
            </Link>
            {/* Avatar */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold select-none"
              style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}
            >
              C
            </div>
          </div>
        </header>

        {/* Page */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Voice Assistant */}
      <VoiceAssistant />
    </div>
  )
}
