# UI-Design

> A design system for AI-proof web design: design tokens (W3C DTCG), UI design guidelines, motion design recipes, and anti-AI-slop prompting for frontend teams.

UI-Design is a curated **design system** knowledge base for building unique, art-directed interfaces instead of generic ones. It combines ready-to-paste **design tokens** in the **W3C DTCG** format, **motion design** patterns for **anime.js**, **GSAP**, **Lenis** and **CSS scroll-driven animations**, **accessibility** rules, and **AI design prompts** / **LLM instructions** that stop generative tools from producing slop. Everything is plain Markdown and JSON — no build step, no dependencies — so it drops into any **web design** or **frontend** project and reads equally well for humans and agents.

[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE) [![docs](https://img.shields.io/badge/docs-readme-blue)](#whats-inside)

## What's inside

```
UI-Design/
├── docs/       12 distilled guides — UI design guidelines, prompts, motion, references
├── tokens/     W3C DTCG design tokens + anime.js starter + scroll patterns
├── motion/     anime.js v4 starter (copy-paste)
├── research/   12 original source files — provenance for everything in docs/
├── .gitignore  local workspace metadata (never published)
├── LICENSE     MIT
└── README.md   this file
```

| Path | Purpose |
|---|---|
| `docs/index.md` | Overview, research targets, deliverables and the master file index |
| `docs/design-system.md` | AI-friendly design system principles and LLM consumption patterns |
| `docs/art-direction.md` | Mood archetypes, aesthetic styles, hard anti-generic rules |
| `docs/motion-principles.md` | anime.js v4 easing, choreography, reduced-motion guard, performance |
| `docs/motion-landscape.md` | anime.js vs GSAP (free era) vs Motion vs CSS scroll-driven — decision matrix |
| `docs/prompts.md` | 5 concrete AI design prompts, anti-AI-slop rules, reusable procedures |
| `docs/do-dont.md` | DO / DON'T checklist across visual, motion, tokens & docs |
| `docs/llm-instructions.md` | Copy-paste LLM instruction blocks (master design-generation rules) |
| `docs/top-systems.md` | Ranked design systems: Linear, Vercel Geist, Radix Themes, Stripe, Arc, Raycast, Nothing |
| `docs/aesthetics.md` | Neo-brutalism, glassmorphism 2.0, OKLCH, subgrid, fluid type — used tastefully |
| `docs/design-md-format.md` | Google's `DESIGN.md` format for coding agents (tokens, lint, diff, export, spec) |
| `docs/references.md` | All source URLs: Anime.js, W3C DTCG, Awwwards, Codrops and more |
| `tokens/tokens.json` | Full W3C DTCG token set — `$type` / `$value`, OKLCH colors, decision tokens |
| `tokens/tokens.example.json` | Minimal paste-ready DTCG example with decision tokens |
| `tokens/tokens-structure.md` | Layering guide: primitives → semantic → component → decision tokens |
| `tokens/scroll-patterns.md` | Lenis, GSAP+Lenis recipes, CSS scroll-driven animations, anime.js `onScroll()` |
| `tokens/motion-anime.md` | anime.js v4 motion notes: scroll module, eases, reduced-motion, performance |
| `tokens/anime-starter.js` | Copy of the motion starter, kept next to the tokens for quick wiring |
| `motion/anime-starter.js` | The anime.js v4 starter: eases, presets, timeline helpers, reduced-motion guard |
| `research/index.md` · `research/structure.txt` | Original overview and the recommended file structure |
| `research/top-systems.md` · `research/tokens-structure.md` · `research/motion-anime.md` · `research/aesthetics.md` · `research/ai-friendly.md` | Raw analysis behind the docs on systems, tokens, motion, aesthetics and LLM-friendly patterns |
| `research/llm-instructions.md` · `research/prompts.md` · `research/references.md` · `research/anime-starter.js` · `research/tokens.example.json` | Original copy-paste source material behind `docs/`, `tokens/` and `motion/` |
| `docs/accessibility.md` | Accessibility rules, WCAG checklists, keyboard interaction and design trade-offs |
| `docs/patterns.md` | Forms, state management, layouts and navigation patterns |
| `docs/decision-guide.md` | Technology selection matrix and trade-offs for deliberate frontend decisions |
| `docs/systems-catalog.md` | Enterprise systems catalog — ranked design systems and component strategies |
| `docs/agent-workflow.md` | AI agent workflow — how agents read and apply this knowledge base |
| `skills/shadcn/` · `skills/migrate-radix-to-base/` | Agent skills: component management + Radix→Base migration (MIT © shadcn, see `skills/PROVENANCE.md`) |

## Who this is for

- **Frontend engineers & designers** who want reusable UI design guidelines instead of re-deciding spacing, color and motion on every project.
- **AI agents and coding assistants** that need LLM instructions plus machine-readable token JSON as prompt context.
- **Teams art-directing with generative tools** who need anti-AI-slop constraints, a forbid list and a genericness audit.
- **Anyone comparing motion libraries** (anime.js, GSAP, Lenis, CSS scroll-driven animations) before committing to one.

## Quick start

### 1. Human — read in this order (~20 min)

1. `docs/index.md` — what this project is and how the files fit together.
2. `docs/design-system.md` — how to structure a system so both humans and LLMs read it.
3. `docs/art-direction.md` — pick **one** mood archetype and **one** signature move.
4. `tokens/tokens-structure.md` → `tokens/tokens.json` — understand the layers, then copy the tokens.
5. `docs/do-dont.md` — run the checklist before you ship anything.

### 2. AI agent — attach these to your prompt

1. Attach `docs/llm-instructions.md` + `tokens/tokens.json` + `docs/art-direction.md` as context.
2. Take one prompt from `docs/prompts.md` (signature-first, density-driven, motion character, anti-generic, mood tokens).
3. Add motion rules from `docs/motion-principles.md`, engine choice from `docs/motion-landscape.md`.
4. Finish with the DO/DON'T audit: `docs/do-dont.md`.
5. Use `skills/shadcn/` and `skills/migrate-radix-to-base/` as agent skills (component management + Radix→Base migration).

### 3. Copy-paste — into your own project

- **Tokens:** start from `tokens/tokens.example.json`, paste it in, then scale up with `tokens/tokens.json`.
- **Motion:** copy `motion/anime-starter.js` into your app and import `animate`, `createTimeline`, `stagger`, `utils` from `animejs`.
- **Scroll:** paste a recipe from `tokens/scroll-patterns.md` (Lenis, GSAP, CSS scroll-driven, anime.js).
- **Guidelines:** keep `docs/do-dont.md` and `docs/llm-instructions.md` next to the code so both teammates and agents follow them.

## Design tokens (W3C DTCG)

- **Format:** every token is a `$value` + `$type` pair (optionally `$description`), grouped under a `$schema` — the W3C Design Tokens Community Group standard, format module 2025.10.
- **Layers:** `primitives` (raw values, never used directly) → `semantic` (roles: `bg-surface`, `text-primary`) → `component` (sparingly) → **`decision` tokens** that encode personality such as `density`, `surface.style`, `motion.emphasis`.
- **Files:** `tokens/tokens.json` (full set), `tokens/tokens.example.json` (minimal, paste-ready), `tokens/tokens-structure.md` (the why and how).
- **Interop:** the same JSON maps to CSS variables for the browser and feeds Style Dictionary-style pipelines; color is modern OKLCH.

## Motion system (anime.js · GSAP · Lenis · CSS scroll-driven animations)

- **Starter:** `motion/anime-starter.js` is anime.js v4-native — named imports, brand eases instead of a default `ease-in-out` everywhere, timeline helpers and stagger choreography.
- **Reduced motion is built in:** a `prefers-reduced-motion` guard short-circuits every animation, so motion ships accessible by default.
- **Scroll:** `tokens/scroll-patterns.md` covers Lenis as the smooth-scroll standard, the canonical GSAP+Lenis wiring, GSAP-free-era recipes, CSS scroll-driven animations with an `@supports` fallback, and anime.js v4 `onScroll()`.
- **Which engine:** `docs/motion-landscape.md` compares anime.js v4.5, GSAP 3.13+ (fully free), Motion and native CSS scroll-driven animations, with a decision matrix.
- **Performance:** animate transforms and opacity only, keep choreography short and respect `will-change` discipline — see `docs/motion-principles.md`.

## Accessibility

- `prefers-reduced-motion` is guarded in `motion/anime-starter.js` and in every recipe that animates.
- Every component ships hover / focus / active / disabled / loading states with a WCAG AA `focus-visible` ring — `docs/do-dont.md`.
- The procedure workflow ends with `accessibility-audit`, after `ai-slop-check` and `hierarchy-rhythm-review` — `docs/prompts.md`.
- Contrast lives in the tokens: OKLCH ramps are checked while designing primitives — `tokens/tokens-structure.md`.

## Prompting AI for unique design (anti-AI-slop + art direction)

The differentiator of this repo: it teaches AI how **not** to look like AI. Use these **AI design prompts** and **LLM instructions** on any generator — ChatGPT, Claude, v0, Lovable, Cursor.

- **Anti-AI-slop rules** to adopt into every prompt — `docs/prompts.md` (see also the `ai-slop-check` procedure).
- **Decision tokens for personality** — change `density`, `surface.style` and `motion.emphasis` and the same system produces a different-feeling product.
- **`generate-variations`** — forces 3+ hi-fi variants across independent axes (layout × type × color × motion), then `ai-slop-check` → `hierarchy-rhythm-review` → `interaction-states-pass` → `accessibility-audit`.
- **DO / DON'T checklist** covering visual, motion and token rules — `docs/do-dont.md`.
- **Master LLM instructions** as copy-paste blocks, structured docs instead of prose — `docs/llm-instructions.md`.
- **Art direction enforced:** one mood archetype, one signature effect, and a written genericness audit that explains how the result differs from the default look.

## Research provenance

`research/` holds the original source material — the raw analysis, ranked systems, token notes, motion notes and reference dumps this project was distilled from. `docs/` is the distilled current version; when the two disagree, trust `docs/` and refresh it from the sources listed in `docs/references.md`. The findings of the original research report are folded into **Key insights** below. The agent-skill files (`skills/`) and the enterprise systems catalog (`docs/systems-catalog.md`) come from sibling repo [UI-Brain](https://github.com/alisattorov06/UI-Brain).

## Key insights

- **Decision tokens beat decoration.** `density`, `surface.style`, `motion.emphasis` encode personality; vary them per project so the same system yields a different design.
- **Restraint wins: one signature effect.** Pick exactly ONE signature move (grain 2–4% OR hard shadows OR a 3D microinteraction ≤ 4°) — stacking everything is precisely how generic AI output appears.
- **Typography-first, 4pt scale, minimal palette.** A tight type scale and few colors fight the “shadcn default” look harder than any color trend.
- **A forbid list + DO/DON'T + genericness audit.** Explicit forbiddens force every non-obvious choice to be justified (`docs/do-dont.md`).
- **Structured docs beat prose.** Instruction blocks, checklists and JSON tokens are followed by LLMs far better than paragraphs (`docs/llm-instructions.md`).

## License

MIT — see [`LICENSE`](LICENSE).
