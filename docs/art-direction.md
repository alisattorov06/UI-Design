# Cutting-edge Aesthetics (use tastefully, avoid generic)

## Principles for "tasteful without generic"
- Restraint: 1–2 signature moves max per project (e.g. grain + tight type, or neo-brutalist + generous whitespace). Don't stack everything.
- Purpose: every effect must support hierarchy/focus, not decoration for its own sake.
- Subtlety: prefer low opacity, small radius/blur shifts, tight easing.
- Contrast: OKLCH/modern color + accessible contrast.
- Material honesty: avoid "glass everything" — glassmorphism 2.0 means selective, with proper backdrop-filter fallbacks.

## Styles

## Mood archetypes (force personality selection)
To prevent "default corporate" AI output, explicitly pick ONE mood archetype per project and apply its tokens consistently:

| Archetype | Vibe | Color Strategy | Type | Spacing | Radius | Depth | Motion |
|---|---|---|---|---|---|---|---|
| **Minimal** | Editorial, refined, timeless | 1 brand + generous neutrals, high contrast | Type-driven (Swiss), generous tracking optional | Comfortable/normal, strict 4pt grid | none–sm (0–2px) | Flat/subtly soft | Subtly expressive or none; fades + small translateY |
| **Soft** | Friendly, human, approachable | Warm neutrals, lower chroma, OKLCH harmony | Readable, slightly softer weights | Comfortable | md (4–6px) | Soft, low elevation | Gentle spring-soft, 20–40ms stagger |
| **Expressive** | Bold, playful, brand-forward | Accent-forward, higher chroma allowed sparingly | Display-forward, bold weights | Normal | lg (6–8px) | Selective depth | Expressive (spring-snappy), 30–60ms stagger, choreographed |
| **Brutalist** | Raw, structural, unapologetic | High-contrast B&W + 1 accent max | Heavy display, minimal leading | Compact/normal | none (0px) | Hard shadows, no soft blur | Snappy, purposeful; avoid bouncy loops |
| **Bold/Neo-brutalist** | Graphic, punchy, memorable | High contrast, 1–2 colors max | Bold, tight tracking | Normal | none–sm (0–2px) | Hard shadows (4px 4px 0 currentColor/black) | Snappy feedback (scale 0.98), fast durations |
| **Editorial** | Premium, literary, content-first | Monochromatic + 1 accent | Serif for headings optional, high x-height | Comfortable, generous whitespace | none | Flat, strong grid | Minimal, opacity-focused, no decorative loops |

**Rule**: Pick exactly ONE archetype. Do not blend 3+ archetypes. If unspecified, state your chosen archetype + rationale in output.

## Anti-generic enforcement (hard rules)
- **Layout variety**: NEVER default to a generic "3-column feature grid + centered h1 hero + CTA block". Vary grid (asymmetrical, 2-col with offset, CSS Subgrid, editorial split). Justify layout choice against content hierarchy.
- **Decision-token driven**: Every visual decision (radius, shadow/depth, density, surface.style) MUST map to `decision.*` tokens. If tempted to hardcode `rounded-xl shadow-sm`, reject and choose via tokens/archetype.
- **One signature move**: Max 1 signature effect per project (grain at 2–4% opacity OR hard shadows OR selective glass OR 3D microinteraction ≤ 4°). Document it.
- **Personality before polish**: Determine archetype + surface.style + density + motion.emphasis BEFORE writing components.
- **Genericness audit required**: For any generated page, explicitly list: (1) what defaults avoided, (2) chosen archetype, (3) signature move, (4) how layout differs from shadcn/Tailwind defaults.

- Neo-brutalism: hard shadows (e.g. 4px 4px 0 currentColor/black), 0–2px radius, high-contrast, bold type. Avoid: pastel overload.
- Brutalist: raw/structural, minimal, strong hierarchy. Swiss influence pairs well.
- Swiss/International Typographic Style: grid discipline, generous whitespace, sans-serif, scale-driven, minimal color.
- Glassmorphism 2.0: subtle blur (8–12px), low alpha bg, soft borders, selective (overlays/modals), respect reduced motion.
- Claymorphism: soft inner shadows, rounded, warm palette — easy to overuse; use sparingly.
- Soft UI: subtle gradients, minimal depth — can feel generic; better with art direction twist.

## Modern techniques
- Grid systems (CSS Grid + Subgrid): enforce vertical rhythm/alignment. Subgrid helps cards align across rows.
- Fluid type (clamp): `clamp(1rem, 1.2vw + 0.5rem, 2rem)` for responsive rhythm without breakpoints.
- OKLCH: perceptually uniform, easier to generate harmonious palettes programmatically.
- 3D microinteractions: translateZ/rotateY on hover with perspective; keep small (2–6deg).
- Shader motion: tasteful (background noise/shapes) via CSS @property + small canvases or GLSL — use only if performance OK.
- Grain/noise: SVG/PNG data URI at very low opacity (2–8%); multiply overlay; avoid heavy.
- Blur/glow/depth: backdrop-filter for glass, box-shadow for depth; glow only for focus/interactive states.

## Avoiding genericness checklist
- [ ] Don't use default Tailwind "rounded-xl shadow-sm" everywhere
- [ ] Enforce type scale + spacing scale (4pt) consistently
- [ ] Limit color palette (2–4 brand + neutrals + semantic)
- [ ] Signature motion (custom ease) applied consistently
- [ ] One accent effect (grain OR glow OR 3D) — not all
- [ ] Stronger hierarchy than "card grid" defaults
