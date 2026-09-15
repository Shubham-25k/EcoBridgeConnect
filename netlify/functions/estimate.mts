import type { Context } from '@netlify/functions'
import { GoogleGenAI, Type, type Part } from '@google/genai'

const ai = new GoogleGenAI({})

export default async (request: Request, _context: Context) => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 })
  try {
    const { description = '', image, mimeType = 'image/jpeg', language = 'en' } = await request.json()
    if (!String(description).trim() && !image) return Response.json({ error: 'Description or image required' }, { status: 400 })
    const parts: Part[] = [{ text: `Estimate the visible/described e-waste for a marketplace in India. Description: ${String(description).slice(0, 1400) || 'No description provided'}. Use realistic but explicitly indicative INR ranges. Reply content in ${language === 'hi' ? 'Hindi' : language === 'mr' ? 'Marathi' : 'English'}.` }]
    if (image) parts.push({ inlineData: { data: String(image), mimeType: String(mimeType) } })
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts }],
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            materials: { type: Type.ARRAY, items: { type: Type.STRING } },
            estimatedWeightKg: { type: Type.NUMBER },
            estimatedValueINR: { type: Type.STRING },
            confidenceScore: { type: Type.NUMBER },
            safetyNote: { type: Type.STRING },
          },
          required: ['materials', 'estimatedWeightKg', 'estimatedValueINR', 'confidenceScore', 'safetyNote'],
        },
      },
    })
    const parsed = JSON.parse(response.text || '{}')
    return Response.json({ ...parsed, confidenceScore: Math.min(98, Math.max(35, Number(parsed.confidenceScore) || 70)) })
  } catch (error) {
    console.error('EcoBridge estimate error', error instanceof Error ? error.message : 'Unknown error')
    return Response.json({ error: 'Valuation unavailable' }, { status: 500 })
  }
}

export const config = { path: '/api/estimate' }
