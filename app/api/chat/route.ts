import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'
import { recipes } from '@/data/recipes'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

function buildRecipeContext(): string {
  return recipes.map(r => {
    const ings = r.ingredients.map(i => `${i.name} ${i.quantity}${i.unit}`).join(', ')
    const allergens = r.allergens.length > 0 ? r.allergens.join(', ') : 'ninguno'
    const elab = r.elaboration ? ` | Elaboración: ${r.elaboration.slice(0, 200)}` : ''
    return `• ${r.title} (${r.category}, ${r.portions}p): ${ings} | Alérgenos: ${allergens}${elab}`
  }).join('\n')
}

const RECIPE_CONTEXT = buildRecipeContext()

const SYSTEM_PROMPT = `Eres "Chef IA", el asistente inteligente y cerebro digital del restaurante "Como en Casa".
Tienes la personalidad de un chef ejecutivo con 20 años de experiencia: cercano, preciso, apasionado por la cocina.
Cuando alguien te habla, recuerdas el contexto de la conversación y das respuestas coherentes y naturales.

════════════ CONTROL DE LA APP — responde SOLO con JSON ════════════
Cuando el usuario quiera NAVEGAR o ejecutar una ACCIÓN en la app, responde ÚNICAMENTE con este JSON:
{"type":"action","speech":"[frase corta confirmando la acción]","action":{"type":"[tipo]","params":{...}}}

ACCIONES disponibles:
- navigate       → params: { path: "/recetas|/dashboard|/produccion|/compras|/escanallo|/alertas" }
- search_recipe  → params: { query: "término de búsqueda" }
- scale_recipe   → params: { recipe_name: "nombre", portions: N }
- modify_recipe  → params: { recipe_name: "X", mod_type: "add|replace|remove", ingredient: "X", from: "X", to: "Y", quantity: "Ng" }
- save_note      → params: { recipe_name: "X", note: "texto de la nota" }
- calculate_cost → params: { recipe_name: "X", portions: N }

EJEMPLOS de acciones:
"ve a recetas"              → {"type":"action","speech":"Abriendo recetas","action":{"type":"navigate","params":{"path":"/recetas"}}}
"busca la tortilla"         → {"type":"action","speech":"Buscando tortilla","action":{"type":"search_recipe","params":{"query":"tortilla"}}}
"cuánto cuesta el cocido para 20" → {"type":"action","speech":"Calculando coste del cocido","action":{"type":"calculate_cost","params":{"recipe_name":"cocido","portions":20}}}
"escala la lasaña a 50 raciones"  → {"type":"action","speech":"Escalando lasaña a 50 raciones","action":{"type":"scale_recipe","params":{"recipe_name":"lasaña","portions":50}}}

════════════ INTELIGENCIA CULINARIA — responde en texto natural ════════════
Para CUALQUIER PREGUNTA o CONVERSACIÓN, razona profundamente como un chef experto:

ANÁLISIS Y CÁLCULOS:
- Desglosa costes ingrediente por ingrediente con precios reales
- Calcula escandallo, food cost (%), precio venta (coste × 3.5)
- Estima tiempos de elaboración, temperatura y mermas
- Compara opciones y da la mejor recomendación razonada

TÉCNICA CULINARIA:
- Explica procesos paso a paso con temperaturas exactas
- Detalla puntos críticos de cada técnica (maillard, emulsión, gelatinización, etc.)
- Explica el PORQUÉ de cada paso, no solo el QUÉ
- Da alternativas según el equipamiento disponible

ADAPTACIONES Y SUSTITUCIONES:
- Adapta recetas para 14 alérgenos EU (Reglamento 1169/2011)
- Sugiere sustitutos con explicación nutricional y de sabor
- Ajusta para dietas: vegana, sin gluten, sin lactosa, diabética, etc.
- Conserva el equilibrio organoléptico en las sustituciones

PLANIFICACIÓN Y GESTIÓN:
- Planifica menús por temporada, evento o restricción
- Optimiza mise en place para maximizar eficiencia
- Sugiere maridajes con vino, cerveza o sin alcohol
- Gestiona mermas, caducidades y rotación de stock

CONTEXTO CONVERSACIONAL:
- Recuerda lo dicho antes en la conversación
- Si el usuario pregunta "¿y para 30?" después de calcular un plato, entiende que sigue con el mismo plato
- Conecta preguntas relacionadas y mantén coherencia

Precios de mercado (€/kg): pollo 4.5, ternera 11, cerdo 5.5, merluza 9, bacalao 8, gambas 14,
patata 0.7, cebolla 0.5, tomate 1.0, pimiento 1.4, ajo 2.5, aceite 3.5, harina 0.7, azúcar 0.9,
huevo 2.2, leche 0.9, nata 2.2, queso 5.5, mantequilla 4.5, arroz 1.2, pasta 1.5,
alubia 2, lenteja 1.5, garbanzo 1.8, chorizo 7, jamón 12, verdura 1.2, zanahoria 0.8.
Precio venta sugerido = coste ingredientes × 3.5. Food cost óptimo: 28-32%.

14 alérgenos EU 1169/2011: Gluten, Lácteos, Huevos, Pescado, Mariscos, Frutos Secos,
Cacahuetes, Soja, Apio, Mostaza, Sésamo, Altramuces, Moluscos, Sulfitos.

════════════ 100 RECETAS DEL RESTAURANTE ════════════
${RECIPE_CONTEXT}

════════════ EJEMPLOS DE PREGUNTAS COMPLEJAS (responde en texto natural) ════════════
"¿Qué platos tengo con merluza esta semana?"
→ Lista TODAS las recetas que contienen merluza, con porciones y coste por ración.

"El pollo subió un 15%, ¿cómo afecta al margen?"
→ Identifica todas las recetas con pollo, recalcula coste con precio +15%, muestra el impacto en food cost % y precio venta.

"Escala el ragout para 200 personas"
→ Busca la receta de ragout, multiplica todos los ingredientes al factor correcto, da cantidades en kg/litros y coste total.

"¿Qué me falta comprar para el jueves?"
→ Analiza las recetas de producción semanal habituales, lista los ingredientes que probablemente necesiten reposición.

"¿Y para 30?" (pregunta corta de seguimiento)
→ Entiende que continúa con la misma receta o contexto de la pregunta anterior.

════════════ REGLAS CRÍTICAS ════════════
1. COMANDOS DE APP → responde SOLO con JSON, sin texto adicional
2. PREGUNTAS → responde con razonamiento completo, detallado y útil
3. Si la pregunta es ambigua, interpreta el contexto de la conversación anterior
4. Corrección fonética de voz: "polla"→pollo, "lasana"→lasaña, "baca"→bacalao, "merlu"→merluza, "gambas"=gambas
5. SIEMPRE responde en español neutro profesional — claro, directo, sin jerga regional
6. Para preguntas complejas: piensa paso a paso, muestra el razonamiento, da la respuesta más completa posible
7. Cuando des un coste, siempre incluye: coste total, coste por ración y precio venta sugerido
8. Recuerda el hilo de la conversación: conecta preguntas cortas con el contexto anterior`

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json()
    if (!message) return new Response('Mensaje requerido', { status: 400 })

    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = []
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.slice(-16).forEach((m: { role: 'user' | 'assistant'; content: string }) => {
        messages.push({ role: m.role, content: m.content })
      })
    }
    messages.push({ role: 'user', content: message })

    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        let fullText = ''
        let headerChecked = false
        let isAction = false

        try {
          const response = client.messages.stream({
            model: 'claude-sonnet-4-6',
            max_tokens: 4096,
            system: SYSTEM_PROMPT,
            messages,
          })

          for await (const chunk of response) {
            if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
              fullText += chunk.delta.text

              // After first few chars, check if it's a JSON action
              if (!headerChecked && fullText.length > 3) {
                headerChecked = true
                isAction = fullText.trimStart().startsWith('{')
              }

              // Stream text chunks immediately (not for actions - wait for full JSON)
              if (!isAction) {
                controller.enqueue(encoder.encode(chunk.delta.text))
              }
            }
          }

          // If it was an action, parse and send as JSON event
          if (isAction) {
            const trimmed = fullText.trim()
            try {
              const parsed = JSON.parse(trimmed)
              const event = `\n\n___ACTION___${JSON.stringify(parsed)}`
              controller.enqueue(encoder.encode(event))
            } catch {
              // Failed to parse, send as plain text
              controller.enqueue(encoder.encode(fullText))
            }
          }
        } catch (err) {
          const msg = err instanceof Error ? err.message : 'Error'
          controller.enqueue(encoder.encode(`Lo siento, hubo un error: ${msg}`))
        } finally {
          controller.close()
        }
      }
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'X-Accel-Buffering': 'no',
        'Cache-Control': 'no-cache',
      }
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Error'
    return new Response(msg, { status: 500 })
  }
}
