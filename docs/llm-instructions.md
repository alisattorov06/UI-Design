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
2. **Determine personality FIRST**: Pick EXACTLY ONE mood archetype (`mood.archetype`: minimal|soft|expressive|brutalist|bold-neo-brutalist|editorial). Also choose decision tokens (density, surface.style, motion.emphasis). If unspecified, pick ONE coherent combination, STATE it clearly with rationale, and STICK to it.
3. **NEVER default to generic layout**: Do NOT default to "3-column feature grid / hero with centered h1 + CTA". Invent or justify a layout that fits content hierarchy (asymmetrical, 2-col with offset, editorial split, CSS Subgrid, or grid with intentional variation). Justify your layout choice.
4. Never invent hardcoded values (px, hex, spacing). Use token references conceptually or CSS vars.
5. Enforce ONE signature aesthetic (restraint). List which signature move you're using.
6. Generate unique layouts: vary grid/spacing/rhythm; avoid generic card grids unless strongly justified by content.
7. Typography-first: establish hierarchy before color.
8. Motion: use Anime.js v4; follow motion-principles (choreography, hierarchy-aware, anticipation/follow-through, reduced-motion). Prefer meaningful motion over decorative.
9. Output: include do/don't for this specific design + rationale for non-generic choices + genericness audit (defaults avoided, chosen archetype, signature move, how layout differs from shadcn defaults).
10. Uniqueness test: if it could be shadcn/Tailwind default with no changes, revise.

CONSTRAINTS:
- Atomic changes; match system style.
- Accessibility: WCAG AA, focus visible, reduced motion respected.
- **Personality enforcement**: Apply ALL choices from your selected archetype consistently. Do not mix archetypes.
```

## Structured docs beat prose

Evidence that the *format* of design-system instructions matters more than how much prose you write:

- **O'Reilly — "The design system as the control plane for AI-generated UI"** (Aug 2026): https://www.oreilly.com/radar/the-design-system-as-the-control-plane-for-ai-generated-ui — frame the design system as the control plane agents operate through, not as documentation they skim.
- **Design systems MCP** (Apr 2026): https://www.intodesignsystems.com/design-systems-mcp — **Indeed benchmark of 1,056 prompts**: **JSON beat Markdown** at equal or better accuracy. Structured metadata beats prose for agent consumption.
- **Figma finding:** "in nearly 100% of cases the prompt wins over the guidelines" — what you inject into the prompt outperforms what sits in a guidelines doc the agent may or may not read.
- **Two-file pattern**: https://www.designsystemscollective.com/design-systems-for-llm-agents-two-files-that-fix-everything-3e78b0c7427e
  - **Spec file** — tokens, components, props: pure values, no prose.
  - **Rules file** — when to use, how to use, what's forbidden.
- **Agent-facing motion docs**: Motion's free MIT AI Kit (skill + MCP via `npx motion-ai`, `https://motion.dev/docs/ai-kit`) is a working example of docs written for agents rather than humans — see `docs/motion-landscape.md` §3.

**Actionable implication for this folder:**
1. Keep the structured constraints — `tokens/tokens.json`, `docs/design-system.md` rules, mood/decision tokens — those are what actually steer output.
2. Cut prose wherever a token, enum, or rule can say it (JSON/YAML first; rationale second — the pattern Google's `DESIGN.md` uses, see `docs/design-md-format.md`).
3. Inject rules into the prompt (`spec --rules`-style) rather than relying on the agent reading a long doc.
4. Prefer machine-checkable output (lint JSON, explicit audits) over narrative self-assessment.
