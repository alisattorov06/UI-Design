# DO / DON'T Checklist

> Companion checklist distilled from docs/prompts.md, tokens/motion-anime.md, tokens/scroll-patterns.md, docs/llm-instructions.md (verified Oct 2026).

## DO

### Visual
- Give every gradient / blur / grain / glow a stated purpose (purpose > decoration).
- Take the typeface from the project's type tokens; build hierarchy with fluid type (`clamp`) before color.
- Pick EXACTLY ONE mood archetype and ONE signature move (grain 2–4% OR hard shadows OR 3D microinteraction ≤ 4°) — declare it with rationale.
- Justify each non-obvious choice and write the "genericness audit" (defaults avoided, how it differs from shadcn/Tailwind).
- Run the procedure workflow: `generate-variations` → `ai-slop-check` → `hierarchy-rhythm-review` → `interaction-states-pass` → `accessibility-audit`.
- Ship every component with hover / focus / active / disabled / loading states and WCAG AA `focus-visible`.

### Motion
- Respect `prefers-reduced-motion` — MotionConfig `reducedMotion="user"`, Lenis `respectReducedMotion: true`; keep fades, skip dizziness-inducing transforms.
- Wire Lenis ↔ ScrollTrigger canonically: `lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker.add((t) => lenis.raf(t * 1000))` + `gsap.ticker.lagSmoothing(0)`.
- Declare `animation-timeline` AFTER the `animation` shorthand (the shorthand resets it to `auto`).
- Use anime.js v4 creator easings (`cubicBezier()`, `createSpring()`, `steps()`), stagger 20–80ms, timeline labels for readable choreography.
- Animate transform/opacity only; keep `will-change` for the animation's lifetime, then remove it.

### Tokens & docs
- Keep constraints structured — JSON/spec/enum beats prose for agents (Indeed: 1,056 prompts, JSON beat Markdown).
- Use tokens only: no hardcoded px/colors/shadows/radii; 4pt spacing scale; constrained radius set.
- Emit machine-checkable output (lint JSON, explicit audits) instead of narrative self-assessment.

## DON'T

### Visual
- Gradients everywhere (especially purple/blue AI gradients) — a gradient needs a stated purpose.
- Emoji as decoration — no emoji icons/ornaments in UI chrome.
- Inter everywhere — never fall back to the default UI sans; typeface comes from type tokens.
- Rounded card with a left border as a generic "callout" — replace with a real, art-directed pattern.
- Default `rounded-xl`/`shadow-sm`, identical repeated card grids, or the generic "3-col feature grid + centered h1 + CTA".

### Motion
- Don't mount the same scroll component twice (React StrictMode/double-mount) — duplicate triggers fire animations twice; kill triggers on teardown.
- Don't use bare-array easings in anime.js v4 (`cubicSnappy: [0.25, 0.8, 0.25, 1]`) — use `cubicBezier(0.25, 0.8, 0.25, 1)` to avoid a silent fallback.
- Don't default to generic `ease-in-out` everywhere or mechanical equal stagger steps — use characterful eases.
- Don't animate layout properties or read layout in hot loops (layout thrashing).

### Tokens & docs
- Don't bury hard constraints in prose paragraphs — agents skim long docs; put rules in tokens/spec/rules files.
- Don't invent ad-hoc values or mix mood archetypes — pick one coherent combination and stick to it.
- Don't rely on the agent reading a guideline doc instead of injecting the rules into the prompt.
