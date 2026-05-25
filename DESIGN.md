---
name: Conine Coastal Group
description: The credibility surface for a Northeast Florida family of property companies. Institutional permanence, coastal palette, quiet authority.
colors:
  deep-harbor-navy: "#18457C"
  first-coast-blue: "#229FD9"
  inlet-orange: "#F16622"
  dune-yellow: "#FFCA05"
  driftwood-grey: "#707070"
  ink: "#0A0A0A"
  canvas-white: "#FFFFFF"
  mist: "#F5F5F5"
  hairline: "#E5E5E5"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(3.25rem, 9vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Inter, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-y: "48px"
  section-y-lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.first-coast-blue}"
    textColor: "{colors.canvas-white}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "#1E8FC4"
    textColor: "{colors.canvas-white}"
  button-secondary:
    backgroundColor: "{colors.inlet-orange}"
    textColor: "{colors.canvas-white}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-on-dark:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.deep-harbor-navy}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  card:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.deep-harbor-navy}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "40px"
  badge:
    backgroundColor: "{colors.first-coast-blue}"
    textColor: "{colors.canvas-white}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
---

# Design System: Conine Coastal Group

## 1. Overview

**Creative North Star: "The First Coast Institution"**

This is the front door to a family of Northeast Florida property companies, and its only job is to make a sophisticated visitor (a referral attorney, a wealth manager, a family office, a prospective client) feel that this group is real, established, and built to outlast any single deal. The aesthetic is a quiet holding company: authority expressed through restraint, whitespace, and hairline structure rather than volume. It presents itself as a lifecycle atlas, a calm directory mapping land-through-maintenance as one integrated system, never as a hard-selling service provider.

The palette is coastal but never touristic: a deep institutional navy anchored to a clear First Coast blue, with warm accents (orange, gold) used sparingly as wayfinding, not decoration. Typography pairs a Playfair Display serif (the voice of permanence and editorial seriousness) with Inter for clean, legible body text. Surfaces are flat and bordered, not floating. The whole system should read closer to a land-and-trust company or a university endowment than to a real-estate franchise or a venture-funded app.

This system explicitly rejects two things named in PRODUCT.md. It must never look like a **real-estate franchise** (stock agent headshots, loud "search homes now" bars, listing grids, sold-sign badges), because flashiness reads as transactional and undercuts the institutional positioning. And it must never look like a **SaaS or startup** (purple or blue gradients, gradient text, the hero-metric template, glassmorphism, "Get started free" CTAs, endless identical feature cards), because those read as ephemeral, the opposite of permanent.

**Key Characteristics:**
- Quiet authority over flash; restraint is the signature.
- Coastal palette anchored to deep navy, warm accents rationed.
- Serif display (Playfair) for permanence, Inter for clarity.
- Flat, bordered surfaces; shadows reserved for true overlays.
- Generous, varied vertical rhythm; nothing cramped, nothing shouting.
- Credibility framing throughout: inquiry and by-appointment, never "book now."

## 2. Colors: The First Coast Palette

A restrained coastal palette: navy and blue carry the brand, warm tones are rationed to wayfinding accents, and everything sits on near-white with hairline greys. The accent colors are the exception, not the field.

