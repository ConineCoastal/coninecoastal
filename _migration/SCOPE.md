# SCOPE.md — Conine Coastal Holding Company Harness Audit

**Repo:** `CC/` (Conine Coastal Holding Company — originator of the CC fleet)
**Remote:** https://github.com/ConineCoastal/coninecoastal.git
**Branch:** `backup/pre-harness-audit-2026-04-24`
**Authored:** 2026-04-24 (Pass 2)
**Baseline HEAD (pre-audit main):** `2dc6bc4b4915d907b673b6c2512a0786216b398c`
**Pass 1 commit:** `6a5e6dabddaecd64db271f8667d14801c51c6e35` — scaffold `_migration/`

**Venture context:** Venture #5 in the Phase 5 rollout; first of 6 CC sub-site audits per 2026-04-24 Option D expansion (`ai-infrastructure/_migration/decisions.md`). Audit order locked by `Documents/` entity index: CC → Development → Estates → Home Services → Real Estate → Travel.

---

## 1. Repo Identity

- **`package.json` name:** `my-v0-project` — unreplaced v0.dev scaffold default (see §8 Open Item CC-5)
- **`package.json` version:** `0.1.0`, `private: true`
- **Structure:** single-app Next.js application (**not** a true monorepo — no `workspaces` field, no `apps/`; `pnpm-workspace.yaml` exists but declares only `onlyBuiltDependencies: sharp` and no `packages:` field — see §8 Open Item CC-7)
- **Package manager:** pnpm (per `CLAUDE.md`); `packageManager` field absent from `package.json`
- **Node engine:** not declared (`engines` field absent)
- **Primary framework:** Next.js **16.2.1** (App Router); React **19.2.4**
- **Language / tooling:** TypeScript ^5.8.3; ESLint 9 (`eslint.config.mjs`); `next-themes` for dark mode (class-based)
- **Content system:** static TypeScript modules under `lib/` (no CMS, no database)
  - `lib/blog-data.ts` — blog posts in markdown format
  - `lib/testimonials-data.ts` — 60+ reviews
- **Styling:** Tailwind CSS **^3.4.17** (NOT v4 — distinct from Landmark Logix); `tailwindcss-animate` plugin; brand tokens in `tailwind.config.ts` (`coastal-navy #18457C`, `coastal-blue #229FD9`, `coastal-orange #F16622`, `coastal-yellow #FFCA05`, `coastal-grey #707070`)
- **UI primitives:** shadcn/ui on Radix (`components/ui/` — 13 primitives); `components.json` config; path aliases `@/components`, `@/lib`, `@/hooks`
- **Fonts:** loaded locally from `styles/` (Inter latin + Playfair Display latin as `.woff2`); declarations in `styles/fonts.ts`
- **Email (contact form):** Resend → Nodemailer/SMTP fallback → log-only final fallback (per `CLAUDE.md` §API Routes); Zod validation; per-IP rate limiting (10/hr); HTML escaping for XSS
- **PWA:** service worker (`public/sw.js`), manifest (`public/site.webmanifest`), registration in `components/pwa-register.tsx`
- **Analytics:** GA4 + Facebook Pixel via `components/analytics.tsx`; event tracking via `lib/track-event.ts`; UTM capture via `lib/utm-tracker.ts`
- **Security headers:** configured in `next.config.mjs` (CSP, HSTS, X-Frame-Options)
- **Images:** Next.js `<Image>` with Unsplash remote pattern configured
- **Deployment:** Vercel (origin: v0.dev sync, per `README.md`); no `vercel.json` at root; no `VERCEL_DEPLOYMENT.md`
- **CI / hooks:** no Husky, no pre-commit hooks, no GitHub Actions workflows (see §2.5)
- **No content-audit scripts** (distinct from Landmark Logix which has `audit:drift` / `audit:images`)
- **No database / Supabase integration** (distinct from LFG, OwnerLogix)
- **Total tracked files:** 115

