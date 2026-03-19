# 🚀 Despliegue en Vercel - Cerebro de Cocina

## Paso 1: Subir a GitHub

1. Ve a https://github.com/new
2. Crea un repo llamado `cerebro-cocina`
3. En esta carpeta ejecuta:

```bash
git remote add origin https://github.com/TU_USUARIO/cerebro-cocina.git
git push -u origin main
```

## Paso 2: Conectar a Vercel

1. Ve a https://vercel.com/new
2. Importa el repo `cerebro-cocina` de GitHub
3. Configura las variables de entorno:

```
NEXT_PUBLIC_SUPABASE_URL = https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyxxxxxx...
ANTHROPIC_API_KEY = sk-ant-xxxxx...
```

4. Click en "Deploy"

## Paso 3: Configurar Supabase

1. Ve a https://supabase.com/dashboard
2. Crea un proyecto nuevo
3. Ve a SQL Editor y ejecuta el contenido de `supabase/schema.sql`
4. En Authentication > Settings > URL Configuration:
   - Site URL: https://tu-app.vercel.app
5. Copia la URL y la anon key a las variables de entorno de Vercel

## Paso 4: Configurar API de Claude (IA)

1. Ve a https://console.anthropic.com
2. Crea una API key
3. Añade a las variables de entorno de Vercel: `ANTHROPIC_API_KEY`

## Desarrollo local

```bash
npm install
# Configura .env.local con tus claves
npm run dev
# Abre http://localhost:3000
# Demo: demo@comiencasa.es / demo1234
```

## Estructura del proyecto

```
📁 app/
  📁 (dashboard)/
    📄 layout.tsx       - Layout con sidebar y navegación
    📄 dashboard/       - Dashboard principal con métricas
    📄 recetas/         - 100 fichas técnicas con alérgenos
    📄 recetas/[id]/    - Ficha individual con escalado de raciones + QR
    📄 produccion/      - Hoja de producción semanal
    📄 compras/         - Lista de compras por proveedor + WhatsApp
    📄 escanallo/       - Calculadora de costes y márgenes
    📄 alertas/         - Alertas de precios
  📄 api/chat/          - API del asistente IA (Claude Haiku)
  📄 page.tsx           - Login
📁 components/
  📄 VoiceAssistant.tsx - Asistente de voz con Web Speech API
📁 data/
  📄 recipes.ts         - 100 recetas reales con alérgenos
📁 supabase/
  📄 schema.sql         - Schema de base de datos
```
