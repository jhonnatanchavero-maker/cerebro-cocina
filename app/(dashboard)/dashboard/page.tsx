'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { BookOpen, TrendingUp, AlertTriangle, BarChart2, ShoppingCart, ChevronRight, Clock } from 'lucide-react'
import { recipes } from '@/data/recipes'

const categoryData = [
  { name: 'Segundo Plato', count: 57, color: '#4285F4' },
  { name: 'Primer Plato', count: 32, color: '#34A853' },
  { name: 'Base/Genérico', count: 10, color: '#FBBC04' },
  { name: 'Guarnición', count: 1, color: '#EA4335' },
]

const priceAlerts = [
  { name: 'Gambas frescas', supplier: 'Pescadería', change: +18.5, date: 'Hoy 09:30' },
  { name: 'Aceite de oliva virgen extra', supplier: 'Alimentación', change: +22.3, date: 'Ayer' },
  { name: 'Harina de trigo', supplier: 'Alimentación', change: +8.1, date: 'Hace 2 días' },
]

const topRecipes = [
  'POLLO TIKKA MASALA', 'LASAÑA DE CARNE', 'MERLUZA A LA BILBAINA',
  'CARRILLERA DE CERDO EN SALSA', 'ARROZ TRES DELICIAS'
]

function StatCard({ icon: Icon, label, value, sub, color, badge }:
  { icon: React.ElementType, label: string, value: string, sub?: string, color: string, badge?: string }) {
  return (
    <div className="card p-5 hover:shadow-card-hover transition-all duration-200 group">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-xl" style={{ background: color + '15' }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        {badge && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">
            {badge}
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-0.5">{value}</div>
      <div className="text-sm font-medium text-gray-500">{label}</div>
      {sub && <div className="text-xs text-gray-400 mt-1">{sub}</div>}
    </div>
  )
}

export default function DashboardPage() {
  const hour = new Date().getHours()
  const greeting = hour < 13 ? 'Buenos días' : hour < 20 ? 'Buenas tardes' : 'Buenas noches'

  const totalRecipes = recipes.length
  const totalIngredients = useMemo(() =>
    [...new Set(recipes.flatMap(r => r.ingredients.map(i => i.name)))].length, [])

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {greeting}, Chef 👨‍🍳
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            {new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
        <Link
          href="/produccion"
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm text-white transition-all"
          style={{ background: 'linear-gradient(135deg, #4285F4, #2557C7)', boxShadow: '0 4px 12px rgba(66,133,244,0.3)' }}
        >
          <Clock className="w-4 h-4" />
          Hoja del Jueves
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={BookOpen}
          label="Fichas Técnicas"
          value={String(totalRecipes)}
          sub={`${totalIngredients} ingredientes únicos`}
          color="#4285F4"
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
          badge="¡Nuevo!"
        />
        <StatCard
          icon={BarChart2}
          label="Margen Medio"
          value="68%"
          sub="Objetivo: 65%+"
          color="#FBBC04"
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Bar chart */}
        <div className="lg:col-span-2 card p-5">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-primary" />
            Recetas por Categoría
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={categoryData} barSize={36}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                formatter={(val) => [val + ' recetas', 'Cantidad']}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {categoryData.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quick access */}
        <div className="card p-5 flex flex-col">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            Recetas Destacadas
          </h2>
          <div className="flex-1 space-y-2">
            {topRecipes.map((name, i) => (
              <Link
                key={i}
                href={`/recetas/${name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-6 h-6 rounded-lg bg-primary-light text-primary text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <span className="text-sm text-gray-700 font-medium flex-1 line-clamp-1" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {name.split(' ').slice(0, 4).join(' ')}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
          <Link href="/recetas"
            className="mt-4 text-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
            Ver todas las recetas →
          </Link>
        </div>
      </div>

      {/* Alerts + Shopping */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Price alerts */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Alertas de Precio
            </h2>
            <Link href="/alertas" className="text-xs text-primary font-semibold hover:underline">
              Ver todas →
            </Link>
          </div>
          <div className="space-y-3">
            {priceAlerts.map((alert, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-100">
                <div className={`text-lg ${alert.change > 15 ? 'alert-badge' : ''}`}>🔴</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{alert.name}</p>
                  <p className="text-xs text-gray-500">{alert.supplier} · {alert.date}</p>
                </div>
                <div className="text-sm font-bold text-red-600 flex-shrink-0">
                  +{alert.change}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly production */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-accent" />
              Producción Semanal
            </h2>
          </div>
          <div className="text-center py-6">
            <div className="text-4xl mb-3">📋</div>
            <p className="text-gray-600 font-medium mb-2">Hoja del Jueves</p>
            <p className="text-sm text-gray-500 mb-4">
              Planifica la producción semanal e<br />
              genera la lista de compra automáticamente
            </p>
            <div className="flex gap-2 justify-center">
              <Link
                href="/produccion"
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm text-white"
                style={{ background: '#34A853' }}
              >
                Crear hoja
              </Link>
              <Link
                href="/compras"
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm border border-primary text-primary hover:bg-primary-light transition-colors"
              >
                Ver compras
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
