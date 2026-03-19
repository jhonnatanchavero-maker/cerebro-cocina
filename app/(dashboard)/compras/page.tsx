'use client'

import { useState, useEffect, useMemo } from 'react'
import { ShoppingCart, MessageCircle, Printer, CheckCircle2, Circle, Trash2, RefreshCw } from 'lucide-react'
import toast from 'react-hot-toast'

interface ShoppingItem {
  name: string
  quantity: number
  unit: string
  supplier: string
  checked?: boolean
}

const SUPPLIER_CONFIG: Record<string, { icon: string; color: string; bg: string; phone?: string }> = {
  'Carnicerai':           { icon: '🥩', color: '#F97316', bg: '#FFF7ED', phone: '+34 600 000 001' },
  'Pescaderia':           { icon: '🐟', color: '#06B6D4', bg: '#ECFEFF', phone: '+34 600 000 002' },
  'Fruteria/Verduleria':  { icon: '🥦', color: '#34A853', bg: '#F0FDF4', phone: '+34 600 000 003' },
  'Alimentacion':         { icon: '🛒', color: '#4285F4', bg: '#EBF2FF', phone: '+34 600 000 004' },
  'Bebidas':              { icon: '🍷', color: '#7C3AED', bg: '#F5F3FF', phone: '+34 600 000 005' },
}

function formatQty(qty: number, unit: string): string {
  if (qty === 0) return 'c/s'
  if (qty >= 1000 && unit === 'g') return (qty / 1000).toFixed(2).replace(/\.?0+$/, '') + ' kg'
  if (qty >= 1000 && unit === 'ml') return (qty / 1000).toFixed(2).replace(/\.?0+$/, '') + ' L'
  return (qty % 1 === 0 ? qty.toString() : qty.toFixed(1)) + (unit ? ' ' + unit : '')
}

function buildWhatsappText(supplierName: string, items: ShoppingItem[]): string {
  const date = new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
  const lines = [
    `*Como en Casa - Lista de Compra*`,
    `📅 ${date}`,
    ``,
    `*${supplierName}:*`,
    ...items.map(i => `• ${i.name}: ${formatQty(i.quantity, i.unit)}`),
    ``,
    `_Generado con Cerebro de Cocina_`
  ]
  return encodeURIComponent(lines.join('\n'))
}

const DEFAULT_ITEMS: ShoppingItem[] = [
  { name: 'Pollo entero', quantity: 5000, unit: 'g', supplier: 'Carnicerai' },
  { name: 'Ternera para guisar', quantity: 3000, unit: 'g', supplier: 'Carnicerai' },
  { name: 'Merluza fresca', quantity: 2000, unit: 'g', supplier: 'Pescaderia' },
  { name: 'Gambas peladas', quantity: 500, unit: 'g', supplier: 'Pescaderia' },
  { name: 'Cebollas', quantity: 4000, unit: 'g', supplier: 'Fruteria/Verduleria' },
  { name: 'Patatas', quantity: 8000, unit: 'g', supplier: 'Fruteria/Verduleria' },
  { name: 'Tomates', quantity: 3000, unit: 'g', supplier: 'Fruteria/Verduleria' },
  { name: 'Pimientos rojos', quantity: 2000, unit: 'g', supplier: 'Fruteria/Verduleria' },
  { name: 'Aceite de oliva', quantity: 2000, unit: 'ml', supplier: 'Alimentacion' },
  { name: 'Arroz', quantity: 3000, unit: 'g', supplier: 'Alimentacion' },
  { name: 'Harina', quantity: 1000, unit: 'g', supplier: 'Alimentacion' },
  { name: 'Vino tinto', quantity: 1500, unit: 'ml', supplier: 'Bebidas' },
]

