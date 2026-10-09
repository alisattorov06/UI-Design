# Accessibility

> Accessibility is the practice of building interfaces that work for every user — through keyboard, screen reader, focus state, contrast, and semantic HTML.

## The 5-point a11y checklist

Run this checklist before shipping any UI. Each point is a one-line rule, with the reason it matters.

1. **Tab / Shift+Tab / Escape all work** — every interactive element is reachable and escapable by keyboard alone. *Why:* keyboard-only users (motor impairments, power users) cannot operate anything that requires a pointer.
2. **Modals trap focus** — when a modal opens, focus moves into it; when it closes, focus returns to the trigger. *Why:* focus that escapes a modal leaves keyboard and screen-reader users stranded in the background page.
3. **Every input has a label and an error message** — inputs carry a visible label and errors are announced as text, not just styled. *Why:* screen readers need programmatic labels, and sighted users need to know what went wrong.
4. **State is shown by more than color** — selected, error, disabled, and success states also use icons, borders, or text. *Why:* roughly 1 in 12 men have some color-vision deficiency; color-only signaling is invisible to them.
5. **Motion never exhausts** — animation respects `prefers-reduced-motion`. *Why:* vestibular disorders make large parallax, zoom, and movement physically nauseating; reduced-motion is the WCAG-safe default.

## Where this fits in this repo

- Full DO / DON'T rules incl. WCAG AA `focus-visible` rings and the `accessibility-audit` procedure step: [`docs/do-dont.md`](do-dont.md).
- Accessibility summary in the project overview: [`README.md`](README.md#accessibility).
- Reduced-motion is enforced in the motion starter and recipes: [`docs/motion-principles.md`](motion-principles.md).

> Extracted from UI-Brain (github.com/alisattorov06/UI-Brain), translated/relinked, verified Oct 2026.
