# Conine Coastal — CLAUDE.md

Instantiated from `ai-infrastructure/conventions/templates/website-claude-md-template.md`.
The plane's `AGENTS.md` and `conventions/constraints.md` govern this repo; this file adds
only what is true here.

| | |
|---|---|
| Entity | `1 - Conine Coastal Holding Company` |
| Remote | `ConineCoastal/coninecoastal` |
| gh account | `ConineCoastal` |
| Lead office | `capabilities/product/web-design-firm/web-design-firm.md` |

## 1. Venture scope

Scoped to the entity above. A session reads this repo and the capability plane, nothing
else. Cross-venture work needs David's explicit request (`constraints.md` *Scope isolation*).
This is the group's umbrella site, the only one that describes the group; it links to the
five sub-sites.

## 2. Stack

Next.js 16 (App Router), React 19, TypeScript, pnpm. Tailwind with the family palette in
`tailwind.config.ts`; shadcn/ui in `components/ui/`. Static content in `lib/`, no database or
CMS; updates are code changes. A page with interactivity is a server `page.tsx` that renders
a `*ClientPage.tsx`. Security headers live in `next.config.mjs`.

## 3. Build / deploy / test

```bash
pnpm dev     # dev server
pnpm build   # production build
pnpm lint    # ESLint
pnpm start   # serve the production build
```

Vercel deploys on push to `main`. The contact form (`app/api/contact/route.ts`) sends via
Resend, then SMTP, then logs. Env vars, set in Vercel only: `RESEND_API_KEY`, `SMTP_*`,
`GMAIL_SMTP_*`, `CONTACT_*`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_FB_PIXEL_ID`.

## 4. Prohibited actions

- Committing to `main` or force-pushing it. Every change is a branch and a PR.
- Committing a secret or a `.env` file. They live in the Vercel dashboard.
- Copying content-plane material (venture context, engagement records) into this repo.
- Writing to a sibling repo in the same session or loop.
- Removing or breaking shipped functionality without David's sign-off.
- Implying any subsidiary is operating, earning, serving clients or carrying testimonials.
  The group is pre-launch; `reviews` stays empty and CTAs are "by appointment / inquiry".
- Naming a CRM as if one is wired in. The cross-referral CRM is still unselected.

## 5. Venture notes

- `PRODUCT.md` (audience, pre-launch reality, voice, geography) and `DESIGN.md` (visual
  system) hold the design context; `.impeccable/design.json` is the token sidecar.
- Playfair Display and Inter (`styles/fonts.ts`) stand in for the licensed Goldenbook and
  Times brand faces until the Goldenbook licence is bought.

## 6. Session checklist

1. For site, UI or content work, open with
   `ai-infrastructure/playbooks/session-kickoff-website.md`.
2. Before a push, `git config --local --get credential.username` returns `ConineCoastal`; if not,
   re-apply `ai-infrastructure/tools/scripts/pin-credential.sh ConineCoastal`. Never hand-edit the pin.
3. Close with `ai-infrastructure/playbooks/session-wrap.md`.
