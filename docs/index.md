# Design System Research for AI-Generated Unique Designs

## Purpose
Create a professional design-system setup that enables AI to generate UNIQUE, non-generic designs (anime.js motion + modern powerful design patterns).

## Research Targets (from user)
1. Design systems that prevent AI generic-ness (art direction enforced). Examples: Linear, Stripe, Vercel Geist, Radix Themes, Tailark, Origin UI, Clerk, Dub.co, Lattice, Monocle, Raycast, Arc Browser, Studio, Base, Linear Principles, Apple's HIG vs brutalist/neo-brutalist, Shopify Polaris, Carbon IBM, Atlassian, Nothing, Olla Labs, Prophet, Felix, etc. Extract visual principles, token architecture, do/don't, personality encoding.
2. AI-friendly design systems (to force variation). Research: design system for LLMs, token-driven design, promptable design system, shadcn/ui philosophy, Magic Patterns, Relume, v0/Builder.io, Lovable, Tempo Labs, 21st.dev, Quest, Zeroheight docs, Specify, Supernova, Design Tokens W3C, Theo, Style Dictionary. Patterns: tokens.json (W3C DTCG), design-tokens.json, @tokens-studio, figma-to-code token contracts, how to structure for LLM consumption (atomic/semantic/component/decision tokens).
3. Motion systems + Anime.js (professional, performant). Anime.js v4, GSAP vs Anime.js tradeoffs, Material Motion, Apple Motion, Rive, Lottie, AutoAnimate, Motion One. Examples: Awwwards (KPR, Resn, Active Theory, Dogstudio), GSAP Club, Codrops, Julien Renvoye, Dennis Snellenberg, Obys Agency, The Brewery, Kaboom, Locomotive + Anime.js. Easing, choreography, micro-interactions, reduced-motion, accessibility, rAF, will-change.
4. Cutting-edge aesthetics: neo-brutalism, glassmorphism 2.0, claymorphism, soft UI, brutalist, Swiss/International Typographic Style, grid systems (Subgrid), fluid type (clamp), OKLCH, 3D microinteractions, shader motion, tasteful grain/noise/blur/glow/depth without generic.

## Deliverables (actionable)
- Top 5-7 design systems (ranked, URLs, why)
- Concrete token structure (JSON schema suggestion: primitives → semantic → component → decision tokens) — ready-to-paste
- AI instruction block (design-system.md + art-direction.md + motion-principles.md + llm-instructions.md) — copy-paste ready
- Anime.js motion library starter (eases, presets, choreography rules, reduced-motion guard)
- Recommended file structure for /media/sattorov/Tom 150/Project/design-system/
- 3-4 concrete prompts to force uniqueness per project
- References (all source URLs, Awwwards/Codrops, Anime.js docs, W3C DTCG)

## File index (added Oct 2026)
- `docs/motion-landscape.md` — anime.js v4.5 vs GSAP 3.13+ (free) vs Motion vs CSS scroll-driven, with decision matrix
- `docs/design-md-format.md` — Google's `DESIGN.md` (`@google/design.md`) for coding agents: tokens + lint/diff/export/spec
- `tokens/scroll-patterns.md` — Lenis, GSAP+Lenis recipes, CSS scroll-driven `@supports` patterns, anime.js `onScroll()`
- `docs/do-dont.md` — DO/DON'T checklist distilled from prompts, motion, scroll and LLM-instruction docs
- Also: `docs/llm-instructions.md`, `docs/prompts.md`, `docs/top-systems.md`, `docs/references.md`, `tokens/tokens-structure.md`, `tokens/motion-anime.md`

Focus: make AI produce non-generic, distinct results. Include concrete JSON + markdown files ready to create.
