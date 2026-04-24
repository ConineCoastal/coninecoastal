# Conine Coastal

Holding-company marketing site for Conine Coastal — a Northeast Florida real estate and construction group. This is the parent marketing surface; the five sibling sub-sites (Development, Estates, Home Services, Real Estate, Travel) each live in their own repos.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Deployed on Vercel. Originally scaffolded via [v0.dev](https://v0.dev).

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 · Tailwind CSS · shadcn/ui · next-themes (class-based dark mode)
- **Package manager:** pnpm
- **Content:** static TypeScript modules under `lib/` (no database, no CMS)
- **Email:** Resend → Nodemailer/SMTP fallback (`app/api/contact/`)
- **Analytics:** GA4 + Facebook Pixel (`components/analytics.tsx`)
- **PWA:** service worker + manifest

## Commands

```bash
pnpm install
pnpm dev          # dev server
pnpm build        # production build
pnpm start        # production server
pnpm lint         # ESLint
```

## Structure

- `app/` — App Router routes and API handlers (`app/api/contact/`)
- `components/` — standalone components + `icons/` + `ui/` (shadcn/ui primitives)
- `lib/` — static content registries (`blog-data.ts`, `testimonials-data.ts`) and helpers
- `public/` — favicons, PWA manifest, site imagery
- `styles/` — fonts, globals

## Agent guidance

See [`CLAUDE.md`](./CLAUDE.md) for Claude Code session governance — venture scope (`conine-coastal-holding`), prohibited actions, session checklist. Changes to the governance contract block require a PR.

## Deployment

Vercel auto-deploys on push to `main`.
