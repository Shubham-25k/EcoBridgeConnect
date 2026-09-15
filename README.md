# EcoBridge Connect

EcoBridge Connect is an interactive circular-commerce prototype that connects Indian kabadiwala businesses with verified e-waste recyclers. The experience includes separate partner portals, multilingual UI, AI-assisted photo and text valuation, voice input, logistics views, demo UPI settlement, and printable digital receipts.

## Technology

- TanStack Start and React 19
- TypeScript and Tailwind CSS 4
- Netlify Functions and Netlify AI Gateway
- Google Gemini via `@google/genai`
- Lucide React icons
- Browser camera, speech recognition, and speech synthesis APIs

## Run Locally

1. Install dependencies with `pnpm install`.
2. Link the repository to a Netlify site if it is not already linked.
3. Start the full local environment with `netlify dev --port 8889`.
4. Open the URL printed by Netlify Dev.

Netlify Dev is recommended over the plain Vite server because the AI features call the local `/api/chat` and `/api/estimate` Netlify Functions. Netlify AI Gateway provides AI provider configuration for supported Netlify plans.

## Demo Notes

- Portal sign-in accepts any non-empty demo credentials and does not store them.
- UPI settlement is a simulated interaction and never initiates a real payment.
- Market rates and transaction records are illustrative.
- AI valuations are indicative and require physical verification before settlement.
- Camera and voice features require browser permission and a supported secure context.

## Project Structure

```text
src/routes/index.tsx        Main product experience
src/routes/__root.tsx       Document metadata and global shell
src/styles.css              Responsive visual system
netlify/functions/chat.mts  Eco-Connect assistant endpoint
netlify/functions/estimate.mts  Structured valuation endpoint
```
