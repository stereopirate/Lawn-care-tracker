# CLAUDE.md — Lawn Care Tracker (Easy Green)

This file provides context, conventions, and development guidance for AI assistants working on this codebase.

---

## Project Overview

**Easy Green** is a research-backed lawn care tracking Progressive Web App (PWA). It is entirely client-side — no backend, no build step, no npm. The app runs directly in the browser using CDN-loaded dependencies.

- **App name**: Easy Green – Your Lawn Care Made Simple
- **Primary file**: `index.html` (~2,440 lines, contains all React app logic)
- **Theme color**: `#367C2B` (forest green)
- **Target users**: Homeowners tracking lawn maintenance by grass type and USDA hardiness zone

---

## Architecture

### No Build Step

This project has **no package.json, no webpack, no TypeScript, no npm**. All dependencies are loaded via CDN at runtime:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
```

React JSX is transpiled in-browser by Babel Standalone via `<script type="text/babel">`.

### File Structure

```
Lawn-care-tracker/
├── index.html              # Main app — all React components, state, and UI (~2,440 lines)
├── grass-programs.js       # Grass maintenance program schedules by type and zone (276 lines)
├── v4-new-components.js    # Dashboard and statistics components (441 lines, inserted at ~line 1669)
├── service-worker.js       # PWA offline caching (53 lines)
├── manifest.json           # PWA manifest (app name, icons, theme)
├── about.html              # Static informational page
├── logo.png                # App logo
├── coach-icon.png          # Coach mascot (summer)
├── coach-winter.png        # Coach mascot (winter variant)
└── activity-*.png          # Activity type icons (mowing, fertilizer, trimming, watering, seeding, general)
```

### Key Data Structures (all defined in `index.html`)

| Constant | Purpose |
|---|---|
| `PRODUCT_DATABASE` | 75+ mowers (walk-behind, riding, zero-turn), 10 spreaders, 10 trimmers, fertilizers, seeds |
| `TREATMENT_PRODUCTS` | Pre/post-emergent, fungicide, insecticide, soil amendments (5 each) |
| `GRASS_INFO` | Grass type metadata: mow height, water needs, soil pH, zone notes, sources |
| `RESEARCH_SOURCES` | 19 university extension services used for citation badges |
| `ACTIVITY_TYPES` | mowing, fertilizer, trimming, watering, seeding, aeration, maintenance |

`grassPrograms` is defined in `grass-programs.js` and loaded before the main script tag.

---

## React Component Conventions

- **All components are functional** with React hooks (`useState`, `useEffect`, `useRef`)
- **No React Router** — navigation is purely state-driven (a `currentView` state variable)
- **No Context or Redux** — state is managed locally and passed as props
- Components are defined inline inside `index.html`'s `<script type="text/babel">` block
- `v4-new-components.js` contains the `Dashboard` component (to be inserted at ~line 1669)

### Citation System

A key UI pattern is the `CitationBadge` component — a small circular `i` button that opens a popup showing university extension sources for a given claim:

```jsx
<CitationBadge sources={[{ name: 'Penn State Extension', url: '...', topic: 'Tall Fescue' }]} label="mow height" />
```

The popup uses `position: fixed` centered on screen (not a portal) to ensure reliable mobile behavior. Do not replace this with tooltip/hover approaches — they are broken on mobile.

---

## Styling Conventions

- **Tailwind CSS utility classes** for all layout and spacing (no custom CSS framework)
- **Inline styles** used for dynamic values or precise overrides
- **Custom CSS** at top of `index.html` `<style>` block for animations and cite-btn/cite-popup styles

### Color Palette

| Use | Value |
|---|---|
| Primary green | `#367C2B` |
| Mowing activity | `#367C2B` |
| Fertilizer activity | `#F97316` (orange) |
| Trimming activity | `#10B981` (emerald) |
| Watering activity | `#3B82F6` (blue) |
| Seeding activity | `#92400E` (brown) |
| Aeration activity | `#8B5CF6` (purple) |
| Maintenance activity | `#6B7280` (gray) |

