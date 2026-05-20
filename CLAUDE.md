@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a starter template for building landing pages. The intent is to clone it (or branch from it) per landing page, replace copy, tweak the theme, and ship. Keep the foundation small and opinionated — resist adding dependencies or abstractions that aren't earning their weight for landing-page use cases.

## Stack

- Next.js 16 (App Router, Turbopack, React 19) — see AGENTS.md: APIs differ from older Next versions, consult `node_modules/next/dist/docs/` when unsure.
- TypeScript (strict)
- Tailwind CSS v4 (PostCSS plugin `@tailwindcss/postcss`, no `tailwind.config.js` — theme tokens live in `@theme` blocks inside [src/app/globals.css](src/app/globals.css))
- ESLint 9 (flat config in [eslint.config.mjs](eslint.config.mjs))

## Commands

- `npm run dev` — start dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (note: `next lint` was removed in Next 16; the script invokes `eslint` directly)

## Architecture

Landing pages are composed by stacking section components inside [src/app/page.tsx](src/app/page.tsx):

- [src/components/Container.tsx](src/components/Container.tsx) — shared max-width wrapper. Every section uses this so horizontal padding and width caps stay consistent.
- [src/components/sections/](src/components/sections/) — one file per section (`Hero`, `Features`, `CTA`, `Footer`). Each is self-contained: copy, styles, and any local data live in the same file.

When adding a new section, create `src/components/sections/<Name>.tsx`, wrap its content in `<Container>`, and add it to `page.tsx`. Sections are intentionally not behind a barrel index — explicit imports keep the page file readable as a table of contents.

### Styling conventions

- Tailwind v4 has no config file. Add CSS variables and `@theme` tokens in [src/app/globals.css](src/app/globals.css); the `--font-sans` / `--font-mono` vars are wired to `next/font` in [src/app/layout.tsx](src/app/layout.tsx).
- Dark mode uses `prefers-color-scheme` (CSS variables flip in `globals.css`). Use `dark:` variants on utility classes for component-level overrides.
- Neutral palette: `zinc-*` with black/white accents. If a design needs a brand color, add it as a CSS variable in `globals.css` rather than hard-coding hex values across components.

### Path alias

`@/*` maps to `src/*` (configured in [tsconfig.json](tsconfig.json)). Use it for cross-directory imports; relative paths are fine within `src/components/`.
