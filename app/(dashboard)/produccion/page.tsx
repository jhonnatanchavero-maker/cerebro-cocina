'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { ClipboardList, Plus, Trash2, ShoppingCart, Printer, Search, X } from 'lucide-react'
import toast from 'react-hot-toast'
import { recipes, Recipe, scaledIngredients } from '@/data/recipes'

interface ProductionItem {
  recipe: Recipe
  portions: number
}

export default function ProduccionPage() {
  const router = useRouter()
  const [items, setItems] = useState<ProductionItem[]>([])
  const [weekDate, setWeekDate] = useState(() => {
    const today = new Date()
    const day = today.getDay()
    const diff = (4 - day + 7) % 7 // Next Thursday
    const thursday = new Date(today)
    thursday.setDate(today.getDate() + (diff === 0 ? 7 : diff))
    return thursday.toISOString().split('T')[0]
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [newPortions, setNewPortions] = useState(10)

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('produccion_items')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setItems(data.map((item: { recipeId: string; portions: number }) => ({
          recipe: recipes.find(r => r.id === item.recipeId)!,
          portions: item.portions
        })).filter((item: ProductionItem) => item.recipe))
      } catch { /* ignore */ }
    }
  }, [])

  function saveToStorage(newItems: ProductionItem[]) {
    localStorage.setItem('produccion_items', JSON.stringify(
      newItems.map(i => ({ recipeId: i.recipe.id, portions: i.portions }))
    ))
  }

  function addItem() {
    if (!selectedRecipe) return
    const existing = items.find(i => i.recipe.id === selectedRecipe.id)
    let newItems: ProductionItem[]
    if (existing) {
      newItems = items.map(i => i.recipe.id === selectedRecipe.id
        ? { ...i, portions: i.portions + newPortions }
        : i
      )
      toast.success(`${selectedRecipe.title.split(' ').slice(0, 3).join(' ')} actualizado`)
    } else {
      newItems = [...items, { recipe: selectedRecipe, portions: newPortions }]
      toast.success('Receta añadida a producción')
    }
    setItems(newItems)
    saveToStorage(newItems)
    setSelectedRecipe(null)
    setSearchTerm('')
    setShowSearch(false)
    setNewPortions(10)
  }

  function removeItem(recipeId: string) {
    const newItems = items.filter(i => i.recipe.id !== recipeId)
    setItems(newItems)
    saveToStorage(newItems)
  }

  function updatePortions(recipeId: string, portions: number) {
    if (portions < 1) return
    const newItems = items.map(i => i.recipe.id === recipeId ? { ...i, portions } : i)
    setItems(newItems)
    saveToStorage(newItems)
  }

  // Aggregate all ingredients
  const allIngredients = useMemo(() => {
    const map = new Map<string, { name: string; quantity: number; unit: string; supplier: string }>()
    items.forEach(item => {
      const scaled = scaledIngredients(item.recipe, item.portions)
      scaled.forEach(ing => {
        const key = ing.name.toLowerCase()
        if (map.has(key)) {
          const existing = map.get(key)!
          map.set(key, { ...existing, quantity: existing.quantity + ing.quantity })
        } else {
          map.set(key, { name: ing.name, quantity: ing.quantity, unit: ing.unit, supplier: ing.supplier })
        }
      })
    })
    return Array.from(map.values()).sort((a, b) => a.supplier.localeCompare(b.supplier))
  }, [items])

  const filteredRecipes = useMemo(() => {
    if (!searchTerm.trim()) return recipes.slice(0, 15)
    const q = searchTerm.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return recipes.filter(r =>
      r.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(q)
    ).slice(0, 10)
  }, [searchTerm])

  function goToShopping() {
    localStorage.setItem('shopping_list', JSON.stringify(allIngredients))
    toast.success('Lista de compra generada')
    router.push('/compras')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            📋 Hoja de Producción
          </h1>
          <p className="text-gray-500 mt-1 text-sm">Planifica las raciones y genera tu lista de compra</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors no-print"
          >
            <Printer className="w-4 h-4" />
            Imprimir
          </button>
          {items.length > 0 && (
            <button
              onClick={goToShopping}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all"
              style={{ background: '#34A853' }}
            >
              <ShoppingCart className="w-4 h-4" />
              Generar Lista de Compra
            </button>
          )}
        </div>
      </div>

      {/* Date + search row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card p-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            📅 Semana de producción
          </label>
          <input
            type="date"
            value={weekDate}
            onChange={e => setWeekDate(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
          />
        </div>

        {/* Add recipe */}
        <div className="card p-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ➕ Añadir receta
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar receta..."
                value={selectedRecipe ? selectedRecipe.title.split(' ').slice(0, 4).join(' ') : searchTerm}
                onChange={e => { setSearchTerm(e.target.value); setShowSearch(true); setSelectedRecipe(null) }}
                onFocus={() => setShowSearch(true)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm"
              />
              {showSearch && filteredRecipes.length > 0 && !selectedRecipe && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
                  {filteredRecipes.map(r => (
                    <button
                      key={r.id}
                      onClick={() => { setSelectedRecipe(r); setShowSearch(false); setSearchTerm('') }}
                      className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm border-b border-gray-50 last:border-0 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{r.title.split(' ').slice(0, 5).join(' ')}</span>
                      <span className="text-gray-400 ml-2 text-xs">{r.category}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="number"
              min="1"
              value={newPortions}
              onChange={e => setNewPortions(parseInt(e.target.value) || 10)}
              placeholder="Raciones"
              className="w-20 px-2 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm text-center"
            />
            <button
              onClick={addItem}
              disabled={!selectedRecipe}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold text-white bg-primary disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors"
            >
              <Plus className="w-4 h-4" />
              Añadir
            </button>
          </div>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">📋</div>
          <p className="font-semibold text-gray-600 mb-1">Hoja de producción vacía</p>
          <p className="text-sm text-gray-400">Añade recetas para planificar la producción de la semana</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Production list */}
          <div className="lg:col-span-2 card overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-primary" />
              <h2 className="font-bold text-gray-900">Recetas en producción</h2>
              <span className="ml-auto text-xs bg-primary-light text-primary font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            </div>
            <div className="divide-y divide-gray-50">
              {items.map(item => (
                <div key={item.recipe.id} className="p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate"
                       style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                      {item.recipe.title.split(' ').slice(0, 5).join(' ')}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.recipe.category} · {item.recipe.ingredients.length} ingredientes</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={item.portions}
                      onChange={e => updatePortions(item.recipe.id, parseInt(e.target.value) || 1)}
                      className="w-16 text-center py-1 px-2 rounded-lg border border-gray-200 text-sm font-semibold focus:outline-none focus:border-primary"
                    />
                    <span className="text-xs text-gray-500">raciones</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.recipe.id)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total raciones planificadas:</span>
                <span className="font-bold text-primary">{items.reduce((s, i) => s + i.portions, 0)}</span>
              </div>
            </div>
          </div>

          {/* Ingredients summary */}
          <div className="card overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-accent" />
              <h2 className="font-bold text-gray-900 text-sm">Ingredientes totales</h2>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              {allIngredients.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-4">Sin ingredientes</p>
              ) : (
                <div className="space-y-1.5">
                  {allIngredients.map((ing, i) => (
                    <div key={i} className="flex justify-between items-center text-xs py-1.5 border-b border-gray-50">
                      <span className="text-gray-700 font-medium truncate flex-1 mr-2">{ing.name}</span>
                      <span className="text-gray-900 font-bold flex-shrink-0">
                        {ing.quantity > 0
                          ? (ing.quantity >= 1000 && (ing.unit === 'g' || ing.unit === 'ml')
                              ? (ing.quantity / 1000).toFixed(2) + (ing.unit === 'g' ? 'kg' : 'L')
                              : ing.quantity.toFixed(ing.quantity % 1 === 0 ? 0 : 1) + (ing.unit || 'g'))
                          : 'c/s'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {allIngredients.length > 0 && (
              <div className="p-4 border-t border-gray-50">
                <button
                  onClick={goToShopping}
                  className="w-full py-2 rounded-xl text-sm font-semibold text-white text-center"
                  style={{ background: '#34A853' }}
                >
                  → Ir a Lista de Compra
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
