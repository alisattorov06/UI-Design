# 3–4 Concrete Prompts to Force Uniqueness

## Prompt 1: "Signature-first" (force art direction)
```
You are working with the design system at /media/sattorov/Tom 150/Project/design-system/.
Read docs/llm-instructions.md, docs/art-direction.md, tokens/tokens.json.

Create a landing page for [PROJECT NAME]. 
Requirements:
- Pick EXACTLY ONE signature style from decision.surface.style (neo-brutalist OR swiss OR brutalist). State your choice and rationale.
- Enforce restraint: use max 1 signature effect (e.g. hard shadows OR tight type OR grain at 3% opacity).
- Typography-first: establish clear hierarchy using fluid type.
- Spacing: 4pt scale only; use tokens conceptually.
- Avoid: rounded-xl, generic card shadows, rainbow colors, pill buttons.
- Motion: subtle with Anime.js v4; respect reduced-motion.
- Output: layout + key components + do/don't + 3 concrete ways to vary next iteration.
```

## Prompt 2: "Density-driven" (force different feel)
```
Using the design system, generate a product UI with density=compact (override decision.density).
Constraints:
- Tight vertical rhythm, smaller hit targets where appropriate, but accessible (min 44x44px interactive).
- Swiss-influenced grid (12-col) + subgrid where cards align.
- Minimal color palette (2 brand + neutrals + semantic).
- Motion snappy (fast/feedback) but subtle.
- Avoid decorative glass/glow.
- Uniqueness check: explain how this differs from default shadcn look.
```

## Prompt 3: "Motion character" (force distinct motion)
```
Design a hero section with strong motion character. 
- Custom easing (not default ease-in-out) — define cubicBezier or spring values.
- Choreography: stagger 20–40ms with timeline labels (no all-at-once).
- Only transform/opacity; include will-change cleanup.
- Reduced-motion guard required.
- Keep motion purposeful (focus/entrance), not decorative loop.
- Anime.js v4 only.
```

## Prompt 4: "Anti-generic" (explicit forbiddens)
```
Create [feature/page] with anti-generic constraints:
- Forbidden: soft rounded cards, drop shadows everywhere, gradient backgrounds, generic 3-col grids.
- Must use: strong type scale, 4pt spacing, at most 2 brand colors + neutrals.
- Pick ONE accent technique: grain (2–4% opacity) OR hard shadows OR 3D microinteraction (max 4deg).
- Decision tokens must drive all visual choices.
- Justify each non-obvious choice; reject defaults.
- Include "genericness audit": list what you avoided and why.
```
