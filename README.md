# Supportia Static Site

This project contains the static assets for Supportia's marketing presence. It includes the main top page (`index-static.html`), individual landing pages (`link/lp1-opening-support.html`, `link/lp2-gajumaru-nurse.html`), shared imagery, and build tooling for the Vite/Tailwind pipeline in `src/`.

## Repository Layout
- `index-static.html` — exported top page with home + contact views controlled by `showPage(...)`.
- `link/lp1-opening-support.html` — LP for the開業支援 program.
- `link/lp2-gajumaru-nurse.html` — LP for the community offering; shares assets under `image/`.
- `src/` — source code for the SPA version (Vite + React + Tailwind).
- `image/`, `link/`, `事業内容/`, `問い合わせ先情報/` — static resources and reference documents.

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Vite dev server (served at http://localhost:5173 by default):
   ```bash
   npm run dev
   ```
3. Build static assets:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

Static HTML exports (e.g., `index-static.html`, files under `link/`) can be opened directly in a browser for quick verification without running the dev server.

## Editing Tips
- Prefer editing the source components in `src/` when possible, then rebuild to update `index-static.html` or LP exports.
- Use `rg`/`ripgrep` for searching text within this repo (already available in the CLI environment).
- Keep the CTA links in LPs pointing to the official channels (`https://lin.ee/4UoSWJa`) and ensure `rel="noopener noreferrer"` is present for any `_blank` links.

## Deployment
Deployment is handled by copying the built `dist/` output (or the curated static HTML files) to the production hosting environment. Coordinate with the Supportia ops team to align on the exact upload process.
# supportia-official
