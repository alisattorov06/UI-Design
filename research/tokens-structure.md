# Token Structure (W3C DTCG aligned, AI-friendly)

Goal: primitives → semantic → component → decision tokens. Keep flat/explicit for LLM consumption; avoid deep nesting. Use CSS variables + JSON (tokens.json) for tooling.

## Layering
1. Primitives (raw values) — do not use directly in components; stable, few.
2. Semantic (meaningful) — role-based (bg-surface, text-primary, border-interactive). Themeable.
3. Component (component-scoped) — only when semantic not enough; prefer semantic first.
4. Decision (contextual rules) — e.g. "input-padding-compact" driven by density; or "motion-reduced" aware. These encode personality/UX decisions.

## Recommended W3C DTCG-style JSON (minimal)
See schema references: https://www.designtokens.org/format/

Example structure:
```json
{
  "$schema": "https://www.designtokens.org/schemas/2025.10/format.json",
  "color": { "primitives": {...}, "semantic": {...} },
  "spacing": {...},
  "radius": {...},
  "typography": {...},
  "shadow": {...},
  "motion": {...},
  "border": {...},
  "z-index": {...},
  "grid": {...}
}
```

## Primitives (example)
- color: neutral, brand, accent, success/warn/error (minimal set; avoid 50-step palettes unless needed)
- dimension/spacing: 4pt scale (4,8,12,16,20,24,32,40,48,64,80,96,128) — compact but extensible
- radius: 2,4,6,8,12,16,20,24 (or 0/2/4/6/8/12/16 + "full")
- fontSize/lineHeight/letterSpacing/tracking: fluid via clamp where appropriate
- duration/easing: motion primitives

## Semantic (example keys)
- color: bg.canvas, bg.surface, bg.subtle, text.primary, text.secondary, text.tertiary, border.default, border.interactive, focus.ring, etc.
- spacing: space.layout.xs/sm/md/lg/xl/2xl; space.component.sm/md/lg
- radius: radius.sm/md/lg/xl (map to component feel)

## Component tokens (sparingly)
- button.padding, button.radius, input.height — only if multiple variants differ in non-semantic ways

## Decision tokens (force personality)
- density.compact/normal/comfortable
- elevation.strong/soft/none (shadows)
- motion.emphasis/subtle/none
- surface.style (flat/soft/glass/subtle-brutalist) — constrains look
- type.rhythm (tight/normal/loose)

## CSS variables mapping
Emit CSS custom properties: `--color-bg-surface`, `--space-md`, `--radius-md`, `--motion-duration-fast`, etc. Keep names stable.

## OKLCH + modern color
Prefer OKLCH for perceptual uniformity; provide fallbacks if needed. Keep minimal palette to avoid "generic Tailwind rainbow".

## References
- W3C DTCG: https://www.designtokens.org/
- Style Dictionary: https://amzn.github.io/style-dictionary/
- Tokens Studio: https://www.tokens.studio/
- Theo (Salesforce): https://github.com/salesforce-ux/theo
