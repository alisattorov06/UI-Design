# DESIGN.md — Google's design-system format for coding agents

> Compiled from primary sources, verified Oct 2026.

- **Repo:** https://github.com/google-labs-code/design.md
- **npm:** `@google/design.md`
- **Status:** **alpha**

## What it is

One file — `DESIGN.md` — that gives coding agents a **persistent design system** for a repo. Structure:

1. **YAML front-matter tokens** — colors, typography, rounded, spacing, and component tokens. Tokens can reference each other with `{colors.primary}`-style aliases.
2. **Markdown rationale** — the *why* behind the tokens, read as prose by the agent.

The split mirrors this folder's own convention: machine-readable values up top, human/agent reasoning below.

## CLI

| Command | What it does |
|---|---|
| `lint` | Runs WCAG contrast checks and emits **structured JSON** (agent-parseable, not a text report) |
| `diff` | **Token-level regression detection** — catches "someone changed the design system" between runs |
| `export --format dtcg\|css-tailwind\|json-tailwind` | Emits DTCG JSON or Tailwind CSS/JSON — connects directly to the token pipeline in `tokens/tokens-structure.md` |
| `spec --rules` | Injects the file's lint rules into agent prompts, so constraints travel with the prompt |

## Why it matters for this folder

It is currently the **closest thing to a standard for "design system as agent input"**:

- Same goal as `docs/llm-instructions.md` — persistent, structured constraints attached to the agent, instead of ad-hoc prompt prose.
- `export --format dtcg` confirms DTCG as the interchange layer (see `tokens/tokens-structure.md` § DTCG v2025.10).
- `lint` → structured JSON is the pattern recommended by `docs/llm-instructions.md` ("structured docs beat prose"): machine-checkable output beats narrative guidance.
- `spec --rules` = the same idea as this folder's `docs/prompts.md`: rules injected where the agent reads them.

## Practical takeaway

- Keep this folder's `tokens/tokens.json` DTCG-shaped so it can be exported/consumed by tooling like this.
- Prefer structured, lintable constraints (JSON/YAML) over paragraphs when adding new rules.
- Alpha software: adopt the *format pattern*, not necessarily the tool.
