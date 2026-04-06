# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CleanBoard is a static admin dashboard HTML template. There is no build system, package manager, or compilation step. All pages live under `src/` and share a common stylesheet (`src/style.css`).

## Running the Project

Open `src/index.html` directly in a browser. Alternatively, use any static file server:

```bash
python3 -m http.server 8080 --directory src
# or
npx serve src
```

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main dashboard with stat widgets and notifications |
| `login.html` | Login page with social auth options |
| `signup.html` | User registration form |
| `tables.html` | Data table examples |
| `forms.html` | Inputs, checkboxes, radios, floating labels |
| `cards.html` | Stat cards, profile cards, pricing cards |
| `tabs.html` | Tab navigation components |
| `modals.html` | Modal dialog examples |
| `alerts.html` | Alert and notification components |
| `buttons.html` | Button styles and variants |
| `icons.html` | Bootstrap Icons showcase |
| `404.html` | 404 not found error page |
| `500.html` | 500 internal server error page |

## Architecture

The app is a collection of HTML files sharing a common stylesheet:

- **`src/style.css`** — Shared styles: base body, layout, sidebar, topbar, notifications, responsive breakpoint, auth page utilities (`.brand-icon`, `.divider-text`), and WCAG contrast overrides
- **Inline `<style>` blocks** — Page-specific styles only (e.g. `.icon-grid` in icons.html, `.stat-card` in cards.html); pages with no page-specific styles have no `<style>` block
- **Vanilla JS** — A small script at the bottom of each dashboard page handles the mobile sidebar toggle and page interactions
- **CDN dependencies** — Bootstrap 5.3.3 (CSS + JS) and Bootstrap Icons 1.11.3, loaded via jsDelivr

**Layout model**: Flexbox with a fixed-width sidebar (250px, dark `#1f2937`) and a flex-grow main content area. The sidebar collapses off-screen on mobile (<991px) and is toggled via a button in the topbar.

**Responsive breakpoint**: 991px — below this, the sidebar uses `transform: translateX(-100%)` and the mobile toggle button becomes visible.

## Conventions

- Common styles (layout, sidebar, topbar, notifications, auth utilities, accessibility) belong in `src/style.css`. Page-specific styles go in an inline `<style>` block in that page's HTML.
- Sidebar nav items follow the pattern: `<a class="nav-link" href="#">icon + label</a>` using Bootstrap Icon classes (`bi bi-*`).
- Color variables are defined as CSS custom properties on `:root` at the top of each page's `<style>` block.
- The forms nav link uses a Bootstrap collapse submenu (`#forms-submenu`) with `aria-expanded` and `aria-controls`. On `forms.html` the submenu is open by default (`show`) and the active link is marked with `active`.
- The topbar search input-group uses `ms-2 ms-lg-0` to add spacing from the mobile toggle button on small screens.
- Error pages (404, 500) are standalone — no sidebar, no topbar. They share the same layout structure with a centered card and a back/retry button.

## Accessibility (WCAG 2.1 Level AA)

The codebase must maintain WCAG 2.1 Level AA compliance. Key requirements:

- **Images and icons**: All `<img>` elements must have descriptive `alt` attributes. Decorative icons (e.g., `<i class="bi bi-...">` inside already-labeled buttons or links) must have `aria-hidden="true"`.
- **Buttons and interactive elements**: Buttons must have accessible names via visible text, `aria-label`, or both. Use `<button>` for interactive controls; avoid `<a>` tags for disclosure/toggle behavior.
- **Color contrast**: Text must have a contrast ratio of at least 4.5:1 on its background. `.text-muted` (#6c757d) fails on white — override to #595f66 or darker. `.divider-text` was fixed to #595f66 in `style.css`.
- **Landmarks and skip links**: Use `<main id="main-content">` for the content area. Include a skip-to-content link (`<a class="visually-hidden-focusable" href="#main-content">`) as the first focusable element in `<body>`.
- **Navigation labels**: All `<nav>` elements must have descriptive `aria-label` attributes (e.g., `"Sidebar navigation"`, `"Forms submenu"`, `"Table pagination"`).
- **Page title**: The `<title>` tag must be specific and descriptive (e.g., `"Dashboard — CleanBoard"`).
- **Notification and status elements**: Badge counters and status indicators must have associated `aria-label` to convey their purpose to screen readers.

Use the `/wcag-validation` skill to audit the HTML against these standards.
