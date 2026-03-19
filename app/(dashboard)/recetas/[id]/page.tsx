'use client'

import { useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { QRCodeSVG } from 'qrcode.react'
import { ArrowLeft, Printer, Scale, AlertTriangle, Package, ChefHat, QrCode, MinusCircle, PlusCircle } from 'lucide-react'
import { getRecipeById, scaledIngredients } from '@/data/recipes'

const ALL_ALLERGENS = [
  { key: 'Gluten', label: 'Gluten', emoji: '🌾', color: '#F59E0B', bg: '#FEF3C7' },
  { key: 'Lacteos', label: 'Lácteos', emoji: '🥛', color: '#3B82F6', bg: '#DBEAFE' },
  { key: 'Huevos', label: 'Huevos', emoji: '🥚', color: '#EAB308', bg: '#FEF9C3' },
  { key: 'Pescado', label: 'Pescado', emoji: '🐟', color: '#06B6D4', bg: '#CFFAFE' },
  { key: 'Mariscos', label: 'Mariscos', emoji: '🦐', color: '#F97316', bg: '#FED7AA' },
  { key: 'Frutos secos', label: 'Frutos Secos', emoji: '🥜', color: '#92400E', bg: '#E8D5B7' },
  { key: 'Cacahuetes', label: 'Cacahuetes', emoji: '🥜', color: '#78350F', bg: '#FDE68A' },
  { key: 'Soja', label: 'Soja', emoji: '🫘', color: '#65A30D', bg: '#DCFCE7' },
  { key: 'Apio', label: 'Apio', emoji: '🌿', color: '#16A34A', bg: '#D1FAE5' },
  { key: 'Mostaza', label: 'Mostaza', emoji: '🟡', color: '#CA8A04', bg: '#FFFBEB' },
  { key: 'Sesamo', label: 'Sésamo', emoji: '⚪', color: '#6B7280', bg: '#F3F4F6' },
  { key: 'Altramuces', label: 'Altramuces', emoji: '🌼', color: '#7C3AED', bg: '#EDE9FE' },
  { key: 'Moluscos', label: 'Moluscos', emoji: '🐚', color: '#0EA5E9', bg: '#BAE6FD' },
  { key: 'Sulfitos', label: 'Sulfitos', emoji: '🍷', color: '#DC2626', bg: '#FEE2E2' },
]

const SUPPLIER_COLORS: Record<string, string> = {
  'Carnicerai': '#F97316',
  'Pescaderia': '#06B6D4',
  'Fruteria/Verduleria': '#34A853',
  'Alimentacion': '#4285F4',
  'Bebidas': '#7C3AED',
}

function formatQty(qty: number, unit: string): string {
  if (qty === 0) return 'c/s'
  const formatted = qty >= 1000 && (unit === 'g' || unit === 'ml')
    ? (qty / 1000).toFixed(3).replace(/\.?0+$/, '') + (unit === 'g' ? ' kg' : ' L')
    : qty % 1 === 0 ? qty.toString() + (unit ? ' ' + unit : '')
    : qty.toFixed(1) + (unit ? ' ' + unit : '')
  return formatted
}

export default function RecipePage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const recipe = getRecipeById(id)
  const [targetPortions, setTargetPortions] = useState(recipe?.portions || 10)
  const [showQR, setShowQR] = useState(false)
  const printRef = useRef<HTMLDivElement>(null)

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <div className="text-5xl">🔍</div>
        <h2 className="text-xl font-bold text-gray-700">Receta no encontrada</h2>
        <button onClick={() => router.back()} className="text-primary font-semibold hover:underline flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Volver
        </button>
      </div>
    )
  }

  const scaled = scaledIngredients(recipe, targetPortions)
  const scale = targetPortions / recipe.portions
  const presentAllergens = ALL_ALLERGENS.filter(a => (recipe.allergens as string[]).includes(a.key))
  const absentAllergens = ALL_ALLERGENS.filter(a => !(recipe.allergens as string[]).includes(a.key))

  function handlePrint() {
    window.print()
  }

  const recipeUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/recetas/${recipe.id}`
    : `https://cerebro.comiencasa.es/recetas/${recipe.id}`

  return (
    <div ref={printRef}>
      {/* Back + actions */}
      <div className="flex items-center justify-between mb-6 no-print">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Todas las recetas
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => setShowQR(!showQR)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border border-primary text-primary hover:bg-primary-light transition-colors"
          >
            <QrCode className="w-4 h-4" />
            QR
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <Printer className="w-4 h-4" />
            Imprimir
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="card p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-primary-light text-primary">
                {recipe.category}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600">
                📅 {recipe.season}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-green-50 text-green-700">
                👥 {recipe.portions} raciones base
              </span>
            </div>

            <h1
              className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: 'Fraunces, Georgia, serif' }}
            >
              {recipe.title}
            </h1>
          </div>

          {/* QR code */}
          {showQR && (
            <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <QRCodeSVG value={recipeUrl} size={120} level="M" />
              <p className="text-xs text-gray-500 mt-2 text-center max-w-[120px]">Escanea para ver la ficha</p>
            </div>
          )}
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: ingredients */}
        <div className="lg:col-span-2 space-y-6">
          {/* Portion scaler */}
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-primary" />
              <h2 className="font-bold text-gray-900">Escalar Raciones</h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTargetPortions(Math.max(1, targetPortions - 1))}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary"
              >
                <MinusCircle className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={targetPortions}
                  onChange={e => setTargetPortions(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center text-2xl font-bold text-primary border-2 border-primary-light rounded-xl py-2 focus:outline-none focus:border-primary"
                />
                <span className="text-gray-600 font-medium">personas</span>
              </div>
              <button
                onClick={() => setTargetPortions(targetPortions + 1)}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-primary"
              >
                <PlusCircle className="w-6 h-6" />
              </button>
              <div className="ml-auto px-3 py-1.5 rounded-xl text-sm font-semibold bg-primary-light text-primary">
                ×{scale.toFixed(2)}
              </div>
            </div>

            {/* Quick buttons */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {[10, 20, 30, 50, 100].map(n => (
                <button
                  key={n}
                  onClick={() => setTargetPortions(n)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all
                    ${targetPortions === n ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {n}p
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients table */}
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-5 h-5 text-primary" />
              <h2 className="font-bold text-gray-900">
                Ingredientes para <span className="text-primary">{targetPortions} raciones</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 font-semibold text-gray-500 text-xs uppercase tracking-wide">Ingrediente</th>
                    <th className="text-right py-2 font-semibold text-gray-500 text-xs uppercase tracking-wide">Base ({recipe.portions}p)</th>
                    <th className="text-right py-2 font-semibold text-gray-500 text-xs uppercase tracking-wide pr-2">Scaled ({targetPortions}p)</th>
                    <th className="text-center py-2 font-semibold text-gray-500 text-xs uppercase tracking-wide">Proveedor</th>
                  </tr>
                </thead>
                <tbody>
                  {scaled.map((ing, i) => {
                    const supplierColor = SUPPLIER_COLORS[ing.supplier] || '#6B7280'
                    return (
                      <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="py-2.5 font-medium text-gray-900">{ing.name}</td>
                        <td className="py-2.5 text-right text-gray-500 text-xs">
                          {formatQty(recipe.ingredients[i]?.quantity || 0, recipe.ingredients[i]?.unit || 'g')}
                        </td>
                        <td className="py-2.5 text-right font-semibold text-gray-900 pr-2">
                          {formatQty(ing.quantity, ing.unit)}
                        </td>
                        <td className="py-2.5 text-center">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ background: supplierColor + '20', color: supplierColor }}
                          >
                            {ing.supplier?.split('/')[0] || '—'}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Elaboration */}
          {recipe.elaboration && (
            <div className="card p-5">
              <div className="flex items-center gap-3 mb-4">
                <ChefHat className="w-5 h-5 text-primary" />
                <h2 className="font-bold text-gray-900">Elaboración</h2>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {recipe.elaboration}
              </div>
            </div>
          )}
        </div>

        {/* Right: allergens */}
        <div className="space-y-6">
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h2 className="font-bold text-gray-900">Alérgenos</h2>
              <span className="text-xs text-gray-500">EU 1169/2011</span>
            </div>

            {presentAllergens.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Contiene</p>
                <div className="grid grid-cols-2 gap-2">
                  {presentAllergens.map(a => (
                    <div
                      key={a.key}
                      className="flex items-center gap-2 p-2 rounded-xl border"
                      style={{ background: a.bg, borderColor: a.color + '40' }}
                    >
                      <span className="text-lg">{a.emoji}</span>
                      <span className="text-xs font-semibold" style={{ color: a.color }}>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {absentAllergens.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">No contiene</p>
                <div className="flex flex-wrap gap-1.5">
                  {absentAllergens.map(a => (
                    <div
                      key={a.key}
                      className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <span className="text-sm opacity-40">{a.emoji}</span>
                      <span className="text-xs text-gray-400">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* QR print card */}
          <div className="card p-5 text-center">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
              <QrCode className="w-4 h-4 text-primary" />
              Código QR
            </h2>
            <div className="flex justify-center mb-3">
              <QRCodeSVG value={recipeUrl} size={130} level="H" includeMargin />
            </div>
            <p className="text-xs text-gray-500 mb-3">
              Escanea para ver la ficha con cantidades para <strong>{targetPortions} raciones</strong>
            </p>
            <button
              onClick={handlePrint}
              className="w-full py-2 px-4 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Imprimir QR + Ficha
            </button>
          </div>

          {/* Recipe info */}
          <div className="card p-5 space-y-3 text-sm">
            <h2 className="font-bold text-gray-900">Información</h2>
            <div className="flex justify-between">
              <span className="text-gray-500">Temporada</span>
              <span className="font-medium text-gray-900">{recipe.season}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Raciones base</span>
              <span className="font-medium text-gray-900">{recipe.portions} personas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Ingredientes</span>
              <span className="font-medium text-gray-900">{recipe.ingredients.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Alérgenos</span>
              <span className="font-medium text-gray-900">{recipe.allergens.length} de 14</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
