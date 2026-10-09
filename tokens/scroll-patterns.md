# Scroll Patterns (Lenis, GSAP+Lenis, CSS scroll-driven, anime.js onScroll)

> Compiled from primary sources, verified Oct 2026.

Copy-paste recipes for scroll-driven motion. Engine comparison lives in `docs/motion-landscape.md`.

## 1. Lenis — the smooth-scroll standard

- **Links:** https://lenis.dev · https://github.com/darkroomengineering/lenis
- **Status:** v1.3.x · MIT · **<5KB** · ~16k stars · **1.7M weekly downloads**
- **Why it's the default:** used on the GTA VI site, Microsoft Design, Shopify, and much of the Awwwards circuit. It runs **on top of native scroll** — sticky positioning, anchor links, and accessibility behavior are preserved (unlike old transform-based scrollers).
- **Built in:** `respectReducedMotion` (automatically falls back to native scroll under `prefers-reduced-motion`).
- **Adapters/plugins:** React, Vue, and Framer Motion wrappers; `lenis/snap` plugin for snap points.
- **History note:** Locomotive Scroll v5 is built on Lenis — the old "use Locomotive" advice has been superseded; Lenis is now the primitive itself.

### Canonical GSAP wiring (required — do not skip)

```js
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
```

Without `ScrollTrigger.update` on scroll, triggers lag behind the smooth position; without `lagSmoothing(0)`, GSAP's ticker and Lenis drift apart after tab-switch.

### React (reduced-motion aware)

```jsx
useEffect(() => {
  const lenis = new Lenis({ respectReducedMotion: true });
  const raf = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(raf);
  return () => { gsap.ticker.remove(raf); lenis.destroy(); };
}, []);
```

## 2. GSAP + Lenis recipes

- **motionprompts.dev** — copy-paste AI prompts with the exact matching code for award-site patterns.
  - Example: https://motionprompts.dev/component/clayboan-scroll-animation — clip-path polygon morphs scrubbed by ScrollTrigger, per-character SplitText masks, non-overlapping trigger ranges.
  - Documented failure mode: **mount twice = double triggers** (React StrictMode/double-mount registers duplicate triggers → animations fire twice). Always `ScrollTrigger.getAll().forEach(t => t.kill())` on teardown, or create triggers inside a `useEffect` cleanup-safe scope.
- **Awwwards GSAP collection:** https://www.awwwards.com/websites/gsap — Jesper Landberg SOTD Sep 29 2026, Obys "Grids", Rauno Freiberg '25, Dennis Snellenberg.
- **ScrollTrigger docs:** https://gsap.com/docs/v3/Plugins/ScrollTrigger (free since Apr 2025 — see `docs/motion-landscape.md` §2).

### Scrub + pin skeleton

```js
gsap.timeline({
  scrollTrigger: {
    trigger: '.panel',
    start: 'top top',
    end: '+=100%',
    scrub: true,      // or scrub: 0.5 for smoothing
    pin: true,
  }
}).to('.panel__inner', { clipPath: 'polygon(...)' });
```

Rules that keep it from breaking:
- Give each trigger a **non-overlapping range** (`start`/`end` computed per section).
- One timeline per section rather than one giant global timeline.
- Kill triggers on unmount (double-mount → double triggers).

## 3. CSS scroll-driven animations

### Minimal `view()` reveal

```css
.reveal {
  opacity: 0;
  animation: fade-up 600ms cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
  animation-timeline: view();          /* AFTER the animation shorthand */
  animation-range: entry 10% cover 40%;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Minimal `scroll()` progress (page-level)

```css
.progress {
  transform-origin: left;
  animation: grow linear;
  animation-timeline: scroll(root block);
}
@keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
```

### `@supports` fallback strategy

```css
/* enhanced — only if the browser understands scroll timelines */
@supports (animation-timeline: scroll()) {
  .reveal {
    animation: fade-up 1ms linear;
    animation-timeline: view();
    animation-range: entry 10% cover 40%;
  }
}

/* baseline — IntersectionObserver class or simple time-based animation */
@supports not (animation-timeline: scroll()) {
  .reveal { animation: fade-up 600ms cubic-bezier(0.25,0.8,0.25,1) both; }
}
```

Notes:
- **Shorthand gotcha:** `animation-timeline` is a **reset-only value in the `animation` shorthand** — the shorthand resets it to `auto`. Declare it **after** `animation`, every time.
- Firefox historically needed a non-zero `animation-duration` (use `1ms`) to apply the animation.
- MDN reports "limited availability" while caniuse shows current Firefox support — gate on `@supports`, don't hardcode a version. Details: `docs/motion-landscape.md` §4.

## 4. anime.js v4 `onScroll()` recipe

Cross-reference: **`tokens/motion-anime.md`** (v4 Scroll module summary + tradeoffs) and `docs/motion-landscape.md` §1.

```js
import { animate, stagger, onScroll } from 'animejs';

animate('.reveal', {
  opacity: [0, 1],
  translateY: [16, 0],
  delay: stagger(40),
  duration: 600,
  autoplay: onScroll({ sync: true }),   // progress follows scroll (scrub)
});
```

- `onScroll({ sync: true })` = scrubbing; without `sync` it fires once when thresholds are crossed (`onEnter` / `onLeave` …).
- Scroll Observer callbacks: `onEnter`, `onEnterForward`, `onEnterBackward`, `onLeave`, `onLeaveForward`, `onLeaveBackward`, `onUpdate`, `onSyncComplete`, `onResize`.
- Module cost: **+4.30KB** of the 24.5KB bundle; no third-party scroll plugin ecosystem required for basic scroll triggers.