---

## 2. Existing Harness Inventory

### 2.1 Root-level `*.md` — 2 files

| File | First-line title |
|---|---|
| `CLAUDE.md` | CLAUDE.md |
| `README.md` | Conine coastal website |

### 2.2 `CLAUDE.md` — section headings (level-2 and level-3)

- `## Project Overview`
- `## Commands`
- `## Architecture`
  - `### Rendering Strategy`
  - `### Routing`
  - `### Data`
  - `### Styling & Brand`
  - `### UI Components`
  - `### Key Shared Components`
  - `### API Routes`
  - `### Environment Variables`
- `## Important Patterns`

**Drift flag:** `CLAUDE.md` §Routing enumerates top-level route categories `/real-estate/`, `/renovations/`, `/investor-services/`, `/resources/blog/[slug]/`. The **actual** top-level routes under `app/` are `about`, `api`, `companies`, `contact`, `faq`, `offline`, `portal`, `privacy-policy`, `resources`, `reviews`, `schedule`, `sitemap`, `terms-of-service`. Three of the four documented route trees do not exist. See §8 Open Item CC-6.

### 2.3 `README.md` — summary

Auto-generated v0.dev sync boilerplate. States the repo is "automatically synced with your v0.dev deployments" and links to the v0 project (`yIkWen7SzcT`) and Vercel dashboard (`vercel.com/lfgetaway/v0-conine-coastal`). No human-authored architecture, setup, or contribution content.

### 2.4 `.claude/` contents — 2 files (both tracked)

- `launch.json` (190 B)
- `settings.local.json` (4,192 B) — **tracked in git** (conventional expectation is gitignored; see §8 Open Item CC-8)
- *(No `settings.json`. No `worktrees/`.)*

### 2.5 `.github/` contents

**Absent.** No `.github/` directory exists. No issue templates, no PR template, no workflows, no CI.

### 2.6 Other agent / tooling harness

- **No `AGENTS.md`** at root
- **No `.agents/` skill pack**
- **No `skills-lock.json`**
- **No `scripts/` directory** at root (distinct from Landmark which has SQL migrations + `.mjs` audit tools; distinct from LFG which has root `scripts/`)
- **No `docs/` directory** at root
- **No Husky / `.husky/` hooks**

---

## 3. Directory Structure Map

Single-app layout. 7 top-level tracked roots (plus `_migration/` from Pass 1) + gitignored `node_modules/` and `.next/`.

### 3.1 Top-level roots

| # | Path | Purpose |
|---|---|---|
| 1 | `app/` | Next.js App Router routes, API handlers (`app/api/contact/`), App Router conventions (`layout.tsx`, `page.tsx`, `error.tsx`, `not-found.tsx`, `globals.css`, `robots.ts`, `sitemap.ts`) |
| 2 | `components/` | Standalone UI components + `icons/` (2), `ui/` (13 shadcn/Radix primitives) |
| 3 | `lib/` | Static data registries (`blog-data.ts`, `testimonials-data.ts`), analytics helpers (`track-event.ts`, `utm-tracker.ts`), `cn()` merger (`utils.ts`). **Flat** — no subdirectories. |
| 4 | `public/` | Static assets: favicons/PWA icons (×8), logo, site photos/mockups (×6), `site.webmanifest`, `sw.js`, `placeholder.svg` |
| 5 | `styles/` | `fonts.ts` (font declarations), `globals.css`, `inter-latin.woff2`, `playfair-display-latin.woff2` |
| 6 | `.claude/` | `launch.json`, `settings.local.json` (both tracked) |
| 7 | `_migration/` | Newly scaffolded Pass 1 — harness audit governance (`SCOPE.md`, `DRY_RUN.md`, `AUDIT_LOG.md`) |
| — | `node_modules/` | Dependency install (gitignored) |
| — | `.next/` | Build output (gitignored; present in working tree — see §8 Open Item CC-4) |

