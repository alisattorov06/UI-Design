# Motion + Anime.js (v4)

**Current version: anime.js 4.5.0** (Jun 2026, MIT, 0 deps). The starter `anime-starter.js` in this folder is already v4-native (`animate`, `createTimeline`, `stagger`, `utils` named imports) — keep it as-is.
Full comparison of the motion stack: `docs/motion-landscape.md`. Scroll recipes: `tokens/scroll-patterns.md`.

## Anime.js v4 references
- Docs: https://animejs.com/documentation/
- Easing: https://animejs.com/documentation/easings
- Timelines: https://animejs.com/documentation/timeline
- Stagger: https://animejs.com/documentation/utilities/stagger
- SVG motion path: https://animejs.com/documentation/svg/createmotionpath
- v3 → v4 migration: https://github.com/juliangarnier/anime/wiki/Migrating-from-v3-to-v4
- Reduced motion / accessibility: respect prefers-reduced-motion

## v4 Scroll module (native `onScroll()` — replaces the old "no scroll support" gap)
v4 ships a first-class Scroll module (**+4.30KB** of the 24.5KB bundle) — no third-party scroll plugin needed for basic triggers/scrubs:
- `onScroll()` as an **autoplay source**, plus a Scroll Observer API.
- Sync modes: `onScroll({ sync: true })` = scrubbing (progress follows scroll).
- Thresholds + callbacks: `onEnter`, `onEnterForward`, `onEnterBackward`, `onLeave`, `onLeaveForward`, `onLeaveBackward`, `onUpdate`, `onSyncComplete`, `onResize`.
- Smooth/eased scroll options built in.
```js
import { animate, stagger, onScroll } from 'animejs';
animate(el, { draw: '0 1', delay: stagger(40), autoplay: onScroll({ sync: true }) });
```
Caveat: there is still **no ScrollTrigger-class third-party plugin ecosystem** around anime.js — for long, heavily choreographed scroll narratives (pinning, smooth-scroll integration, split-text masking), GSAP is still the stronger tool. For reveals, scrubs, and progress-driven effects, native `onScroll()` is enough.

## GSAP vs Anime.js tradeoffs
- GSAP: extremely robust, plugin ecosystem (ScrollTrigger), great for scroll-driven/choreographed narrative; very mature. **Fully free (incl. all Club plugins — ScrollTrigger, ScrollSmoother, SplitText, MorphSVG) since Apr 30, 2025 under Webflow** — no commercial considerations: https://gsap.com/pricing
- Anime.js v4: lightweight, clean API, good for microinteractions, timelines, SVG, targets arrays. Easier to constrain/own as small lib. Native scroll primitives (`onScroll()`), but a smaller ecosystem around scroll than GSAP.

Recommendation: Anime.js for owned motion system (microinteractions, state transitions, entrances). GSAP if heavy scroll narrative needed. Add **Lenis** (not Locomotive) for smooth scrolling — see `tokens/scroll-patterns.md`; Locomotive Scroll v5 is itself built on Lenis.

## Easing notes for v4
- v4 removed string easings → use creator functions: `createSpring()`, `cubicBezier()`, `steps()`.
- `cubicSnappy: [0.25, 0.8, 0.25, 1]` in `anime-starter.js` is a bare array — **in v4 prefer the explicit `cubicBezier(0.25, 0.8, 0.25, 1)` creator** to avoid a silent fallback to a default ease.

## Easing philosophy (prevent generic "ease-in-out" everywhere)
Prefer characterful eases:
- `out(3)` / spring physics for snappy exits/feedback
- cubicBezier for custom brand feel
- spring({bounce: 0.25–0.4}) for playful touches
- avoid default linear; use purpose-driven

## Choreography rules (to avoid generic)
- Stagger with small offsets (20–80ms), not large mechanical
- Use labels on timeline (`.label('focus')`) for readable choreography
- Entrance: scale + opacity + slight translateY (max 4–8px) with out easing
- Exit: faster than entrance (entrance ~220–280ms, exit ~160–200ms)
- Feedback (click/tap): subtle scale 0.98–0.995 + short duration (80–140ms)

## Reduced motion guard
Always check `window.matchMedia('(prefers-reduced-motion: reduce)')`. Disable transforms that cause dizziness; keep opacity/fades or skip entirely.

## Performance
- Prefer transform/opacity (no layout thrashing)
- Use `will-change: transform, opacity` sparingly (remove after)
- rAF-driven (Anime.js handles), avoid layout reads in loops
- Targets: use classes/refs, avoid heavy DOM queries in hot paths

## Inspiration (motion character)
- Awwwards: https://www.awwwards.com/
- KPR: https://kpr.co/
- Resn: https://resn.co.nz/
- Active Theory: https://activetheory.net/
- Dogstudio: https://dogstudio.co/
- GSAP Club: https://gsap.com/club/
- Codrops: https://tympanus.net/codrops/
- Julien Renvoye: https://www.julienrenvoye.fr/
- Dennis Snellenberg: https://dennissnellenberg.com/
- Obys Agency: https://obys.agency/
- The Brewery: https://the-brewery.io/
- Locomotive: https://locomotivemtl.github.io/locomotive-scroll/
