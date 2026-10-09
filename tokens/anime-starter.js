// Anime.js v4 motion library starter
// Usage: import { motion } from './motion' (or include as module)

import { animate, createTimeline, stagger, utils } from 'animejs';

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const eases = {
  // Brand-like eases (tweak to taste)
  out: 'out(3)',
  inOut: 'inOut(2)',
  springSoft: { type: 'spring', stiffness: 300, damping: 25, mass: 1 },
  springSnappy: { type: 'spring', stiffness: 400, damping: 18, mass: 1 },
  cubicSnappy: [0.25, 0.8, 0.25, 1], // custom cubic approx
};

export const durations = {
  fast: 100,
  feedback: 120,
  medium: 240,
  exit: 180,
  slow: 360,
};

export const motion = {
  // Subtle entrance: translateY + opacity
  fadeUp: (targets, opts = {}) => {
    if (prefersReduced()) {
      return animate(targets, { opacity: [0, 1], duration: durations.fast, ease: 'linear' });
    }
    return animate(targets, {
      opacity: [0, 1],
      translateY: [8, 0],
      duration: durations.medium,
      ease: eases.out,
      ...opts,
    });
  },

  // Exit: faster, slightly up or fade
  fadeOutUp: (targets, opts = {}) => {
    if (prefersReduced()) {
      return animate(targets, { opacity: [1, 0], duration: durations.fast, ease: 'linear' });
    }
    return animate(targets, {
      opacity: [1, 0],
      translateY: [0, -4],
      duration: durations.exit,
      ease: eases.out,
      ...opts,
    });
  },

  // Feedback: subtle scale
  press: (targets, opts = {}) => {
    return animate(targets, {
      scale: [1, 0.985, 1],
      duration: durations.feedback,
      ease: eases.out,
      ...opts,
    });
  },

  // Staggered list entrance
  staggerList: (targets, opts = {}) => {
    if (prefersReduced()) {
      return animate(targets, { opacity: [0, 1], duration: durations.fast, ease: 'linear' });
    }
    return animate(targets, {
      opacity: [0, 1],
      translateY: [6, 0],
      duration: durations.medium,
      ease: eases.out,
      delay: stagger(30, { from: 'start' }),
      ...opts,
    });
  },

  // Simple timeline helper
  timeline: (steps = []) => {
    const tl = createTimeline();
    steps.forEach((step) => {
      if (step.label) tl.label(step.label);
      if (step.add) tl.add(step.add.targets, step.add.props, step.add.offset);
      if (step.call) tl.call(step.call.fn, step.call.params, step.call.offset);
    });
    return tl;
  },
};