Root-level config files (not directories): `.gitignore`, `CLAUDE.md`, `README.md`, `components.json`, `eslint.config.mjs`, `next-env.d.ts`, `next.config.mjs`, `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `tsconfig.tsbuildinfo`.

### 3.2 `app/` — named route subdirs

Enumerated to depth 3 (excluding file-level App Router conventions):

**Top-level route dirs (13):**
`about/`, `api/`, `companies/`, `contact/`, `faq/`, `offline/`, `portal/`, `privacy-policy/`, `resources/`, `reviews/`, `schedule/`, `sitemap/`, `terms-of-service/`

**`app/api/` — 1 endpoint dir:** `contact/`

**`app/companies/` — 5 sub-entity pages:** `development/`, `estates/`, `home-services/`, `real-estate/`, `travel/`
*(These mirror the 5 CC fleet spinoff sites. Each is a single `page.tsx` in this repo, not a route tree.)*

**`app/resources/` — 5 content subtrees:** `blog/` (with dynamic `[slug]/`), `buyers-guide/`, `market-updates/`, `renovation-planning/`, `sellers-checklist/`

**Server/client split pattern confirmed** at `app/contact/` (`ContactClientPage.tsx` + `page.tsx`) and `app/portal/` (`PortalSignup.tsx` + `page.tsx`), per `CLAUDE.md` §Rendering Strategy.

### 3.3 `components/` — subdirs

- `components/icons/` — 2 files (`linkedin-logo.tsx`, `x-logo.tsx`)
- `components/ui/` — 13 shadcn/Radix primitives (accordion, badge, button, card, checkbox, input, label, radio-group, select, separator, skeleton, slider, textarea)

---

## 4. Canonical Document Registry

**No duplicate governance documents identified in Pass 1 or Pass 2.**

- Root `*.md` files (2): distinct names; no shadow copies
- No `docs/` directory exists — no potential shadow tree
- No `apps/web/` — repo is single-app, not a monorepo
- No canonicalization conflicts found. No moves required.

### Unverified scope notes
- `.next/` build artifacts in working tree — present but gitignored; not enumerated this audit.
- `node_modules/` — dependency install, gitignored; not enumerated.

---

## 5. Gap List

Standard harness elements vs Conine Coastal current state.

| Element | Status |
|---|---|
| `_migration/` governance dir | **Present** (scaffolded Pass 1 — `6a5e6da`) |
| `CLAUDE.md` (root) | Present (with documented route-tree drift; see §8 CC-6) |
| `README.md` | Present (auto-generated v0.dev boilerplate; no human content) |
| `AGENTS.md` (root) | **Absent** |
| `SECURITY.md` | **Absent** |
| `ARCHITECTURE.md` (as a file) | **Absent** — but `CLAUDE.md §Architecture` covers 8 subsections |
| `CONTRIBUTING.md` | **Absent** |
| `.github/` directory | **Absent entirely** (no workflows, no issue templates, no PR template) |
| `.claude/settings.json` (committed) | **Absent** — only `launch.json` and `settings.local.json` present; `settings.local.json` is tracked (CC-8) |
| `docs/` directory | **Absent** |
| `scripts/` directory | **Absent** |
| Husky / pre-commit hooks | **Absent** |
| CI workflows | **Absent** |
| `vercel.json` | **Absent** (Vercel config inferred from v0.dev auto-sync + dashboard settings) |

---

## 6. Harness Audit Scope — What This Audit Covers

**In scope:**
- Catalogue and assess the existing Conine Coastal harness (governance docs, agent configs, single-app structure, repo hygiene).
- Produce three deliverables under `_migration/`:
  - `SCOPE.md` — this document (Pass 2)
  - `DRY_RUN.md` — planned operations, pre-authored per Codifications E and F (Pass 3)
  - `AUDIT_LOG.md` — execution record (Pass 3 onward)

**Out of scope:**
- Content changes to any existing governance document (`CLAUDE.md`, `README.md`).
- Installation of a new harness — the existing harness is what is being assessed.
- File moves, renames, deletions anywhere in the tree. (Any future B4 moves would be scoped in a later pass and pre-enumerated per Codification F.)
- Code changes outside `_migration/`.
- Renaming `my-v0-project` in `package.json`.
- Reconciling `CLAUDE.md §Routing` drift against actual `app/` route tree.
- Modifications to `.claude/settings.local.json` or `.claude/launch.json`.
- Pruning or pushing the non-main remote branches (see CC-2).
- Pushing the backup branch `backup/pre-harness-audit-2026-04-24` to origin (see CC-3).
- Cleaning the `.next/` build artifact from the working tree (gitignored — see CC-4).

**Explicit non-goals:**
- Consolidating the 2 root-level `*.md` files into a `docs/` directory.
- Adding `AGENTS.md`, `SECURITY.md`, `CONTRIBUTING.md`, `ARCHITECTURE.md`, a `.github/` directory, issue templates, PR template, or workflows.
- Introducing Husky, pre-commit hooks, or CI.
- Replacing the v0.dev-auto-generated `README.md` with human-authored content.
- Removing `pnpm-workspace.yaml` or normalizing the single-app-vs-workspace structural anomaly (CC-7).

---

## 7. B4 Path Enumeration (Codification F)

Parent directories that must be pre-created via `mkdir -p` before any future `git mv` operation. Single-app repo — enumerated exhaustively so future B4 sub-pass scope-docs can reference this as the authoritative map.

### Root-level governance
- `_migration/` *(exists — scaffolded)*

### Application (Next.js App Router)
- `app/`
- `app/about/`, `app/api/`, `app/companies/`, `app/contact/`, `app/faq/`, `app/offline/`, `app/portal/`, `app/privacy-policy/`, `app/resources/`, `app/reviews/`, `app/schedule/`, `app/sitemap/`, `app/terms-of-service/`
- `app/api/contact/`
- `app/companies/development/`, `app/companies/estates/`, `app/companies/home-services/`, `app/companies/real-estate/`, `app/companies/travel/`
- `app/resources/blog/`, `app/resources/blog/[slug]/`, `app/resources/buyers-guide/`, `app/resources/market-updates/`, `app/resources/renovation-planning/`, `app/resources/sellers-checklist/`

### Components
- `components/`
- `components/icons/`
- `components/ui/`

### Library
- `lib/` *(flat — no subdirectories)*

### Assets & styles
- `public/`
- `styles/`

### Meta / agent
- `.claude/`

**Rule (Codification F restated):** `git mv` does NOT auto-create parent directories. Any future B4 sub-pass that moves into a target not already present in this list MUST pre-create via `mkdir -p` and enumerate the target explicitly in its scope-doc. Adding to this list requires a new scope-doc update.

---

## 8. Open Items

Carried forward from Pass 1 (CC-1 through CC-4) plus four new items discovered during Pass 2 inventory (CC-5 through CC-8).

| ID | Item | Disposition |
|---|---|---|
| CC-1 | **Session venue tension.** Pass 1 was executed from the `Projects/` meta-work session, not from `CC/` root, before the venue-bound parallelization rule was formally coded. Pass 2 (this pass) and all subsequent CC passes execute from the `CC/` repo root per 2026-04-24 Option D entry ("each CC sub-site audit executes in a fresh session at the venture repo root"). | Record only; no retroactive action. Pass 2+ compliance enforces the rule going forward. |
| CC-2 | **8 non-main remote branches** (prompt stated 7 — actual count is 8). Inventory: `chore/add-claude-md-governance-contract` (1 commit ahead of `main`), `v0/coninecoastal-ceceb7d4` (0 commits ahead), `cursor/adjust-website-text-spacing-for-readability-gpt-5.1-codex-ef64` (0 ahead), `cursor/ensure-website-is-mobile-friendly-gpt-5.1-codex-bc4c` (0 ahead), `cursor/fix-broken-contact-form-a675` (0 ahead), `cursor/review-hero-section-text-spacing-gpt-5.1-codex-926d` (0 ahead), `cursor/verify-hero-section-image-relevance-gpt-5.1-codex-9000` (0 ahead), `cursor/website-audit-and-problem-identification-8b63` (0 ahead). | Record only; no action this audit. Only `chore/add-claude-md-governance-contract` carries unique history relative to `main`. The 6 `cursor/*` branches and `v0/coninecoastal-ceceb7d4` report 0 commits ahead of `main` (fully merged, reset, or equal). Disposition (merge / close / delete) is deferred — out of scope per §6. |
| CC-3 | **Backup branch `backup/pre-harness-audit-2026-04-24` not pushed to origin.** Local-only branch currently serves as the audit venue. | Record only; no action this audit. Push to origin can be performed at any time without disrupting audit execution; deferred until post-audit or at user discretion. |
| CC-4 | **`.next/` build artifacts in working tree** (gitignored via `.gitignore` line `/.next/`). Not tracked; does not affect clean-tree state for Codification E verification. | Record only; no action. Gitignore is honored; artifacts can be cleaned (`pnpm build` side-effect or `rm -rf .next/`) at any time without governance implication. |
| CC-5 | **`package.json` `name: "my-v0-project"`** — unreplaced v0.dev scaffold default (identical anomaly to Landmark Logix Open Item A). Every deployed asset reads "Conine Coastal"; package-level identity mismatch is cosmetic. | Record only; no action. |
| CC-6 | **`CLAUDE.md §Routing` describes route categories that do not exist in `app/`.** Documented routes: `/real-estate/`, `/renovations/`, `/investor-services/`, `/resources/blog/[slug]/`. Actual routes: `/about/`, `/api/contact/`, `/companies/{development,estates,home-services,real-estate,travel}/`, `/contact/`, `/faq/`, `/offline/`, `/portal/`, `/privacy-policy/`, `/resources/{blog/[slug],buyers-guide,market-updates,renovation-planning,sellers-checklist}/`, `/reviews/`, `/schedule/`, `/sitemap/`, `/terms-of-service/`. Only `/resources/blog/[slug]/` overlaps. `CLAUDE.md` describes a prior or aspirational route tree; `app/` reflects the current (post-fleet-split) tree. | Record only; no content edits this audit (§6 excludes `CLAUDE.md` changes). Reconciliation is a future governance-doc refresh, not a harness-audit deliverable. |
| CC-7 | **`pnpm-workspace.yaml` exists but declares no `packages:` field** — only `onlyBuiltDependencies: sharp`. File is structurally a pnpm workspace config, but the repo is a single-app Next.js project. No `apps/` or `packages/` directories exist. Functionally the file provides only the `onlyBuiltDependencies` hint to pnpm. | Record only; no action. Removing or normalizing the file is out of scope per §6. |
| CC-8 | **`.claude/settings.local.json` is tracked by git** (confirmed via `git ls-files .claude/`). Conventional expectation is that `*.local.*` files are gitignored. Same anomaly as Landmark Logix Open Item B. `.gitignore` has no rule excluding `.claude/`. | Record only; no action. Future governance pass may decide whether to gitignore-and-remove or retain as intentional. Audit runs against the tree as-is. |

---

## 9. Pass Log

| Pass | Action | Commit |
|------|--------|--------|
| 1 | Scaffolded `_migration/{SCOPE.md, DRY_RUN.md, AUDIT_LOG.md}` (three empty placeholders) | `6a5e6da` |
| 2 | Authored `_migration/SCOPE.md` | *(fill after commit)* |
