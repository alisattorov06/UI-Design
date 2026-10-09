# Motion Landscape (Oct 2026)

> Compiled from primary sources, verified Oct 2026.

Comparison of the JS/CSS motion stack available today, so a project can pick the right engine before reading the recipes in `tokens/scroll-patterns.md`.

## 1. anime.js v4.5.0

- **Status:** v4.5.0 released Jun 2026 · MIT · 0 dependencies · ~73k GitHub stars · docs: https://animejs.com/documentation
- **Core API:** `animate()`, `createTimeline()`, `createDraggable()`, `createScope()`, `stagger()`, `utils`, plus `waapi` — a ~3KB variant that drives the Web Animations API instead of the rAF engine.
- **First-class Scroll module** — this is the big v4 change: a native scroll trigger/scrub layer ships in core.
  - Size: **+4.30 KB** on top of the **24.5 KB** full bundle.
  - Entry point: `onScroll()` used as an **autoplay source**, plus the **Scroll Observer API**.
  - **Sync modes:** `sync: true` gives ScrollTrigger-style scrubbing (animation progress follows scroll progress).
  - **Thresholds:** declare at what visibility/position events fire.
  - **Callbacks:** `onEnter`, `onEnterForward`, `onEnterBackward`, `onLeave`, `onLeaveForward`, `onLeaveBackward`, `onUpdate`, `onSyncComplete`, `onResize`.
  - **Scroll options:** smooth/eased scrolling without pulling in a separate smooth-scroll library.
  - Example:

    ```js
    animate(el, {
      draw: '0 1',
      delay: stagger(40),
      autoplay: onScroll({ sync: true })
    });
    ```

- **v3 → v4 migration:** https://github.com/juliangarnier/anime/wiki/Migrating-from-v3-to-v4
  - Named imports replace the default export: `anime()` → `animate()`.
  - String easings removed → creator functions: `createSpring()`, `cubicBezier()`, `steps()`.
  - Per-property params (each property can carry its own duration/delay/easing/composition).
  - New `composition: 'blend'` for overlapping value composition.
- **What it is not:** there is no third-party plugin ecosystem around it comparable to GSAP's — see "Decision matrix".

## 2. GSAP 3.13+ — fully free

- **Status:** **free for everyone, including commercial use, since Apr 30, 2025**, after Webflow acquired GreenSock.
  - Pricing page: https://gsap.com/pricing
  - Announcement: https://webflow.com/blog/gsap-becomes-free
- **What became free:** every formerly paid Club plugin — **ScrollTrigger**, **ScrollSmoother**, **SplitText** (rewritten with screen-reader accessibility built in), **MorphSVG**, and the rest of the bonus plugins.
- **Scroll docs:** https://gsap.com/docs/v3/Plugins/ScrollTrigger
- **Implication:** the historic "GSAP = commercial risk" argument is obsolete. GSAP is now a zero-cost, battle-tested option with the richest scroll/choreography plugin ecosystem; see `tokens/motion-anime.md` for updated tradeoffs.

## 3. Motion (framer-motion successor)

- **Status:** v13.x · MIT · **30M+ monthly npm downloads** · https://motion.dev/docs
- **Engine:** hybrid — Web Animations API + `ScrollTimeline` where the platform supports it, JS fallback otherwise.
- **React-facing API:** `whileInView`, `useScroll`, layout animations (shared layout / `layout` prop), springs.
- **Free MIT AI Kit** — official agent-facing docs:
  - Docs: https://motion.dev/docs/ai-kit
  - Source: https://github.com/motiondivision/ai-kit
  - Install: `npx motion-ai`
  - Contents: official agent skill + MCP server, handwritten best practices, and CSS `linear()` spring generation (compile a spring into a plain CSS easing function — no runtime).
- **Implication:** the reference implementation for "design system as agent input" in the motion space; cross-referenced from `docs/llm-instructions.md`.

## 4. CSS scroll-driven animations

- **Spec:** https://www.w3.org/TR/scroll-animations-1/
- **MDN:** https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline
- **API:** `animation-timeline: scroll()` (scroll progress) and `view()` (element visibility progress), plus named `scroll-timeline-*` / `view-timeline-*` and `animation-range`.
- **Support (as of Oct 2026):**
  - Chrome/Edge **115+** (2023)
  - Safari **26+** (2025)
  - Firefox landed **2025–26**; caniuse currently lists `animation-timeline: scroll()` supported from **Firefox 160** (earlier builds needed the `layout.css.scroll-driven-animation.enabled` flag). **Re-verify at https://caniuse.com/css-animation-timeline before publishing a version number.**
  - Compat-note discrepancy: MDN's table still says **"limited availability"** (not Baseline) while caniuse shows current Firefox supported — treat MDN as the conservative signal and gate on `@supports`.
- **Why use it:** zero-JS, compositing-friendly, main-thread-free scroll effects — with an `@supports` fallback for older browsers.
- **Gotcha:** `animation-timeline` is a **reset-only value in the `animation` shorthand** — the shorthand resets it to `auto`. Always declare `animation-timeline` **after** `animation`:

  ```css
  .reveal {
    animation: fade-in 1ms linear;   /* shorthand resets animation-timeline */
    animation-timeline: view();      /* must come AFTER */
    animation-range: entry 10% cover 40%;
  }
  ```

- Recipes: `tokens/scroll-patterns.md` §3.

## 5. Decision matrix

| Need | Pick | Why |
|---|---|---|
| Owned, small motion system: microinteractions, state transitions, entrances, SVG | **anime.js v4** | 0 deps, ~24.5KB, clean API, native `onScroll()` for light scroll work, easy to constrain/own |
| Long scroll-driven narrative, many choreographed scenes, split-text masking, path morphs | **GSAP 3.13+ ScrollTrigger (+ Lenis)** | Richest scroll plugin set, free since 2025, huge example corpus (see `tokens/scroll-patterns.md`) |
| React product UI: entrances, layout transitions, gestures | **Motion (React)** | `whileInView`/`useScroll`/layout animations are React-idiomatic; AI Kit for agent workflows |
| Simple reveal-on-scroll / progress that must work without JS | **CSS scroll-driven animations** | Zero-JS, main-thread-free; wrap in `@supports`, declare after the `animation` shorthand |
| Heavy smooth-scroll + snap + full-page feel | **Lenis** (any engine) | Runs on native scroll, <5KB, adapters — see `tokens/scroll-patterns.md` |

Rule of thumb: **pick one JS engine per project** (anime.js *or* GSAP *or* Motion) and add CSS scroll-driven only for the effects that don't need JS, plus Lenis if smooth scrolling is wanted. Mixing engines on the same element causes competing transform writers.
