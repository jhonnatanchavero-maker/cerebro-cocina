'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import {
  BookOpen, TrendingUp, AlertTriangle, BarChart2,
  ShoppingCart, ChevronRight, Clock, ArrowUpRight,
  ClipboardList
} from 'lucide-react'
import { recipes } from '@/data/recipes'

const categoryData = [
  { name: 'Segundo', count: 57, color: '#4285F4' },
  { name: 'Primero', count: 32, color: '#34A853' },
  { name: 'Base', count: 10, color: '#FBBC04' },
  { name: 'Guarnición', count: 1, color: '#EA4335' },
]

const priceAlerts = [
  { name: 'Gambas frescas', supplier: 'Pescadería', change: +18.5, date: 'Hoy 09:30' },
  { name: 'Aceite de oliva virgen extra', supplier: 'Alimentación', change: +22.3, date: 'Ayer' },
  { name: 'Harina de trigo', supplier: 'Alimentación', change: +8.1, date: 'Hace 2 días' },
]

const topRecipes = [
  'POLLO TIKKA MASALA',
  'LASAÑA DE CARNE',
  'MERLUZA A LA BILBAINA',
  'CARRILLERA DE CERDO EN SALSA',
  'ARROZ TRES DELICIAS',
]

// Shared fade-up animation props
const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' as const, delay },
})

// ── KPI Card ─────────────────────────────────────────────────────────────────
interface StatCardProps {
  icon: React.ElementType
  label: string
  value: string
  sub?: string
  color: string
  badge?: string
  href?: string
}

function StatCard({ icon: Icon, label, value, sub, color, badge, href }: StatCardProps) {
  const inner = (
    <motion.div
      className="card p-5 cursor-pointer group"
      whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(66,133,244,0.14)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: color + '18' }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        {badge && (
          <span className="badge-danger">{badge}</span>
        )}
      </div>
      <div className="text-2xl font-bold text-slate-900 mb-0.5 tracking-tight">{value}</div>
      <div className="text-sm font-medium text-slate-500">{label}</div>
      {sub && <div className="text-xs text-slate-400 mt-1">{sub}</div>}
    </motion.div>
  )

  return href ? <Link href={href}>{inner}</Link> : inner
}

// ── Chart tooltip ────────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-slate-100 rounded-xl shadow-card-lg px-3 py-2 text-sm">
      <p className="font-semibold text-slate-900">{label}</p>
      <p className="text-primary">{payload[0].value} recetas</p>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const hour = new Date().getHours()
  const greeting = hour < 13 ? 'Buenos días' : hour < 20 ? 'Buenas tardes' : 'Buenas noches'

  const totalRecipes = recipes.length
  const totalIngredients = useMemo(
    () => [...new Set(recipes.flatMap(r => r.ingredients.map(i => i.name)))].length,
    []
  )

  return (
    <div className="space-y-6">
      {/* ── Header ────────────────────────────────────────── */}
      <motion.div {...fadeUpProps(0)} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1
            className="text-2xl font-bold text-slate-900"
            style={{ fontFamily: 'Fraunces, Georgia, serif' }}
          >
            {greeting}, Chef
          </h1>
          <p className="text-slate-500 mt-0.5 text-sm">
            {new Date().toLocaleDateString('es-ES', {
              weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
            })}
          </p>
        </div>
        <Link
          href="/produccion"
          className="btn-primary flex-shrink-0"
        >
          <Clock className="w-4 h-4" />
          Hoja del Jueves
          <ChevronRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* ── KPI cards ─────────────────────────────────────── */}
      <motion.div {...fadeUpProps(0.07)} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={BookOpen}
          label="Fichas Técnicas"
          value={String(totalRecipes)}
          sub={`${totalIngredients} ingredientes únicos`}
          color="#4285F4"
          href="/recetas"
        />
        <StatCard
          icon={TrendingUp}
          label="Coste Medio/Ración"
          value="€3.20"
          sub="Margen medio 68%"
          color="#34A853"
        />
        <StatCard
          icon={AlertTriangle}
          label="Alertas de Precio"
          value="3"
          sub="Últimas 48 horas"
          color="#EA4335"
          badge="Nuevo"
          href="/alertas"
        />
        <StatCard
          icon={BarChart2}
          label="Margen Medio"
          value="68%"
          sub="Objetivo: 65%+"
          color="#FBBC04"
          href="/escanallo"
        />
      </motion.div>

      {/* ── Charts row ────────────────────────────────────── */}
      <motion.div {...fadeUpProps(0.14)} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Bar chart */}
        <div className="lg:col-span-2 card p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <BarChart2 className="w-4 h-4 text-primary" />
              Recetas por Categoría
            </h2>
            <Link
              href="/recetas"
              className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-700 transition-colors"
            >
              Ver todas
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={categoryData} barSize={40} barGap={8}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: '#94A3B8', fontFamily: 'Inter, system-ui' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: '#94A3B8', fontFamily: 'Inter, system-ui' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F8FAFC' }} />
              <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                {categoryData.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} fillOpacity={0.9} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top recipes */}
        <div className="card p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <BookOpen className="w-4 h-4 text-primary" />
              Recetas Destacadas
            </h2>
          </div>
          <div className="flex-1 space-y-1">
            {topRecipes.map((name, i) => (
              <Link
                key={i}
                href={`/recetas/${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
              >
                <div
                  className="w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0"
                  style={{ background: '#EBF2FF', color: '#4285F4' }}
                >
                  {i + 1}
                </div>
                <span
                  className="text-sm text-slate-700 font-medium flex-1 line-clamp-1"
                  style={{ fontFamily: 'Fraunces, Georgia, serif' }}
                >
                  {name.split(' ').slice(0, 4).join(' ')}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
          <Link
            href="/recetas"
            className="mt-4 text-center text-sm font-semibold text-primary hover:text-primary-700 transition-colors"
          >
            Ver todas las recetas →
          </Link>
        </div>
      </motion.div>

      {/* ── Alerts + Production ───────────────────────────── */}
      <motion.div {...fadeUpProps(0.21)} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Price alerts */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Alertas de Precio
            </h2>
            <Link href="/alertas" className="text-xs font-semibold text-primary hover:text-primary-700 transition-colors">
              Ver todas →
            </Link>
          </div>
          <div className="space-y-2.5">
            {priceAlerts.map((alert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{ background: '#FEF2F2', borderColor: '#FECACA' }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{alert.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{alert.supplier} · {alert.date}</p>
                </div>
                <div className="text-sm font-bold text-red-600 flex-shrink-0 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +{alert.change}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly production */}
        <div className="card p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <ShoppingCart className="w-4 h-4 text-accent" />
              Producción Semanal
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center py-4 gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: '#F0FDF4' }}
            >
              <ClipboardList className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="text-slate-700 font-semibold">Hoja del Jueves</p>
              <p className="text-sm text-slate-500 mt-1">
                Planifica la producción semanal y genera<br />la lista de compra automáticamente
              </p>
            </div>
            <div className="flex gap-2.5">
              <Link href="/produccion" className="btn-primary text-sm py-2 px-4">
                Crear hoja
              </Link>
              <Link href="/compras" className="btn-secondary text-sm py-2 px-4">
                Ver compras
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

