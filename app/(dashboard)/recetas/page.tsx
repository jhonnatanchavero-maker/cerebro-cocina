'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, BookOpen, ChevronRight, Filter } from 'lucide-react'
import { recipes, Recipe } from '@/data/recipes'

const CATEGORIES = ['Todas', 'Primer Plato', 'Segundo Plato', 'Base/Generico', 'Guarnicion']

const ALLERGEN_ICONS: Record<string, { emoji: string; bg: string; text: string }> = {
  Gluten:       { emoji: '🌾', bg: '#FEF3C7', text: '#92400E' },
  Lacteos:      { emoji: '🥛', bg: '#DBEAFE', text: '#1E40AF' },
  Huevos:       { emoji: '🥚', bg: '#FEF9C3', text: '#713F12' },
  Pescado:      { emoji: '🐟', bg: '#CFFAFE', text: '#164E63' },
  Mariscos:     { emoji: '🦐', bg: '#FED7AA', text: '#7C2D12' },
  'Frutos secos': { emoji: '🥜', bg: '#E8D5B7', text: '#78350F' },
  Cacahuetes:   { emoji: '🥜', bg: '#E8D5B7', text: '#78350F' },
  Soja:         { emoji: '🫘', bg: '#DCFCE7', text: '#14532D' },
  Apio:         { emoji: '🌿', bg: '#D1FAE5', text: '#064E3B' },
  Mostaza:      { emoji: '🟡', bg: '#FFFBEB', text: '#78350F' },
  Sesamo:       { emoji: '⚪', bg: '#F3F4F6', text: '#374151' },
  Altramuces:   { emoji: '🌼', bg: '#EDE9FE', text: '#4C1D95' },
  Moluscos:     { emoji: '🐚', bg: '#BAE6FD', text: '#0C4A6E' },
  Sulfitos:     { emoji: '🍷', bg: '#FEE2E2', text: '#7F1D1D' },
}

const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
  'Primer Plato':   { bg: '#D1FAE5', text: '#065F46' },
  'Segundo Plato':  { bg: '#DBEAFE', text: '#1E3A8A' },
  'Base/Generico':  { bg: '#FEF3C7', text: '#78350F' },
  'Guarnicion':     { bg: '#F3E8FF', text: '#581C87' },
  'Ensalada':       { bg: '#ECFDF5', text: '#064E3B' },
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const catStyle = CATEGORY_STYLES[recipe.category] || { bg: '#F3F4F6', text: '#374151' }
  const topAllergens = recipe.allergens.slice(0, 5)

  return (
    <Link
      href={`/recetas/${recipe.id}`}
      className="card p-5 hover:shadow-card-hover transition-all duration-200 group flex flex-col"
    >
      {/* Category badge */}
      <div className="flex items-start justify-between mb-3 gap-2">
        <span
          className="text-xs font-semibold px-2 py-1 rounded-lg flex-shrink-0"
          style={{ background: catStyle.bg, color: catStyle.text }}
        >
          {recipe.category}
        </span>
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
      </div>

      {/* Title */}
      <h3
        className="font-bold text-gray-900 mb-1 line-clamp-2 leading-snug group-hover:text-primary transition-colors"
        style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1rem' }}
      >
        {recipe.title.replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ')}
        {recipe.title.split(' ').length > 6 ? '...' : ''}
      </h3>

      <p className="text-xs text-gray-400 mb-3">
        {recipe.ingredients.length} ingredientes · {recipe.portions} raciones
      </p>

      {/* Allergens */}
      {topAllergens.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-auto">
          {topAllergens.map(allergen => {
            const a = ALLERGEN_ICONS[allergen]
            if (!a) return null
            return (
              <span
                key={allergen}
                title={allergen}
                className="text-xs px-1.5 py-0.5 rounded-md font-medium"
                style={{ background: a.bg, color: a.text }}
              >
                {a.emoji}
              </span>
            )
          })}
          {recipe.allergens.length > 5 && (
            <span className="text-xs px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-500">
              +{recipe.allergens.length - 5}
            </span>
          )}
        </div>
      )}
      {topAllergens.length === 0 && (
        <div className="mt-auto">
          <span className="text-xs px-2 py-0.5 rounded-md bg-green-50 text-green-700 font-medium">
            ✓ Sin alérgenos detectados
          </span>
        </div>
      )}
    </Link>
  )
}

export default function RecetasPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todas')

  const filtered = useMemo(() => {
    let result = recipes
    if (activeCategory !== 'Todas') {
      result = result.filter(r => r.category === activeCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      result = result.filter(r => {
        const t = (r.title + ' ' + r.ingredients.map(i => i.name).join(' ')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        return t.includes(q)
      })
    }
    return result
  }, [query, activeCategory])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
          📚 Fichas Técnicas
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          {filtered.length} recetas · Con alérgenos EU 1169/2011 · Escalado automático
        </p>
      </div>

      {/* Search + filters */}
      <div className="card p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar receta, ingrediente..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 text-sm transition-all"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-150
                ${activeCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <BookOpen className="w-4 h-4" />
        <span><strong className="text-gray-900">{filtered.length}</strong> recetas encontradas</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-3">🔍</div>
          <p className="font-medium">No se encontraron recetas</p>
          <p className="text-sm mt-1">Prueba con otros términos de búsqueda</p>
        </div>
      )}
    </div>
  )
}
