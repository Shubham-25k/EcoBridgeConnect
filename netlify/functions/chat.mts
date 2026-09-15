import type { Context } from '@netlify/functions'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({})

export default async (request: Request, _context: Context) => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 })
  try {
    const { messages, language = 'en' } = await request.json()
    const safeMessages = Array.isArray(messages) ? messages.slice(-8) : []
    const transcript = safeMessages.map((message: { role?: string; text?: string }) => `${message.role === 'model' ? 'Assistant' : 'User'}: ${String(message.text || '').slice(0, 800)}`).join('\n')
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Conversation:\n${transcript}\n\nRespond to the latest user message.`,
      config: { systemInstruction: `You are Eco-Connect AI for an Indian e-waste marketplace. Give concise, practical guidance about recycling, indicative scrap pricing, safe handling, logistics and platform use. Never claim an estimate is guaranteed. For batteries, CRTs or hazardous items, prioritize safety. Reply in ${language === 'hi' ? 'Hindi' : language === 'mr' ? 'Marathi' : 'English'}, in 1-3 short sentences.`, maxOutputTokens: 220 },
    })
    return Response.json({ response: response.text || 'Please try your question again.' })
  } catch (error) {
    console.error('EcoBridge chat error', error instanceof Error ? error.message : 'Unknown error')
    return Response.json({ error: 'Assistant unavailable' }, { status: 500 })
  }
}

export const config = { path: '/api/chat' }
