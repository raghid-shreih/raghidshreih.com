# RaghidShreih.com - Professional Portfolio Website

## Overview
A professional portfolio website for Raghid Shreih, showcasing 20+ years of technology leadership experience across Google, Shopify, Aramco, HBKU, and more.

## Architecture
- **Frontend**: React SPA with Wouter routing, Tailwind CSS, Framer Motion animations, Shadcn UI components
- **Backend**: Express.js API server (contact form endpoint)
- **No database**: In-memory storage for contact messages (portfolio site doesn't need persistence)

## Pages
- **Home** (`/`) - Hero section, career highlights, stats, CTA
- **About** (`/about`) - Personal journey timeline, fun facts
- **Resume** (`/resume`) - Interactive expandable timeline, skills, education, certifications, download links
- **Projects** (`/projects`) - Key project showcase cards
- **Blog** (`/blog`) - Blog post previews linking to LinkedIn
- **Contact** (`/contact`) - Contact form with Zod validation

## Key Files
- `client/src/App.tsx` - Main app with routing
- `client/src/components/Navigation.tsx` - Fixed top nav
- `client/src/components/Footer.tsx` - Site footer
- `client/src/pages/` - All page components
- `shared/schema.ts` - Contact form Zod schema
- `server/routes.ts` - Contact form API endpoint
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
