# RaghidShreih.com - Professional Portfolio Website

## Overview
A professional portfolio website for Raghid Shreih, showcasing 20+ years of technology leadership experience across Google, Shopify, Aramco, HBKU, and more.

## Architecture
- **Frontend**: React SPA with Wouter routing, Tailwind CSS, Framer Motion animations, Shadcn UI components
- **Backend**: Express.js API server (contact form + interview chatbot endpoints)
- **AI**: OpenAI via Replit AI Integrations (gpt-5-mini) for "Interview Raghid" chatbot
- **No database**: In-memory storage for contact messages (portfolio site doesn't need persistence)

## Pages
- **Home** (`/`) - Hero section, career highlights, stats, CTA
- **About** (`/about`) - Personal journey timeline, fun facts
- **Resume** (`/resume`) - Interactive expandable timeline, skills, education, certifications, download links
- **Projects** (`/projects`) - Key project showcase cards
- **Blog** (`/blog`) - Blog post previews linking to LinkedIn
- **Blog Post** (`/blog/:id`) - Full article pages with custom markdown renderer
- **Contact** (`/contact`) - Contact form with Zod validation
- **Interview** (`/interview`) - AI chatbot ("Interview Raghid") powered by OpenAI, stateless streaming responses

## Key Files
- `client/src/App.tsx` - Main app with routing
- `client/src/components/Navigation.tsx` - Fixed top nav with theme toggle
- `client/src/components/Footer.tsx` - Site footer
- `client/src/components/ThemeProvider.tsx` - Dark mode context with localStorage persistence
- `client/src/pages/` - All page components
- `client/src/data/blogPosts.ts` - Centralized blog post data (6 articles with markdown content)
- `shared/schema.ts` - Contact form Zod schema
- `server/routes.ts` - API endpoints (contact form + /api/interview chatbot)
- `server/raghidContext.ts` - System prompt with Raghid's full bio for the chatbot
- `server/storage.ts` - In-memory message storage

## Design
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- **Colors**: Professional blue primary with subtle gradients
- **Theme**: Light mode with dark mode support via CSS variables

## Resume Downloads
- PDF: `/Raghid_Shreih_Resume.pdf`
- Text: `/Raghid_Shreih_Resume.txt`

## Running
- `npm run dev` starts Express + Vite dev server
