# Agent Workflow — Using This Repo with AI Coding Agents

> Concise workflow for AI coding agents (Claude Code, Cursor, Codex, etc.) working in this repository. All paths below are this repo's files.

## 1. Read in this order

Before planning or implementing any UI work, read:

1. [`docs/index.md`](index.md) — what this project is and how the files fit together
2. [`docs/design-system.md`](design-system.md) — AI-friendly design system principles and LLM consumption patterns
3. [`docs/art-direction.md`](art-direction.md) — mood archetypes, aesthetic styles, anti-generic rules
4. [`tokens/`](tokens/tokens-structure.md) — token layers (primitives → semantic → component → decision) and the token JSON
5. [`docs/motion-principles.md`](motion-principles.md) — easing, choreography, reduced-motion guard, performance
6. [`docs/do-dont.md`](do-dont.md) — the DO / DON'T audit to run before shipping

Then read the task-relevant extra: [`docs/motion-landscape.md`](motion-landscape.md) (engine choice), [`docs/prompts.md`](prompts.md) (concrete design prompts), [`docs/decision-guide.md`](decision-guide.md) (tech selection), [`docs/systems-catalog.md`](systems-catalog.md) (system cards), [`docs/accessibility.md`](accessibility.md) (a11y checklist).

## 2. State the plan briefly

Before implementing, state in one short paragraph: the chosen design system / component strategy, the UI pattern, and the accessibility approach.

## 3. What to attach to a prompt

- **Master rules:** [`docs/llm-instructions.md`](llm-instructions.md) — copy-paste LLM instruction blocks (design-system, art-direction, motion, tokens)
- **Machine-readable tokens:** [`tokens/tokens.json`](tokens/tokens.json) (full set) or [`tokens/tokens.example.json`](tokens/tokens.example.json) (minimal, paste-ready)
- **Art direction:** [`docs/art-direction.md`](art-direction.md)
- **Motion:** rules from [`docs/motion-principles.md`](motion-principles.md), engine choice from [`docs/motion-landscape.md`](motion-landscape.md)
- **Final audit:** [`docs/do-dont.md`](do-dont.md)

## 4. Where `skills/` fits

- [`skills/shadcn/`](skills/shadcn/) — shadcn component management: adding, searching, fixing, styling and composing shadcn/ui components (CLI-driven, components copied into your project)
- [`skills/migrate-radix-to-base/`](skills/migrate-radix-to-base/) — Radix → Base UI migration: converts shadcn wrappers, hand-rolled Radix compositions and consumers to `@base-ui/react`
- **License:** both skill folders are copied verbatim from [shadcn/ui](https://github.com/shadcn-ui/ui/tree/main/skills) — MIT © 2023 shadcn (see [`skills/PROVENANCE.md`](skills/PROVENANCE.md))

## 5. Non-negotiables

- Semantic HTML, keyboard navigation, visible focus states, and `prefers-reduced-motion` wherever animation is present.
- Tokens only — no hardcoded px / colors / shadows / radii.
- Keep this repo's docs as the source of truth; when docs and code disagree, trust `docs/` and refresh from [`docs/references.md`](references.md).

> Extracted from UI-Brain (github.com/alisattorov06/UI-Brain), translated/relinked, verified Oct 2026.
