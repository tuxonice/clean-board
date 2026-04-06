# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Clean-Board is a static admin dashboard HTML template. There is no build system, package manager, or compilation step — the entire application is a single file at `src/index.html`.

## Running the Project

Open `src/index.html` directly in a browser. Alternatively, use any static file server:

```bash
python3 -m http.server 8080 --directory src
# or
npx serve src
```

## Architecture

The app is a single HTML file with:

- **Inline CSS** — All styles are in a `<style>` block within the `<head>`
- **Vanilla JS** — A small script at the bottom handles the mobile sidebar toggle
- **CDN dependencies** — Bootstrap 5.3.3 (CSS + JS) and Bootstrap Icons 1.11.3, loaded via jsDelivr

**Layout model**: Flexbox with a fixed-width sidebar (250px, dark `#1f2937`) and a flex-grow main content area. The sidebar collapses off-screen on mobile (<991px) and is toggled via a button in the topbar.

**Responsive breakpoint**: 991px — below this, the sidebar uses `transform: translateX(-100%)` and the mobile toggle button becomes visible.

## Conventions

- Keep styles inline in the `<style>` block; do not introduce external CSS files unless refactoring the project structure significantly.
- Sidebar nav items follow the pattern: `<a class="nav-link" href="#">icon + label</a>` using Bootstrap Icon classes (`bi bi-*`).
- Color variables are defined as CSS custom properties on `:root` at the top of the style block.