### Primary
- **Deep Harbor Navy** (#18457C): The institutional anchor. Used for primary headings on light backgrounds, the full-bleed conviction sections (stats band, closing band), navigation text, and body text where weight matters. This is the color of permanence; it should dominate the brand impression.
- **First Coast Blue** (#229FD9): The single signature accent. Primary calls to action, links and hover states, the global focus ring (2px solid #229FD9), badges, and small wayfinding marks. Clear and coastal, it is the brand's one bright voice and should stay rare enough to mean something.

### Secondary
- **Inlet Orange** (#F16622): A warm secondary accent for a second-tier action where two CTAs must coexist (for example "Get in Touch" beside "About Our Group"). Reserve for genuine wayfinding contrast; it is not a decorative fill. On white it fails AA for normal text, so use it for buttons, large text, and icons only.

### Tertiary
- **Dune Yellow** (#FFCA05): The most restricted color. A rare highlight only. It fails AA badly on white for any text and must be paired with Deep Harbor Navy text or used purely as a non-text accent.

### Neutral
- **Driftwood Grey** (#707070): The body and supporting-text workhorse on light backgrounds. Calm, legible, never competing with navy.
- **Ink** (#0A0A0A): Near-black for the rare cases that need maximum text contrast. Tinted, never pure #000.
- **Canvas White** (#FFFFFF): The dominant background. The site breathes on white; whitespace is a credibility asset.
- **Mist** (#F5F5F5): A faint grey for quiet surface separation (muted panels, alternating bands) when a tonal step is needed instead of a border.
- **Hairline** (#E5E5E5): Borders, dividers, input strokes. The primary tool for structure, in place of shadows.

### Named Rules
**The One Bright Voice Rule.** First Coast Blue is the only color allowed to draw the eye, and it appears on roughly 10% of any screen or less. Navy is the field; blue is the signal. Orange and gold are emergency wayfinding, never atmosphere.

**The Earned-Accent Rule.** Warm accents (orange, gold) appear only where they guide an action or distinguish a sibling company. Never as a gradient, a background wash, or a mood. If an accent is not doing navigational work, it is removed.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, Times New Roman, serif fallback)
**Body Font:** Inter (with -apple-system, Segoe UI, sans-serif fallback)

> **Brand-intent note.** The brand positioning in `CLAUDE.md` (per the Q3-R1 questionnaire) names **Goldenbook display + Times body** as the intended typographic direction. The current shipped implementation uses **Playfair Display + Inter** as the working stand-in (Goldenbook is a commercial license not yet acquired). This spec documents the shipped system; treat Goldenbook + Times as the migration target rather than a contradiction. When the license lands, swap the families and re-run `/impeccable document` to refresh these tokens.

**Character:** A high-contrast editorial serif paired with a neutral, highly legible grotesque. Playfair carries gravity and age, the look of a printed annual report or a chartered institution; Inter keeps the reading experience modern and clean. Distinctively, navigation links are set in Playfair medium at small size, lending even the chrome an editorial, institutional tone. Headings are tightly tracked (-0.025em); body is set loose and readable (1.65 line-height) with a faint negative tracking (-0.01em).

### Hierarchy
- **Display** (Playfair, 700, clamp(3.25rem, 9vw, 4.5rem), line-height 1.15): Hero headline only. The single largest statement on a page.
- **Headline** (Playfair, 700, clamp(2rem, 5vw, 2.5rem), line-height 1.25): Section titles ("The Coastal Advantage", "Our Companies"). The recurring serif drumbeat that structures a page.
- **Title** (Inter, 600, 1.25rem, line-height 1.3): Sub-section and card headings within body content. Company directory names may step up to Playfair for editorial weight.
- **Body** (Inter, 400, clamp(1rem, 0.95rem + 0.2vw, 1.0625rem), line-height 1.65): Paragraphs and lists. Cap measure at 65 to 75ch for comfortable reading; long descriptions sit in constrained max-width columns.
- **Label** (Inter, 500, 0.875rem): Small supporting text, descriptions, metadata, captions in Driftwood Grey.

### Named Rules
**The Serif-for-Permanence Rule.** Every page-structuring heading is Playfair. The serif is what signals an institution rather than a startup; never substitute a bold sans for a section title to save a font load.

**The Quiet Caps Rule.** If small uppercase labels are introduced, track them open (around +0.08em) and keep them in navy or grey. Loud, tight, colored caps read as marketing; avoid them.

## 4. Elevation

Flat by default. Depth comes from hairline borders (#E5E5E5) and faint tonal bands (Mist #F5F5F5), not from drop shadows. This is a deliberate steer away from the current implementation, which leans on Tailwind's full shadow scale (shadow-lg on the nav, shadow-2xl on hero buttons, hover:shadow-xl lifts on content cards); heavy ambient shadow reads as consumer-app gloss and works against institutional permanence. Content surfaces should sit calmly on the page with a 1px border, not hover above it.

Shadows are permitted only where an element genuinely floats above the page as a temporary overlay: the fixed navigation bar, dropdown menus, popovers, and dialogs. Even there, keep them soft and low.

### Shadow Vocabulary
- **Overlay-soft** (`box-shadow: 0 8px 24px -8px rgba(24, 69, 124, 0.18)`): Navigation bar, dropdown menus, popovers. A navy-tinted, diffuse shadow that reads as quiet lift, not drama.
- **Dialog** (`box-shadow: 0 16px 48px -12px rgba(24, 69, 124, 0.28)`): Modal dialogs only, which are themselves a last resort.

### Named Rules
**The Flat-Content Rule.** Cards, panels, stat bands, and images carry no resting shadow. If a content surface needs separation, use a hairline border or a Mist background, never a shadow.

**The Float-Means-Overlay Rule.** A shadow is a promise that the element is temporarily above the page and will go away (a menu, a dialog). If it is permanent page content, it does not get a shadow. If you see a shadow-2xl on a button or a hover-lift on a card, remove it.

## 5. Components

The component feel is **refined and restrained**: quiet, precise, generously spaced, minimal ornament. Buttons are solid and calm, cards are bordered rather than floating, inputs are clean-stroked.

### Buttons
- **Shape:** Gently squared corners (6px radius, `rounded-md`). Never pill-shaped, never sharp-cornered.
- **Primary:** Solid First Coast Blue (#229FD9) with Canvas White text, generous padding (14px 32px), comfortable touch target (min-height 48px). The default brand CTA.
- **Secondary:** Solid Inlet Orange (#F16622) with white text, same geometry. Used only when a second action must sit beside the primary.
- **On dark:** White surface with Deep Harbor Navy text, for use on navy or photographic backgrounds.
- **Hover / Focus:** Background darkens one tonal step on hover (no lift, no shadow growth). Focus shows a 2px First Coast Blue ring at 2px offset. Transitions are background and color only, never layout, around 200ms ease-out.
- **Tertiary / Ghost / Link:** Ghost is transparent with a Mist hover; link is navy text with a blue underline on hover. Use for low-emphasis navigation.

### Cards / Containers
- **Corner Style:** 8px radius (`rounded-lg`).
- **Background:** Canvas White, or Mist for a quietly recessed panel.
- **Shadow Strategy:** None at rest (see Elevation, The Flat-Content Rule). Separation comes from a 1px Hairline border.
- **Border:** 1px Hairline (#E5E5E5) by default. On interactive cards, the border may deepen to navy or blue on hover; do not introduce a shadow lift.
- **Internal Padding:** Generous and even (24px / `lg`). Never nest a card inside a card.

### Inputs / Fields
- **Style:** White background, 1px Hairline border, 6px radius, 40px height, 8px by 12px padding, Inter at body size.
- **Focus:** 2px First Coast Blue ring at 2px offset, border shifts to First Coast Blue. No glow.
- **Placeholder:** Driftwood Grey.
- **Error / Disabled:** Error uses a navy-readable red sparingly with a text message, never a bare red border alone. Disabled drops to 50% opacity with no pointer.

### Navigation
- **Style:** Fixed top bar, Canvas White, full-width. A single hairline rule separates it from content. Height 64px (mobile) to 80px (desktop).
- **Typography:** Links in Playfair medium, small size, Deep Harbor Navy.
- **States:** Navy at rest, First Coast Blue on hover and when the route is active. Dropdown menus are white, 8px radius, Hairline border, with a soft Overlay-soft shadow (they are true overlays).
- **Mobile:** Full-screen disclosure menu with the same color logic; generous 44px-plus touch targets.

### Company Directory Card (signature component)
The recurring pattern that lists the five sibling companies. An icon, the company name (Playfair), a one-line description, a short list of capabilities with a leading arrow, and a single "Learn More" link up to that sub-site. This is the heart of the holding-company surface. Keep the cards uniform in structure but resist turning the five accent colors into a rainbow (see Do's and Don'ts); a single navy-and-blue treatment with the accent used only on the arrow or link reads far more institutional than five differently-colored boxes.

## 6. Do's and Don'ts

### Do:
- **Do** lead with Deep Harbor Navy and reserve First Coast Blue for roughly 10% of the surface (The One Bright Voice Rule).
- **Do** set every page-structuring heading in Playfair Display (The Serif-for-Permanence Rule).
- **Do** keep content surfaces flat with 1px Hairline borders; reserve shadows for true overlays only (The Flat-Content Rule).
- **Do** cap body measure at 65 to 75ch and use generous, varied vertical rhythm (`section-y` 48px to 64px).
- **Do** frame all actions as inquiry or by-appointment ("Get in Touch", "Explore Our Companies"), per PRODUCT.md's credibility-over-conversion principle.
- **Do** name the real geography (First Coast, St. Augustine to Amelia Island) and keep imagery genuinely Northeast Florida.
- **Do** keep the five company cards structurally uniform and let navy carry them.

### Don't:
- **Don't** use purple or blue gradients, gradient text, glassmorphism, or the hero-metric template (big number plus small label plus supporting stats). These are the **SaaS or startup** clichés PRODUCT.md forbids. The current navy-to-blue gradient bands and the "5 / 20+ / 500+ / 100%" stats bar are exactly this pattern and should be replaced.
- **Don't** state metrics the pre-launch group has not earned ("20+ Years Experience", "500+ Projects Completed"). This violates PRODUCT.md's pre-launch-honesty principle; empty-until-real beats impressive-but-false.
- **Don't** turn the five company accent colors into a rainbow grid of identical cards. Identical card grids are a banned pattern; let navy lead and use each accent only as a small mark.
- **Don't** drift toward a **real-estate franchise** look: no stock agent headshots, no "search homes now" bars, no listing grids, no sold-sign badges, no agent-of-the-month energy.
- **Don't** use beach-tourist kitsch (palm-tree clip art, sunset-orange washes, exclamation marks) or generic corporate-template blandness (stock handshake photography).
- **Don't** put a colored `border-left` or `border-right` stripe greater than 1px on cards, callouts, or list items. Use full hairline borders or a Mist background instead.
- **Don't** add resting shadows to content (no `shadow-2xl` on buttons, no `hover:shadow-xl` lift on cards). If it is permanent page content, it stays flat.
- **Don't** use pure #000 or #fff as design intent where a tinted neutral will do; lean on Ink, Canvas White, Mist, and Hairline.
- **Don't** reach for a modal as the first answer; exhaust inline and progressive alternatives.
