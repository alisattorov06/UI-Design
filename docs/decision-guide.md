# Decision Guide — Choosing UI Technology

> Quick orientation matrix: need → starting choice → next step.

## Tech-selection matrix

| Need | Starting choice | Next step |
|---|---|---|
| Fast React app | shadcn/ui — "copy, not dependency" composable components | [`skills/shadcn/`](skills/shadcn/) for component management; [`docs/design-system.md`](design-system.md) for the philosophy |
| Full enterprise design system | Carbon (IBM) or Fluent UI (Microsoft) | [`docs/systems-catalog.md`](systems-catalog.md) for both cards; then the [a11y checklist](accessibility.md) |
| Material Design look | Material Web (Google) | [`docs/systems-catalog.md`](systems-catalog.md); then [`tokens/tokens-structure.md`](tokens/tokens-structure.md) for theming |
| Strong custom-brand fit | Astryx (React 19 + StyleX) | [`docs/systems-catalog.md`](systems-catalog.md); then [`tokens/tokens-structure.md`](tokens/tokens-structure.md) |
| Low-level, composable UI | Radix Primitives (accessible, unstyled) | [`skills/migrate-radix-to-base/`](skills/migrate-radix-to-base/) if moving to Base UI; then [UI patterns](patterns.md) |
| Eye-catching motion effects | anime.js v4 / GSAP / Motion / CSS scroll-driven | [`docs/motion-landscape.md`](motion-landscape.md#5-decision-matrix) §decision matrix; then the [a11y checklist](accessibility.md) for reduced motion |
| Aesthetic / system ranking | Linear, Geist, Radix Themes, Stripe, Arc, Raycast, Nothing | [`docs/top-systems.md`](top-systems.md) |
| Theme, color & spacing system | W3C DTCG tokens, primitives → semantic → component → decision | [`tokens/tokens-structure.md`](tokens/tokens-structure.md) |

## Decision rule

First identify the product's framework and brand requirements, then the accessibility needs. Only after that choose the component API and template.

> Extracted from UI-Brain (github.com/alisattorov06/UI-Brain), translated/relinked, verified Oct 2026.
