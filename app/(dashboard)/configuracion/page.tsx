'use client'

import { Settings, User, Bell, CreditCard, Building2 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ConfiguracionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
        ⚙️ Configuración
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            Datos del Restaurante
          </h2>
          <div className="space-y-3">
            {['Nombre del restaurante', 'Dirección', 'Teléfono', 'Email'].map(label => (
              <div key={label}>
                <label className="block text-xs font-semibold text-gray-500 mb-1">{label}</label>
                <input
                  type="text"
                  defaultValue={label === 'Nombre del restaurante' ? 'Como en Casa' : ''}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary"
                />
              </div>
            ))}
            <button
              onClick={() => toast.success('Cambios guardados')}
              className="w-full py-2 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Guardar cambios
            </button>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-primary" />
            Plan y Facturación
          </h2>
          <div className="p-4 rounded-xl mb-4" style={{ background: 'linear-gradient(135deg, #4285F4, #2557C7)' }}>
            <div className="text-white font-bold text-lg">Plan Pro</div>
            <div className="text-blue-100 text-sm">€99/mes · Acceso completo</div>
            <div className="text-blue-100 text-xs mt-1">Próxima facturación: 18/04/2026</div>
          </div>
          <div className="space-y-2 text-sm">
            {['✓ 100 fichas técnicas', '✓ Asistente IA ilimitado', '✓ Lista de compra automática', '✓ Soporte prioritario'].map(f => (
              <div key={f} className="text-gray-700">{f}</div>
            ))}
          </div>
          <button
            onClick={() => toast('Contacta con soporte para cambiar tu plan', { icon: '💬' })}
            className="w-full mt-4 py-2 rounded-xl text-sm font-semibold border border-primary text-primary hover:bg-primary-light transition-colors"
          >
            Gestionar suscripción
          </button>
        </div>
      </div>
    </div>
  )
}
