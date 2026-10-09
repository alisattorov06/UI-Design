# AI Instruction Block (copy-paste ready)

Create these files in the design-system. They are meant to be read by AI agents to enforce non-generic output.

## design-system.md
```markdown
# Design System Rules
- Source of truth: tokens only. Never hardcode px/colors/spacing/shadow values.
- Follow layers: primitives → semantic → component → decision tokens.
- Use OKLCH where possible; respect contrast (WCAG AA minimum).
- Prefer semantic tokens (color.text.primary) over primitives.
- Limit palette: 2–4 brand + neutrals + semantic states. Avoid rainbow.
- Spacing: use 4pt scale. No arbitrary values.
- Typography: use fluid type (clamp) and defined type scale; enforce line-height.
- Radius: constrained set; don't default to largest radius everywhere.
- Avoid generic Tailwind defaults (rounded-xl, shadow-sm) without checking decision tokens.
- One signature style per project (set via decision tokens: surface.style + density + motion.emphasis).
```

## art-direction.md
```markdown
# Art Direction Rules (Prevent Generic-ness)
- Define personality first: tone (playful/serious/technical/editorial), density (compact/normal/comfortable), surface.style (flat/soft/glass/neo-brutalist/brutalist/swiss).
- Restraint: max 1–2 signature effects. Do not combine grain+glow+3D+glass unless explicitly requested.
- Purpose > decoration: every blur/glow/grain/depth must support hierarchy or focus.
- Neo-brutalist: use hard shadows (4px 4px 0 currentColor/black), minimal radius, high contrast, bold type. Avoid soft pastels.
- Swiss: grid-first, generous whitespace, type-driven, minimal color.
- Glassmorphism 2.0: selective overlays only, low alpha, soft borders, provide solid fallback.
- Depth: use subtle shadows; avoid "floating card" everywhere.
- Color: minimal palette, high contrast; avoid overusing gradients. If gradient used, purposeful (brand accent) not decorative noise.
- Forbidden: generic pill buttons, card grids with identical soft shadows, over-rounded everywhere, default blue links without semantic mapping.
- Do: enforce grid/alignment, strong type hierarchy, consistent spacing.
- Don't: invent ad-hoc values; ignore decision tokens.
```

## motion-principles.md
```markdown
# Motion Principles (Anime.js)
- Respect prefers-reduced-motion: if reduce, skip non-essential transforms (prefer opacity/fades).
- Performance: transform/opacity only; will-change sparingly; rAF-based.
- Character: use custom eases (cubicBezier/spring) from motion tokens; avoid default ease-in-out everywhere.
- Durations: fast 80–140ms (feedback), medium 220–280ms (entrances), slow 320–420ms (narrative). Exits slightly faster than entrances.
- Choreography: stagger 20–80ms; use timeline labels. No mechanical equal steps unless justified.
- Feedback: scale 0.98–0.995, subtle; never jarring.
- Entrances: translateY max 4–8px + opacity + scale (subtly). Exit reverse but faster.
- Accessibility: avoid motion that causes dizziness; honor system settings.
- Implementation: use Anime.js v4 timelines, avoid layout reads in hot paths.
```

## llm-instructions.md (master)
```markdown
# Master LLM Instructions for Design Generation
You are generating UI for a design system with strict art direction.

MANDATORY:
1. Read tokens.json and all *-principles.md files first. Treat tokens as source of truth.
2. Determine project personality via decision tokens (density, surface.style, motion.emphasis, type.rhythm). If not specified, pick ONE coherent style, state it, and stick to it.
3. Never invent hardcoded values (px, hex, spacing). Use token references conceptually or CSS vars.
4. Enforce ONE signature aesthetic (restraint). List which signature move you're using.
5. Generate unique layouts: vary grid/spacing/rhythm; avoid generic 3-column card grids unless justified by content.
6. Typography-first: establish hierarchy before color.
7. Motion: use Anime.js v4; apply motion-principles; include reduced-motion guard.
8. Output: include do/don't for this specific design + rationale for non-generic choices.
9. Uniqueness test: if it could be shadcn/Tailwind default with no changes, revise.
10. Forbidden patterns: generic soft card everywhere, over-rounded, rainbow, decoration without purpose.

CONSTRAINTS:
- Atomic changes; match system style.
- Accessibility: WCAG AA, focus visible, reduced motion respected.
```
