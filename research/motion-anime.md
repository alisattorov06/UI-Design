# Motion + Anime.js (v4)

## Anime.js v4 references
- Docs: https://animejs.com/documentation/
- Easing: https://animejs.com/documentation/easings
- Timelines: https://animejs.com/documentation/timeline
- Stagger: https://animejs.com/documentation/utilities/stagger
- SVG motion path: https://animejs.com/documentation/svg/createmotionpath
- Reduced motion / accessibility: respect prefers-reduced-motion

## GSAP vs Anime.js tradeoffs
- GSAP: extremely robust, plugin ecosystem (ScrollTrigger), great for scroll-driven/choreographed narrative; very mature. **Fully free (incl. all Club plugins — ScrollTrigger, ScrollSmoother, SplitText, MorphSVG) since Apr 30, 2025 under Webflow** — no commercial considerations: https://gsap.com/pricing
- Anime.js v4: lightweight, clean API, good for microinteractions, timelines, SVG, targets arrays. Easier to constrain/own as small lib. Native scroll primitives (`onScroll()`), but a smaller ecosystem around scroll than GSAP.

Recommendation: Anime.js for owned motion system (microinteractions, state transitions, entrances). GSAP if heavy scroll narrative needed. Add **Lenis** (not Locomotive) for smooth scrolling — see `tokens/scroll-patterns.md`; Locomotive Scroll v5 is itself built on Lenis.

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
