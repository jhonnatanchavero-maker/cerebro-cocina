'use client'

import { useState, useMemo, useEffect } from 'react'
import { Calculator, TrendingUp, Save, ChevronDown, RefreshCw } from 'lucide-react'
import toast from 'react-hot-toast'
import { recipes, Recipe, scaledIngredients } from '@/data/recipes'

interface IngredientPrice {
  name: string
  quantity: number
  unit: string
  pricePerKg: number
  totalCost: number
}

interface SavedEscandallo {
  recipeId: string
  recipeTitle: string
  pricePerKg: Record<string, number>
  totalCost: number
  costPerRation: number
  suggestedPrice: number
  margin: number
  savedAt: string
}

function getUnitInKg(qty: number, unit: string): number {
  if (!qty) return 0
  if (unit === 'kg') return qty
  if (unit === 'g') return qty / 1000
  if (unit === 'L' || unit === 'l') return qty
  if (unit === 'ml') return qty / 1000
  return qty / 1000
}

export default function EscanalloPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [prices, setPrices] = useState<Record<string, number>>({})
  const [sellPrice, setSellPrice] = useState(0)
  const [history, setHistory] = useState<SavedEscandallo[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('escanallo_history')
    if (saved) {
      try { setHistory(JSON.parse(saved)) } catch { /* ignore */ }
    }
  }, [])

  function loadRecipe(recipe: Recipe) {
    setSelectedRecipe(recipe)
    // Load saved prices for this recipe
    const saved = history.find(h => h.recipeId === recipe.id)
    if (saved) {
      setPrices(saved.pricePerKg)
      setSellPrice(saved.suggestedPrice)
    } else {
      // Default prices
      const defaultPrices: Record<string, number> = {}
      recipe.ingredients.forEach(ing => {
        const n = ing.name.toLowerCase()
        if (n.includes('ternera') || n.includes('carne')) defaultPrices[ing.name] = 12
        else if (n.includes('pollo') || n.includes('pechuga') || n.includes('alita')) defaultPrices[ing.name] = 5
        else if (n.includes('cerdo') || n.includes('costilla')) defaultPrices[ing.name] = 6
        else if (n.includes('merluza') || n.includes('bacalao')) defaultPrices[ing.name] = 9
        else if (n.includes('gambas') || n.includes('langostino') || n.includes('gambon')) defaultPrices[ing.name] = 16
        else if (n.includes('aceite')) defaultPrices[ing.name] = 5
        else if (n.includes('arroz') || n.includes('pasta') || n.includes('harina')) defaultPrices[ing.name] = 1.5
        else if (n.includes('patata') || n.includes('cebolla') || n.includes('zanahoria')) defaultPrices[ing.name] = 0.8
        else if (n.includes('tomate') || n.includes('pimiento')) defaultPrices[ing.name] = 1.5
        else if (n.includes('queso') || n.includes('nata') || n.includes('leche')) defaultPrices[ing.name] = 3
        else if (n.includes('vino')) defaultPrices[ing.name] = 4
        else defaultPrices[ing.name] = 2
      })
      setPrices(defaultPrices)
      setSellPrice(0)
    }
  }

  const ingredientCosts = useMemo<IngredientPrice[]>(() => {
    if (!selectedRecipe) return []
    return selectedRecipe.ingredients.map(ing => {
      const pricePerKg = prices[ing.name] || 0
      const quantityInKg = getUnitInKg(ing.quantity, ing.unit)
      return {
        name: ing.name,
        quantity: ing.quantity,
        unit: ing.unit,
        pricePerKg,
        totalCost: quantityInKg * pricePerKg
      }
    })
  }, [selectedRecipe, prices])

  const totalCost = useMemo(() => ingredientCosts.reduce((s, i) => s + i.totalCost, 0), [ingredientCosts])
  const costPerRation = selectedRecipe ? totalCost / selectedRecipe.portions : 0
  const suggestedPrice = costPerRation * 3.5
  const effectiveSellPrice = sellPrice || suggestedPrice
  const margin = effectiveSellPrice > 0 ? ((effectiveSellPrice - costPerRation) / effectiveSellPrice) * 100 : 0

  function saveEscandallo() {
    if (!selectedRecipe) return
    const escandallo: SavedEscandallo = {
      recipeId: selectedRecipe.id,
      recipeTitle: selectedRecipe.title,
      pricePerKg: prices,
      totalCost,
      costPerRation,
      suggestedPrice,
      margin,
      savedAt: new Date().toISOString()
    }
    const newHistory = [escandallo, ...history.filter(h => h.recipeId !== selectedRecipe.id)].slice(0, 20)
    setHistory(newHistory)
    localStorage.setItem('escanallo_history', JSON.stringify(newHistory))
    toast.success('Escandallo guardado')
  }

  const marginColor = margin >= 60 ? '#34A853' : margin >= 40 ? '#FBBC04' : '#EA4335'

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
          💰 Escandallo de Recetas
        </h1>
        <p className="text-gray-500 mt-1 text-sm">Calcula el coste por ración y margen de beneficio</p>
      </div>

      {/* Recipe selector */}
      <div className="card p-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Seleccionar receta</label>
        <div className="relative">
          <select
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm appearance-none bg-white pr-10"
            onChange={e => {
              const r = recipes.find(r => r.id === e.target.value)
              if (r) loadRecipe(r)
            }}
            value={selectedRecipe?.id || ''}
          >
            <option value="">Elige una receta...</option>
            {recipes.map(r => (
              <option key={r.id} value={r.id}>
                {r.title.split(' ').slice(0, 6).join(' ')} ({r.category})
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {!selectedRecipe ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">💰</div>
          <p className="font-semibold text-gray-600 mb-1">Selecciona una receta</p>
          <p className="text-sm text-gray-400">para calcular el coste por ración y el margen de beneficio</p>
        </div>
      ) : (
        <>
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">€{totalCost.toFixed(2)}</div>
              <div className="text-xs text-gray-500 mt-1">Coste total ({selectedRecipe.portions}p)</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-primary">€{costPerRation.toFixed(2)}</div>
              <div className="text-xs text-gray-500 mt-1">Coste por ración</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: '#34A853' }}>
                €{suggestedPrice.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500 mt-1">Precio sugerido (×3.5)</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: marginColor }}>
                {margin.toFixed(0)}%
              </div>
              <div className="text-xs text-gray-500 mt-1">Margen</div>
              <div className="mt-2 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(0, margin))}%`, background: marginColor }}
                />
              </div>
            </div>
          </div>

          {/* Sell price input */}
          <div className="card p-4 flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Precio de venta real (€/ración)</label>
              <input
                type="number"
                min="0"
                step="0.10"
                value={sellPrice || ''}
                onChange={e => setSellPrice(parseFloat(e.target.value) || 0)}
                placeholder={suggestedPrice.toFixed(2)}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <button
              onClick={saveEscandallo}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white flex-shrink-0 mt-5"
              style={{ background: '#4285F4' }}
            >
              <Save className="w-4 h-4" />
              Guardar
            </button>
          </div>

          {/* Ingredients table */}
          <div className="card overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-primary" />
              <h2 className="font-bold text-gray-900 text-sm">Ingredientes y precios</h2>
              <span className="ml-auto text-xs text-gray-400">Edita el precio por kg/L para cada ingrediente</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-500 text-xs uppercase">Ingrediente</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-500 text-xs uppercase">Cantidad</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-500 text-xs uppercase">€/kg</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-500 text-xs uppercase">Coste</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredientCosts.map((ing, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="px-4 py-2.5 font-medium text-gray-900">{ing.name}</td>
                      <td className="px-4 py-2.5 text-right text-gray-500 text-xs">
                        {ing.quantity > 0
                          ? ing.quantity >= 1000 && ing.unit === 'g'
                            ? (ing.quantity / 1000).toFixed(2) + ' kg'
                            : ing.quantity.toFixed(ing.quantity % 1 === 0 ? 0 : 1) + ' ' + (ing.unit || 'g')
                          : 'c/s'}
                      </td>
                      <td className="px-4 py-2.5 text-right">
                        <div className="inline-flex items-center gap-1">
                          <span className="text-gray-400 text-xs">€</span>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={prices[ing.name] || ''}
                            onChange={e => setPrices(prev => ({ ...prev, [ing.name]: parseFloat(e.target.value) || 0 }))}
                            className="w-16 text-right py-1 px-1 rounded-lg border border-gray-200 focus:outline-none focus:border-primary text-sm"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-right font-bold" style={{ color: ing.totalCost > 0 ? '#1A1A2E' : '#9CA3AF' }}>
                        €{ing.totalCost.toFixed(3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-primary-light">
                  <tr>
                    <td colSpan={3} className="px-4 py-3 font-bold text-primary text-right">Total ({selectedRecipe.portions} raciones)</td>
                    <td className="px-4 py-3 font-bold text-primary text-right">€{totalCost.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Saved history */}
          {history.length > 0 && (
            <div className="card p-4">
              <h2 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Historial de escandallos
              </h2>
              <div className="space-y-2">
                {history.slice(0, 5).map((h, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const r = recipes.find(r => r.id === h.recipeId)
                      if (r) { loadRecipe(r); setPrices(h.pricePerKg); setSellPrice(h.suggestedPrice) }
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left border border-gray-100"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{h.recipeTitle.split(' ').slice(0, 5).join(' ')}</p>
                      <p className="text-xs text-gray-400">{new Date(h.savedAt).toLocaleDateString('es-ES')}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-bold text-gray-900">€{h.costPerRation.toFixed(2)}/rac</div>
                      <div className="text-xs" style={{ color: h.margin >= 60 ? '#34A853' : h.margin >= 40 ? '#FBBC04' : '#EA4335' }}>
                        {h.margin.toFixed(0)}% margen
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
