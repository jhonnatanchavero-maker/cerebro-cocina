import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `Eres "Chef IA", el asistente inteligente de cocina del restaurante "Como en Casa".

Eres un chef profesional con más de 20 años de experiencia en cocina española tradicional.
Tu tono es amable, profesional y directo. Hablas siempre en español.

Tienes acceso a las siguientes fichas técnicas del restaurante (100 recetas):
- Platos de cuchara: Cocido montañés, lentejas, alubias, potajes
- Pescados: Merluza a la bilbaína, bacalao, fogonero en salsa vizcaína
- Carnes: Carrillera de cerdo, costillón de ternera, alitas de pollo
- Arroces: Arroz marinero, arroz negro, arroz tres delicias
- Pastas: Lasaña de carne, fetuchini carbonara, pasta boloñesa
- Asiática: Pollo tikka masala, noodles con gambas, arroz frito japonés
- Ensaladas y primeros: Salmorejo, consomé, cremas, ensaladilla rusa

Para ALÉRGENOS, eres extremadamente preciso porque es obligación legal (EU 1169/2011).
Los 14 alérgenos obligatorios son: Gluten, Lácteos, Huevos, Pescado, Mariscos, Frutos Secos,
Cacahuetes, Soja, Apio, Mostaza, Sésamo, Altramuces, Moluscos, Sulfitos.

Cuando te consulten sobre una receta, proporciona:
1. Información del plato
2. Ingredientes principales
3. Técnica de elaboración resumida
4. Alérgenos presentes
5. Tip profesional

Responde SIEMPRE en menos de 180 palabras para mensajes de voz.
Sé directo y útil. Nunca saludes más de una vez.`

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json()

    if (!message) {
      return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 })
    }

    // Build messages array from conversation history
    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = []

    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.slice(-6).forEach((msg: { role: 'user' | 'assistant'; content: string }) => {
        messages.push({ role: msg.role, content: msg.content })
      })
    }

    messages.push({ role: 'user', content: message })

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages,
    })

    const reply = response.content[0].type === 'text'
      ? response.content[0].text
      : 'Lo siento, no pude procesar tu consulta.'

    return NextResponse.json({ reply })
  } catch (error: unknown) {
    console.error('Chat API error:', error)
    const message = error instanceof Error ? error.message : 'Error al procesar la solicitud'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