### Animation Classes

Defined in `<style>` block at top of `index.html`:
- `.animate-fade-in` — fade + slide up (0.3s)
- `.animate-scale-in` — scale from 0.95 (0.25s)
- `.card-hover` — scale on `:active`
- `.btn-press` — scale + opacity on `:active`
- `.menu-slide` — fade + slide (0.2s)

---

## Naming Conventions

- **Variables/functions**: `camelCase`
- **Constants/databases**: `UPPER_SNAKE_CASE` (e.g., `PRODUCT_DATABASE`, `ACTIVITY_TYPES`)
- **Product IDs**: prefixed by category — `wb1`–`wb25` (walk-behind), `rd1`–`rd25` (riding), `zt1`–`zt25` (zero-turn), `sp1`–`sp10` (spreaders), `t1`–`t10` (trimmers), `f1`–`f10` (fertilizers), `s1`–`s10` (seeds)
- **Grass type keys**: kebab-case (e.g., `tall-fescue`, `kentucky-bluegrass`)

---

## Data Storage

All user data is persisted in **browser LocalStorage**. There is no backend, database, or server-side storage of any kind. The app is fully offline-capable via the service worker after first load.

---

## PWA / Service Worker

- Cache name: `easy-green-v1`
- Caches: `/`, `/index.html`, `/manifest.json`, and all CDN script URLs
- Strategy: cache-first with network fallback
- **When updating CDN versions**, bump `CACHE_NAME` in `service-worker.js` to invalidate old caches

---

## Views / Navigation

The app uses a `currentView` state variable to switch between views — there is no URL routing:

| View | Description |
|---|---|
| `home` | Coach mascot, activity calendar, quick-log buttons |
| `dashboard` | Stats, monthly chart, activity breakdown (in `v4-new-components.js`) |
| `program` | Full Year Program — grass-type-specific monthly maintenance schedule |
| `addActivity` | Activity logging form with dynamic fields per activity type |
| `history` | Chronological activity log |
| `equipment` | Equipment selector and maintenance tracker |
| `products` | Product guide / comparison |

---

## Development Workflow

Since there is no build step, development is direct file editing:

1. Edit `index.html`, `grass-programs.js`, or `v4-new-components.js`
2. Open `index.html` in a browser (or serve via any static file server)
3. Hard-refresh to pick up changes (Ctrl+Shift+R / Cmd+Shift+R)
4. Test on both desktop and mobile viewport sizes

**No linter, formatter, or test runner is configured.** Testing is manual via browser.

### Serving Locally

Any static file server works. Examples:
```bash
python3 -m http.server 8080
npx serve .
```

---

## Important Constraints

- **Do not introduce a build step** (webpack, Vite, etc.) without explicit instruction — this is intentional
- **Do not add npm** or a `package.json` — the CDN approach is intentional for zero-dependency deployment
- **Do not use React Router** — view navigation is state-based
- **Mobile-first**: All UI changes must be tested at mobile viewport. Citation tooltips must use the fixed-center popup approach, not hover-based tooltips
- **All lawn care recommendations must cite sources** from `RESEARCH_SOURCES` — do not add uncited claims
- **Grass program data** is authoritative and based on university extension research — do not alter schedules without sourced justification

---

## Git Workflow

Branch naming follows the pattern: `claude/<description>-<id>`

Recent PRs show the pattern of one focused change per PR with a descriptive commit message. Commit messages use imperative present tense (e.g., "Fix citation tooltips on mobile", "Add citation system with source tooltips").

---

## Research Sources

All recommendations in the app cite one or more of 19 university extension services tracked in `RESEARCH_SOURCES`. When adding new lawn care content, source it from:
- Penn State Extension
- University of Georgia Extension
- Clemson Cooperative Extension
- NC State Extension
- University of Minnesota Extension
- Ohio State Extension
- Purdue Extension
- Virginia Cooperative Extension
- (and others listed in `RESEARCH_SOURCES` in `index.html`)
