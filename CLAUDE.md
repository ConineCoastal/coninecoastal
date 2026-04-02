# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Conine Coastal is a production Next.js 16 website for a Northeast Florida real estate and construction company. Originally built with v0.dev and deployed on Vercel. Uses App Router, React 19, TypeScript, and Tailwind CSS.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

Package manager is **pnpm** (not npm or yarn).

## Architecture

### Rendering Strategy

Pages use a server/client split pattern: `page.tsx` files are Server Components that render a `*ClientPage.tsx` client component for interactive sections. This is the established pattern — follow it when adding new pages with interactivity.

### Routing

App Router with nested file-based routing organized by service category:
- `/real-estate/` — buyer, seller, listings, market reports, property management
- `/renovations/` — kitchen, bathroom, whole-home, exterior, flooring, etc.
- `/investor-services/` — investment, fix-and-flip, portfolio, property analysis
- `/resources/blog/[slug]/` — dynamic blog routes from static data in `lib/blog-data.ts`

### Data

All content is static (no database or CMS):
- Blog posts: `lib/blog-data.ts` (markdown format)
- Testimonials: `lib/testimonials-data.ts` (60+ reviews)

### Styling & Brand

Tailwind CSS with brand colors defined in `tailwind.config.ts`:
- `coastal-navy: #18457C`, `coastal-blue: #229FD9`, `coastal-orange: #F16622`, `coastal-yellow: #FFCA05`, `coastal-grey: #707070`

Fonts are loaded locally from `styles/` (Inter for body, Playfair Display for headings). Font declarations in `styles/fonts.ts`. Dark mode via `next-themes` (class-based).

### UI Components

shadcn/ui components in `components/ui/`. Config in `components.json`. Path aliases: `@/components`, `@/lib`, `@/hooks`.

### Key Shared Components

- `components/navigation.tsx` — main nav with dropdown menus
- `components/footer.tsx` — site footer
- `components/fade-in.tsx` — Intersection Observer animation wrapper (used extensively)
- `components/analytics.tsx` — GA4 + Facebook Pixel
- `lib/track-event.ts` — event tracking helper
- `lib/utils.ts` — `cn()` class merger

### API Routes

`app/api/contact/route.ts` — Contact form POST endpoint with:
- Zod validation, rate limiting (10/hr per IP)
- Email delivery chain: Resend → Nodemailer/SMTP → fallback logging
- HTML escaping for XSS prevention

### Environment Variables

Email config managed via Vercel dashboard (no `.env` in repo). Key vars: `RESEND_API_KEY`, `SMTP_HOST/PORT/USER/PASS`, `GMAIL_SMTP_USER`, `GMAIL_SMTP_APP_PASSWORD`, `CONTACT_FORWARD_TO`.

## Important Patterns

- Security headers are configured in `next.config.mjs` (CSP, HSTS, X-Frame-Options)
- Images use Next.js `<Image>` with Unsplash remote pattern configured
- PWA support: service worker registration in `components/pwa-register.tsx`, manifest at `public/site.webmanifest`
- SEO: every page exports metadata, uses JSON-LD structured data, and has Open Graph tags
- Accessibility: skip-to-content link, focus-visible styles, semantic HTML, ARIA labels
