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

## Prompt 5: "Art-directed with mood tokens" (force personality + anti-generic)
```
You are working with the design system at /media/sattorov/Tom 150/Project/design-system/.
Read docs/llm-instructions.md, docs/art-direction.md, docs/motion-principles.md, tokens/tokens.json.

Create a landing page for [PROJECT NAME].

REQUIREMENTS:
- Pick EXACTLY ONE mood archetype from mood.archetype (minimal | soft | expressive | brutalist | bold-neo-brutalist | editorial). Declare it upfront with rationale.
- Set decision tokens to match archetype (density, surface.style, motion.emphasis). Apply mood.palette.personality consistently.
- Layout: DO NOT use generic "3-column feature grid + centered h1 hero + CTA". Design a layout that fits content hierarchy (justify: asymmetry, editorial split, CSS Subgrid, or intentional variation).
- Restraint: max 1 signature move (grain 2–4% OR hard shadows OR selective glass OR 3D microinteraction ≤ 4°). Document it.
- Typography-first: establish hierarchy using fluid type (clamp). Use 4pt spacing scale only.
- Motion: Anime.js v4, choreography-aware (timeline labels, stagger 20–60ms), hierarchy-aware (primary → secondary → decorative), reduced-motion guard. Meaningful motion only.
- Tokens only: no hardcoded px/colors/shadows/radii. Map all visuals to tokens.
- Output: chosen archetype + signature move + layout justification + do/don't + genericness audit (defaults avoided, how differs from shadcn/Tailwind).
- Uniqueness test: if indistinguishable from generic template, revise until distinct.
```

## Anti-AI-slop rules (adopt into every prompt)

Source: **claude-design-system-prompt** — https://github.com/Trystan-SA/claude-design-system-prompt (MIT, ~1.9k stars): a 20-chapter system prompt + 14 skills. The rules below are the highest-leverage part; adopt them verbatim or adapt wording to this folder's voice.

Reject by default:
- **Gradients everywhere** (especially purple/blue AI gradients) — a gradient needs a stated purpose.
- **Emoji as decoration** — no emoji icons/ornaments in UI chrome.
- **Inter everywhere** — typeface must come from the project's type tokens; never fall back to the default UI sans.
- **Rounded card with a left border** as a generic "callout" pattern — replace with a real, art-directed pattern.

Also enforce: no identical repeated card grids without justification, no default shadow-sm/rounded-xl, no hardcoded values (already in `docs/llm-instructions.md`).

## Reusable procedures (worth adopting/adapting)

| Procedure | What it does | How to use here |
|---|---|---|
| `ai-slop-check` | Flags the known AI-tell patterns | Run as the last step of every generation; paste findings into the "genericness audit" |
| `generate-variations` | Produces **3+ hi-fi variants across independent axes** (layout × type × color × motion) | **Directly matches this folder's A/B testing purpose** — use it to force Prompt 1/5 outputs into distinct alternatives instead of one safe answer |
| `hierarchy-rhythm-review` | Checks visual hierarchy and vertical rhythm | Pair with the 4pt spacing + type-scale constraints |
| `interaction-states-pass` | Audits hover/focus/active/disabled/loading per component | Required before calling a component done (with WCAG AA focus-visible) |
| `design-system-extract` | Extracts tokens/rules from an existing UI back into the system | Use when importing a new reference design |
| `accessibility-audit` | Contrast, semantics, motion/reduced-motion checks | Combine with the DTCG `lint` idea in `docs/design-md-format.md` |

Workflow: run `generate-variations` first (get 3+ distinct directions), then `ai-slop-check` → `hierarchy-rhythm-review` → `interaction-states-pass` → `accessibility-audit` on the chosen direction.
