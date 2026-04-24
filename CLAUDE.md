# CLAUDE.md

> **Governance Contract** (Phase 4 — do not modify without PR review)
>
> Instantiated from `ai-infrastructure/shared/templates/website-claude-md-template.md`. Governs Claude Code sessions in this repo. Changes to this block require a PR; operational documentation below the separator is routine.

**Canonical scope ID:** `conine-coastal-holding`
**GitHub remote:** `ConineCoastal/coninecoastal`
**Pinned gh account:** `ConineCoastal` (applied via `ai-infrastructure/shared/scripts/pin-credential.sh`)
**Governed by:** `ai-infrastructure/GOVERNANCE.md` + `ai-infrastructure/offices/web-design-firm/CLAUDE.md` + this file.

### 1. Venture scope declaration

This repo is venture-scoped to **`conine-coastal-holding`** — the main Conine Coastal holding-company marketing site. Five sub-site ventures (`conine-coastal-development`, `-estates`, `-home-services`, `-real-estate`, `-travel`) have separate repos and separate scope IDs.

**Do not read or reference other ventures (including sibling CC sub-sites) unless David explicitly requests cross-venture work.** Scope leaks are a governance violation per `ai-infrastructure/GOVERNANCE.md §3`. The `c-suite/` office is cross-venture by design; every other ai-infrastructure read is scope-bound.

### 2. Tech stack (summary)

Next.js 16 (App Router) + React 19 + TypeScript on Vercel. Originally v0-scaffolded. pnpm package manager. Tailwind CSS with coastal brand palette. shadcn/ui components. Static content (no DB/CMS). Email via Resend → Nodemailer/SMTP fallback chain.

Full breakdown in Product Documentation below. `package.json` + `pnpm-lock.yaml` are authoritative.

### 3. Build / deploy / test commands (summary)

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint
```

Vercel auto-deploys on push to `main`.

### 4. AI Infrastructure references

- **`ai-infrastructure/offices/web-design-firm/`** — primary. Marketing website work (brand surface, public pages, conversion). Client file at `offices/web-design-firm/clients/conine-coastal-holding.md`.
- **`ai-infrastructure/offices/c-suite/`** — for strategic/executive cross-venture questions only.

**Scheduled routines touching this venture:** none currently.

### 5. Prohibited actions

- **Direct-commit to `main`.** All changes route through PRs.
- **Force-push to `main`** without David's explicit approval.
- **Commit secrets.** If a session encounters a credential, API key, or `.env` file: STOP and report. Email credentials (`RESEND_API_KEY`, `SMTP_*`, `GMAIL_*`) live only in Vercel dashboard.
- **Expose internal content.** Do not paste ai-infrastructure internal content into this repo's files.
- **Read or modify sibling Conine Coastal sub-site repos** in the same session. Each sub-site is a separate scope; cross-sub-site changes require explicit authorization.
- **Run looped writes across sibling ventures.**
- **Bypass push-discipline.** Re-apply via `bash /path/to/ai-infrastructure/shared/scripts/pin-credential.sh ConineCoastal` if the config needs reset.

### 6. Venture-specific notes

- **v0-authored scaffold** — originated from v0.dev. Package name in package.json is the v0 default (`my-v0-project`); this is cosmetic, not a rename target.
- **Holding-company site** — this is the umbrella/parent marketing surface. Sub-site ventures have their own repos and their own CLAUDE.md files.
- **Static content model** — blog posts in `lib/blog-data.ts`, testimonials in `lib/testimonials-data.ts`. No CMS, no admin UI; updates are code changes.
- **Email delivery chain** — Resend primary, Nodemailer/SMTP fallback, then logging. All via Vercel-dashboard env vars.
- **Brand palette** — `coastal-navy`, `coastal-blue`, `coastal-orange`, `coastal-yellow`, `coastal-grey` defined in `tailwind.config.ts`.

### 7. Frozen-folders compliance

This repo lives under `C:\Users\david\Documents\Projects\Websites\Conine Coastal\`, governed by David's frozen-folders rule:

- Additive changes allowed.
- Reorganization that improves the stack allowed.
- Destructive or regressive changes NOT allowed without explicit sign-off.
- All changes route through draft PRs.

If uncertain whether a change counts as regression: STOP and ask.

### 8. Session checklist

At session start:

1. Confirm the session is scoped to `conine-coastal-holding` — state this explicitly.
2. Read `ai-infrastructure/GOVERNANCE.md §3, §4` and §5 above.
3. If the session touches site content: load `ai-infrastructure/offices/web-design-firm/clients/conine-coastal-holding.md`.
4. Before any push: `git config --local --get credential.username` → must return `ConineCoastal`.

At session end:
- Update the client file with a session log entry.
- Confirm any PR raised is **draft** unless David explicitly approved marking it ready.

---

## Product Documentation

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
