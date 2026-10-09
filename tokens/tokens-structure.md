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

## W3C DTCG Format Module v2025.10 (first stable, Oct 2025)
- Spec: https://www.designtokens.org/TR/2025.10/format
- First **stable** version of the Design Tokens Community Group format (Oct 2025).
- Core syntax: `$value` (the data), `$type` (the token type), `$description` (rationale).
- **Group-level `$type` inheritance** — declare `$type` once on a group; children inherit it (less boilerplate).
- **Aliases:** `{token.path}` references, resolved at build time.
- **Structured color objects:** colors are objects (color space + components), not strings — **14 color spaces including `oklch`**, so a token keeps its space instead of collapsing to hex.
- Adoption: Figma, Penpot, Sketch, Tokens Studio, Style Dictionary, Terrazzo.
- Status caveat: still a **Community Group report, not a W3C Standards Track** publication — treat as the de-facto standard, not a finalized W3C Recommendation.

## Style Dictionary v4 / v5
- Docs: https://amzn.github.io/style-dictionary/ · DTCG notes: https://styledictionary.com/info/dtcg/
- **v4:** first-class DTCG support — reads `$value`/`$type` natively, plus a `convertToDTCG` migration for legacy (non-`$value`) token files.
- **v5.x:** transforms for the DTCG 2025.10 **structured color** format — can output `oklch`/`oklab` directly and generate hex fallbacks.
- **Why it matters here:** its transform catalog is effectively a **checklist of token metadata that must survive all the way to code** — color space, unit, alias link, description, dimension type. If a transform can't express it, the pipeline is dropping information.
- Practical rule: keep `tokens.json` DTCG-shaped (`$value`/`$type`/`{alias}`) so this folder stays export-compatible (also see `docs/design-md-format.md` — Google's `export --format dtcg`).

## References
- W3C DTCG: https://www.designtokens.org/
- DTCG Format Module v2025.10: https://www.designtokens.org/TR/2025.10/format
- Style Dictionary: https://amzn.github.io/style-dictionary/ (DTCG: https://styledictionary.com/info/dtcg/)
- Tokens Studio: https://www.tokens.studio/
- Theo (Salesforce): https://github.com/salesforce-ux/theo

### Practical questions

- Need the same brand style across multiple products? → create a token.
- Need dark mode? → define colors as semantic tokens.
- Moving from one library to another? → first separate token names, then replace components.

See also: [`docs/decision-guide.md`](docs/decision-guide.md).
