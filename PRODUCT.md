# Product

## Register

brand

## Users

This is a credibility surface, not a transactional one. Three audiences, none of them buyers in the funnel sense:

1. **Prospective clients of any subsidiary** who arrive to verify the legitimacy of the group before engaging one of the five operating brands (Real Estate, Estates, Development, Home Services, Travel). They are checking that this is real, established, and safe to trust with significant property decisions.
2. **Referral partners** evaluating the ecosystem before sending business: brokers, real-estate and estate attorneys, wealth managers, and family offices. This is the most important audience. They are pattern-matching for institutional seriousness and reputational safety.
3. **Press and vendors** confirming who the group is.

Context of use: a deliberate, evaluative visit from someone with money or a reputation on the line, often on desktop, never in a hurry. The job to be done is "convince me this group is credible and built to last," not "let me buy something."

## Product Purpose

Conine Coastal is the parent holding company and brand umbrella for a family of Northeast Florida property businesses spanning the full lifecycle of property: land acquisition and development, estate and luxury holdings, real-estate brokerage, home services, and travel. This site is the single front door and directory routing visitors to the five operating sub-sites (each in its own repo, linked from `app/companies/`).

It is the **only** surface that speaks for the group as a whole: the integrated land-through-maintenance lifecycle, the intercompany cross-referral protocol, and the shared brand. Sub-sites never describe the holding company; they link up to it.

Success is a referral partner or prospective client leaving with the conviction that this is a serious, permanent, integrated institution worth trusting, and a clear path into the relevant sub-brand.

**Pre-launch reality (load-bearing):** the group is pre-launch and no subsidiary entities have been formed yet. All five companies are planning frameworks awaiting attorney review. The site must never imply that subsidiaries are operating, holding revenue, serving clients, or carrying testimonials. The `/reviews` route exists structurally but stays empty until launch. Framing is "by appointment / inquiry," never "book now."

## Brand Personality

**Institutional permanence.** A visitor should feel, within five seconds, that this group has been here and will outlast any single deal. Quiet authority over flash. Generational trust over urgency.

Three words: **established, integrated, restrained.**

Voice: institutional, integrated, lifecycle-of-property. Always frame as *"a family of companies,"* never as a single service provider. The tone is measured and confident, the tone of an organization that does not need to raise its voice. Geography is a credibility asset and is always specific: Northeast Florida, the First Coast, St. Augustine to Amelia Island. Never "Charleston," never generic "the coast," never other Florida regions.

## Anti-references

This site must explicitly NOT look like:

- **A real-estate franchise** (Zillow, Realtor.com, Keller Williams energy): stock agent headshots, loud "search homes now" bars, listing-grid layouts, sold-sign badges, agent-of-the-month vibes. Flashiness reads as transactional and undercuts the institutional positioning.
- **A SaaS or startup**: purple/blue gradients, gradient text, the hero-metric template (big number + small label + supporting stats), glassmorphism, "Get started free" CTAs, endless identical feature-card grids. These read as ephemeral and venture-funded, the opposite of permanent.

Also avoid, by extension of the institutional-permanence goal: beach-tourist kitsch (palm-tree clip art, sunset-orange overload, exclamation marks) and generic corporate-template blandness (stock handshake photography, indistinguishable-agency look).

## Design Principles

1. **A family of companies, never a single provider.** Every layout, headline, and navigation choice should reinforce that this is a group speaking for itself. This is the one site allowed to describe the whole ecosystem; lean into that uniqueness.
2. **Credibility over conversion.** The goal is to make a sophisticated visitor confident, not to close a transaction. No urgency, no "book now," no funnel pressure. Inquiry and by-appointment framing throughout.
3. **Permanence over novelty.** Favor timeless, institutional design moves that will not date. Trend-driven choices (the current gradient, the current card pattern) actively work against the brand. When in doubt, choose the more restrained option.
4. **Pre-launch honesty.** Never fabricate operating status, revenue, clients, or testimonials. The credibility of the entire group depends on the site being literally true. Empty-until-real beats impressive-but-false.
5. **Northeast Florida specificity.** Place-rootedness is proof of legitimacy. Always name the real geography (First Coast, St. Augustine to Amelia Island). Specificity signals a real, located institution; vagueness signals a template.

## Accessibility & Inclusion

Target **WCAG 2.1 AA**: minimum 4.5:1 contrast for body text and 3:1 for large text and UI components, full keyboard navigability, visible focus states, semantic HTML, and ARIA labeling where structure alone is insufficient. Honor `prefers-reduced-motion` for the fade-in and scroll-driven animations. Maintain the existing skip-to-content link and focus-visible styling. Dark mode is supported via `next-themes`; both themes must meet the AA contrast bar.

Practical palette note for AA: `coastal-yellow` (#FFCA05) and `coastal-orange` (#F16622) fail 4.5:1 against white for normal text and must be reserved for large text, non-text accents, or paired with `coastal-navy`. `coastal-navy` (#18457C) on white is the safe text-on-light workhorse.
