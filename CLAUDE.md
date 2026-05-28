# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static one-page marketing site for Jessica James Consulting (jessicajamesconsulting.com). No framework — plain HTML, SCSS, and vanilla JS.

## Commands

```bash
npm install        # install dependencies
npm run dev        # compile SCSS, watch for changes, and start dev server (all in one)
npm run build      # one-time SCSS compile + autoprefixer (no server, no watch)
```

The dev server opens `http://localhost:8080` and serves `./src` directly. There is no JS build step — `src/js/app.js` is served as-is.

Node version: 22 (see `.nvmrc`).

## Architecture

**Single page:** `src/index.html` — all content lives here.

**CSS pipeline:** SCSS source in `src/scss/` → compiled to `src/css/` via Dart Sass (`sass`) → autoprefixed via `postcss`. The `src/css/` directory is generated and should not be edited directly. Autoprefixer targets are set via `browserslist` in `package.json`; PostCSS config is in `postcss.config.js`.

**SCSS structure:**
- `_variables.scss` — breakpoints (`$bp-small/medium/large`), colors (`$theme: #FF0088`), Adobe Typekit font stacks (`$acumin`, `$balboa-condensed`)
- `_mixins.scss` — shared mixins; uses `@use 'variables' as v`
- `base/` — normalize, base resets, scaffolding
- `modules/` — one file per layout section (grid, header, section, footer)
- `main.scss` — entry point that `@use`s all partials; each partial declares its own dependencies

**CSS naming:** BEM-style with PascalCase blocks (e.g. `Header`, `Grid-content`, `Section-aside`, `Footer--email`).

**JS:** `src/js/app.js` fires Google Analytics events on footer contact link clicks. No bundler.

**Fonts:** Loaded from Adobe Typekit (`use.typekit.net/yze1ouk.js`).

**Deployment:** `src/` is the document root — `.htaccess` is in `src/`.
