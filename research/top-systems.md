# Top 5-7 Design Systems (ranked for "preventing AI generic-ness")

## Ranking criteria
- Explicit art direction / personality (not just components)
- Strong token discipline (primitive->semantic/decision tokens)
- Motion/interaction identity
- Documented do/don't / principles
- Feels distinct from Tailwind/shadcn defaults
- Can constrain LLMs (rules-based)

## 1. Linear (linear.app)
- Why: Opinionated, product-forward, tight type scale, restrained motion, strong editorial/art direction. "Method" principles emphasize clarity + craft.
- URLs: https://linear.app/, https://linear.app/brand, https://linear.app/method
- Anti-generic traits: monochrome-forward, sharp corners, precise spacing, editorial voice. Motion is subtle/functional (not bouncy).
- Token ideas: density-driven spacing, semantic color (bg/surface/interactive) with minimal palette; motion tokens (durations/eases) conservative.
- Constrain for AI: forbid rounded-pill everything, enforce max-width/typographic rhythm, prefer functional motion.

## 2. Vercel Geist (vercel.com/geist)
- Why: Cohesive typographic system (Geist Sans/Mono), grid-forward, modern but opinionated. Strong visual language.
- URLs: https://vercel.com/design/geist, https://vercel.com/geist/introduction
- Anti-generic: tight tracking/scale, minimal but distinct UI, thoughtful density.
- Tokens: CSS variables, OKLCH-friendly, clear scale. Good reference for token naming.
- Constrain: enforce scale system, avoid decorative shadows/glass by default.

## 3. Radix Themes (radix-ui.com/themes)
- Why: Accessibility-first + tokenized. Scales/colors/spacing/radius exposed as CSS variables. Easy to theme with personality.
- URLs: https://www.radix-ui.com/themes, https://www.radix-ui.com/themes/docs/theme/token-reference
- Anti-generic: "designed to be customized" but also opinionated defaults. Good base to layer art direction on.
- Tokens: comprehensive token set (scaling, radii, shadows) — good contract to extend with semantic/decision tokens.
- Constrain: force semantic overrides, avoid default "card-heavy" look via radius/shadow tokens.

## 4. Stripe (stripe.com)
- Why: Masterclass in art direction + motion. Subtle 3D/gradients used tastefully; editorial; strong brand guardrails.
- URLs: https://stripe.com/, https://stripe.com/brand, https://stripe.com/docs/appearance-api (tokenized theming concepts)
- Anti-generic: cinematic but restrained, uses depth/glow sparingly. Motion choreographs focus.
- Tokens: brand tokens + product tokens; good example of layering.
- Constrain: forbid overusing gradients/glow; require purpose for decorative effects.

## 5. Arc Browser (arc.net)
- Why: Distinct UI language (sidebar, command bar, spatial feel) — feels different from standard SaaS. Strong personality.
- URLs: https://arc.net/, https://resources.arc.net/ (brand/resources)
- Anti-generic: playful but intentional; uses blur/depth, custom type; motion feels characterful without generic.
- Tokens: less public but good study in density + spatial tokens.
- Constrain: avoid standard nav patterns, enforce spatial hierarchy.

## 6. Raycast (raycast.com)
- Why: Opinionated, keyboard-first, compact density, crisp motion. Distinctive "Raycast feel".
- URLs: https://www.raycast.com/, https://www.raycast.com/brand
- Anti-generic: minimal palette, strong focus states, snappy motion.
- Tokens: public-ish docs; good example of compact density tokens.
- Constrain: enforce density/interaction model, avoid card bloat.

## 7. Nothing (nothing.tech)
- Why: Bold neo-brutalist/industrial aesthetic done tastefully; strong typographic voice; distinctive.
- URLs: https://nothing.tech/, https://nothing.tech/press
- Anti-generic: high-contrast, generous whitespace or tight grids depending on page; uses type as visual element.
- Tokens: brand-driven (few colors, strong type) — good for "low token count, high personality".
- Constrain: avoid soft roundedness by default; enforce typographic hierarchy.

Honorable mentions: Clerk (clerk.com), Dub.co (dub.co), Base (base.org), Shopify Polaris (polaris.shopify.com), IBM Carbon (carbondesignsystem.com), Atlassian (atlassian.design), Tailark/Origin UI (21st.dev/originui), Lattice/Monocle (varies), Obys Agency (obys.agency) for motion inspiration.
