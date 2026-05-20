# allatmenhely

A landing-page starter template. Clone or branch per landing page, swap copy, tweak the theme, ship.

## Stack

- Next.js 16 (App Router, Turbopack, React 19)
- TypeScript (strict)
- Tailwind CSS v4 (config-less, theme tokens in `src/app/globals.css`)
- ESLint 9 (flat config)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — dev server with Turbopack
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project layout

- `src/app/page.tsx` — composes the landing page by stacking section components
- `src/app/layout.tsx` — root layout, fonts, metadata
- `src/app/globals.css` — Tailwind v4 theme tokens and CSS variables
- `src/components/Container.tsx` — shared max-width wrapper used by every section
- `src/components/sections/` — one file per section (`Hero`, `Features`, `CTA`, `Footer`)

To add a section, create `src/components/sections/<Name>.tsx`, wrap its content in `<Container>`, and import it into `page.tsx`.

## Styling

Theme tokens and CSS variables live in `src/app/globals.css` under `@theme` blocks — there is no `tailwind.config.js`. Dark mode follows `prefers-color-scheme`; use `dark:` variants for component-level overrides. For brand colors, add a CSS variable rather than hard-coding hex values.

## Path alias

`@/*` maps to `src/*` (see `tsconfig.json`).
