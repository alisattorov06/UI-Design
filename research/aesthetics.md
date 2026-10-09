# Cutting-edge Aesthetics (use tastefully, avoid generic)

## Principles for "tasteful without generic"
- Restraint: 1–2 signature moves max per project (e.g. grain + tight type, or neo-brutalist + generous whitespace). Don't stack everything.
- Purpose: every effect must support hierarchy/focus, not decoration for its own sake.
- Subtlety: prefer low opacity, small radius/blur shifts, tight easing.
- Contrast: OKLCH/modern color + accessible contrast.
- Material honesty: avoid "glass everything" — glassmorphism 2.0 means selective, with proper backdrop-filter fallbacks.

## Styles
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
