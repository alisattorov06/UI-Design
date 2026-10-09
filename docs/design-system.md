# AI-friendly Design Systems (for LLM consumption)

## Concepts to enforce uniqueness via AI
- Token-driven design: every visual decision comes from tokens (not ad-hoc values)
- Promptable design system: encode rules in markdown (do/don't, art direction) that LLM reads
- Decision tokens: encode "personality" choices (density, surface.style, motion.emphasis) so prompts can vary them per project
- Contract-first: clear token contract (JSON) LLM can generate/extend without guessing

## Tools/philosophy
- shadcn/ui: "copy, not dependency" — composable, easy to constrain/modify. Good base to layer art direction.
- Magic Patterns / v0 / Builder.io / Lovable / Tempo Labs / 21st.dev / Quest: show how LLMs generate UI; learn their biases (overuse rounded, cards, gradients).
- Zeroheight: docs-as-source-of-truth, good for rule encoding.
- Specify / Supernova: token management + transforms.
- Style Dictionary: transform tokens to CSS/TS.
- Tokens Studio (@tokens-studio): Figma <-> tokens.
- Theo: Salesforce token tool.

## LLM consumption patterns
- Atomic tokens: color.red.500 (primitives) — avoid if LLM guesses; better semantic.
- Semantic tokens: color.text.primary — clearer intent for LLM.
- Component tokens: scoped but minimal.
- Decision tokens: force variation (e.g. surface.style=neo-brutal, density=compact) — explicitly referenced in prompts.

## How to structure for LLMs
- Put rules in plain markdown (human + LLM readable)
- Use short token names (predictable)
- Provide examples of "good" vs "bad" (do/don't)
- Include forbidden patterns list (e.g. "no rounded-2xl everywhere", "no soft shadows by default")
- Include allowed aesthetic modes + constraints
- Make token JSON minimal + explicit (not 5000 tokens)

## References
- W3C Design Tokens: https://tr.designtokens.org/format/
- Design Tokens Community Group: https://github.com/design-tokens/community-group
- Style Dictionary: https://amzn.github.io/style-dictionary/
- Tokens Studio: https://www.tokens.studio/
- shadcn/ui: https://ui.shadcn.com/
