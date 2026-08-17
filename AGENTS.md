# AGENTS.md

Vite + React 19 + TypeScript single-page portfolio app. No test framework, no CI, not a git repo.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — `tsc -b && vite build` (typecheck is part of build)
- `npm run lint` — **oxlint** (not ESLint); rules in `.oxlintrc.json`
- `npm run preview` — preview the production build

There are no tests. Do not run or invent a test framework.

## TypeScript conventions (enforced by tsconfig.app.json)

- `verbatimModuleSyntax`: type-only imports must use `import type`
- `erasableSyntaxOnly`: no enums, namespaces, or constructor parameter properties
- `allowImportingTsExtensions`: relative imports include the extension (e.g. `import App from './App.tsx'`)
- `noUnusedLocals` / `noUnusedParameters`: unused variables fail the build

## Structure

- Entry chain: `index.html` → `src/main.tsx` (mounts with React `StrictMode`) → `src/App.tsx`
- App is currently the Vite starter template UI; page content lives in `src/App.tsx` and styles in `src/App.css` / `src/index.css`
- Assets imported from `src/assets/` are bundled by Vite; files in `public/` (`favicon.svg`, `icons.svg`) are served at `/` and referenced by absolute path (e.g. `<use href="/icons.svg#...">`)
- `tsconfig.json` is a solution file referencing `tsconfig.app.json` (src) and `tsconfig.node.json` (vite.config.ts)
