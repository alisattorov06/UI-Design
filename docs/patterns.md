# UI Patterns

> A pattern is a battle-tested interface solution for a recurring user task.

Pattern map grouped by intent. Each entry states what it is and when to use it — pair every pattern with the [accessibility checklist](accessibility.md) and the [DO / DON'T rules](do-dont.md).

## Forms & data entry

- **Input / select / checkbox / dialog + validation** — compose from accessible primitives (`skills/shadcn/` manages shadcn components; see [`docs/design-system.md`](design-system.md) for the "copy, not dependency" philosophy). *When:* any form where correctness and recovery matter — always label, always show errors as text.
- **Validation UX** — validate on blur (not per keystroke), show one clear error per field with a suggested fix. *When:* anything the user can get wrong.

## Navigation & selection

- **Tabs** — switch between peer views inside one context; arrow-key navigable. *When:* 2–5 related views, no URL change needed.
- **Menu / sidebar / breadcrumb** — orientation and wayfinding. *When:* 3+ levels of hierarchy; sidebar for persistent app nav, breadcrumb for deep drill-down.
- **Pagination** — explicit page controls for long, static lists. *When:* server-side or large fixed datasets (not infinite feeds).
- **Command palette** — fuzzy-searchable keyboard-first command list. *When:* power-user tools with many actions; the fastest path once learned.

## Feedback & state

- **Toast** — transient, non-blocking confirmation or error. *When:* the action succeeded/failed but doesn't interrupt the current flow.
- **Skeleton** — content-shaped placeholders while loading. *When:* loads take >300 ms; avoids layout shift better than spinners.
- **Empty state** — illustration + guidance when there is no content yet. *When:* first run, zero results, or cleared lists — always include the next action.
- **Progress** — determinate or indeterminate feedback for long operations. *When:* uploads, multi-step flows, or anything over a second.
- **Errors** — inline field errors, recoverable page errors, and a fatal-error fallback. *When:* every failure path — never a silent dead end.
- **Micro-animation** — subtle transitions for feedback (hover, toggle, success). *When:* sparingly; see [`docs/motion-landscape.md`](motion-landscape.md) for engine choice and [`docs/motion-principles.md`](motion-principles.md) for reduced-motion discipline.

## Theme via tokens

- **Theme switches (light / dark / brand)** — all visual change flows through design tokens, so every pattern keeps the same look in every theme. *When:* always — manage themes through the token layers, never per-component. See [`tokens/tokens-structure.md`](tokens/tokens-structure.md) (primitives → semantic → component → decision).
- **Personality variation via decision tokens** — change `density`, `surface.style`, `motion.emphasis` and the same patterns produce a different-feeling product. *When:* rebranding or multi-product families on one token base.

> Extracted from UI-Brain (github.com/alisattorov06/UI-Brain), translated/relinked, verified Oct 2026.