export default function ComprasPage() {
  const [items, setItems] = useState<ShoppingItem[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('shopping_list')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setItems(data.map((i: ShoppingItem) => ({ ...i, checked: false })))
      } catch {
        setItems(DEFAULT_ITEMS.map(i => ({ ...i, checked: false })))
      }
    } else {
      setItems(DEFAULT_ITEMS.map(i => ({ ...i, checked: false })))
    }
    setLoaded(true)
  }, [])

  const bySupplier = useMemo(() => {
    const map: Record<string, ShoppingItem[]> = {}
    items.forEach(item => {
      const s = item.supplier || 'Alimentacion'
      if (!map[s]) map[s] = []
      map[s].push(item)
    })
    return map
  }, [items])

  function toggleItem(name: string) {
    setItems(prev => prev.map(i => i.name === name ? { ...i, checked: !i.checked } : i))
  }

  function clearChecked() {
    setItems(prev => prev.filter(i => !i.checked))
    toast.success('Elementos marcados eliminados')
  }

  function clearAll() {
    setItems([])
    localStorage.removeItem('shopping_list')
    toast('Lista de compra limpiada', { icon: '🗑️' })
  }

  const checkedCount = items.filter(i => i.checked).length

  if (!loaded) return null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            🛒 Lista de Compras
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            {items.length} productos · {checkedCount} completados · Agrupados por proveedor
          </p>
        </div>
        <div className="flex gap-2 no-print">
          {checkedCount > 0 && (
            <button onClick={clearChecked}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
              <CheckCircle2 className="w-4 h-4" />
              Limpiar comprados ({checkedCount})
            </button>
          )}
          <button onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
            <Printer className="w-4 h-4" />
            Imprimir
          </button>
          <button onClick={clearAll}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium border border-red-200 text-red-500 hover:bg-red-50 transition-colors">
            <Trash2 className="w-4 h-4" />
            Limpiar
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">🛒</div>
          <p className="font-semibold text-gray-600 mb-2">Lista de compra vacía</p>
          <p className="text-sm text-gray-400 mb-4">Ve a Producción para generar la lista automáticamente</p>
          <a href="/produccion"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
            style={{ background: '#34A853' }}>
            Ir a Producción →
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(bySupplier).map(([supplier, supplierItems]) => {
            const config = SUPPLIER_CONFIG[supplier] || { icon: '📦', color: '#6B7280', bg: '#F3F4F6' }
            const unchecked = supplierItems.filter(i => !i.checked)
            const checked = supplierItems.filter(i => i.checked)
            const whatsappText = buildWhatsappText(
              supplier.replace('Carnicerai', 'Carnicería').replace('Pescaderia', 'Pescadería')
                .replace('Fruteria/Verduleria', 'Frutería/Verdulería').replace('Alimentacion', 'Alimentación'),
              unchecked
            )

            return (
              <div key={supplier} className="card overflow-hidden" style={{ borderTop: `3px solid ${config.color}` }}>
                {/* Supplier header */}
                <div className="p-4 flex items-center justify-between" style={{ background: config.bg }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{config.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {supplier.replace('Carnicerai', 'Carnicería').replace('Pescaderia', 'Pescadería')
                          .replace('Fruteria/Verduleria', 'Frutería / Verdulería').replace('Alimentacion', 'Alimentación')}
                      </h3>
                      <p className="text-xs" style={{ color: config.color }}>
                        {supplierItems.length} productos · {checked.length} comprados
                      </p>
                    </div>
                  </div>
                  {/* WhatsApp button */}
                  {unchecked.length > 0 && (
                    <a
                      href={`https://wa.me/${config.phone?.replace(/\D/g, '')}?text=${whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white no-print"
                      style={{ background: '#25D366' }}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                  )}
                </div>

                {/* Items */}
                <div className="divide-y divide-gray-50">
                  {[...unchecked, ...checked].map(item => (
                    <button
                      key={item.name}
                      onClick={() => toggleItem(item.name)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      {item.checked
                        ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: config.color }} />
                        : <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      }
                      <span className={`flex-1 text-sm font-medium ${item.checked ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {item.name}
                      </span>
                      <span className={`text-sm font-bold flex-shrink-0 ${item.checked ? 'text-gray-300' : ''}`}
                            style={{ color: item.checked ? undefined : config.color }}>
                        {formatQty(item.quantity, item.unit)}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Send all via WhatsApp */}
                <div className="p-3 border-t border-gray-50 bg-gray-50/50 no-print">
                  <a
                    href={`https://wa.me/?text=${buildWhatsappText(
                      supplier.replace('Carnicerai', 'Carnicería').replace('Pescaderia', 'Pescadería')
                        .replace('Fruteria/Verduleria', 'Frutería/Verdulería').replace('Alimentacion', 'Alimentación'),
                      supplierItems
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-semibold transition-colors"
                    style={{ color: '#25D366', border: '1px solid #25D366' }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Enviar lista completa por WhatsApp
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
