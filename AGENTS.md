# EcoBridge Connect Agent Guide

## Project Overview

EcoBridge Connect is a bilingual e-waste marketplace prototype for Indian kabadiwala partners and verified recyclers. It demonstrates AI-assisted material valuation, safe-handling guidance, pickup operations, UPI settlement flows, and digital receipts.

## Architecture

- **Framework:** TanStack Start with React 19 and file-based routing
- **Styling:** Tailwind CSS 4 import plus a custom design system in `src/styles.css`
- **Icons:** Lucide React
- **AI:** Google Gemini through Netlify AI Gateway and Netlify Functions
- **Deployment:** Netlify using `@netlify/vite-plugin-tanstack-start`

## Key Directories

- `src/routes/` — application routes and root document metadata
- `src/routes/index.tsx` — the complete single-page product experience and UI state
- `src/styles.css` — visual tokens, layouts, animation, responsive behavior, and print styles
- `netlify/functions/` — secure AI endpoints exposed under `/api/*`
- `public/` — static assets

## Conventions

- Use PascalCase for React components and camelCase for helpers and state.
- Keep user-facing language strings in the `copy` object in `src/routes/index.tsx`.
- Keep API credentials and provider SDK calls server-side in Netlify Functions.
- Treat all market prices and payments in this prototype as illustrative data.
- Prefer extending existing CSS tokens and component patterns over adding a second design system.
- Preserve responsive, keyboard-focus, reduced-motion, and print behavior when changing UI.

## Non-Obvious Decisions

- Login and payment interactions are explicitly demo-only; no credentials or financial transactions are persisted.
- Camera and speech recognition depend on browser support and secure contexts.
- Valuation is presented as indicative because final material value requires physical weighing and quality inspection.
- The receipt page uses print CSS so the browser print dialog can save a clean PDF without a separate PDF library.
- Netlify AI Gateway supplies provider configuration at runtime, so the client never receives an AI API key.

## Common Commands

- `pnpm install` — install dependencies
- `netlify dev --port 8889` — run the app with Netlify Functions locally
- `pnpm build` — create a production build
