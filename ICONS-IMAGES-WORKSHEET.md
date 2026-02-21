# Icons & Images Replacement Worksheet
## Yardstick – Lawn Care Tracker

Use this checklist to track replacements as you swap in a new icon set.
**Legend:** `[ ]` = not yet replaced &nbsp;|&nbsp; `[x]` = replaced

---

## SECTION 1 — IMAGE FILES (on disk)

These are actual image files sitting in the project root.

| # | File | Current Use / Location | Replaced? |
|---|------|------------------------|-----------|
| 1 | `logo.svg` | App header — displayed as the Yardstick brand logo (h-9 w-9) next to the "Yardstick" wordmark | `[ ]` |
| 2 | `logo.png` | Backup/alternate logo on disk (not currently referenced in HTML, but present) | `[ ]` |
| 3 | `coach-icon.png` | On disk — not yet referenced in active HTML; intended for the AI lawn coach avatar | `[ ]` |
| 4 | `coach-winter.png` | On disk — not yet referenced in active HTML; seasonal coach variant | `[ ]` |
| 5 | `activity-mowing.png` | On disk — not yet referenced in active HTML; activity card image for Mowing | `[ ]` |
| 6 | `activity-fertilizer.png` | On disk — not yet referenced in active HTML; activity card image for Fertilizer & Treatments | `[ ]` |
| 7 | `activity-trimming.png` | On disk — not yet referenced in active HTML; activity card image for Trimming Beds | `[ ]` |
| 8 | `activity-watering.png` | On disk — not yet referenced in active HTML; activity card image for Watering | `[ ]` |
| 9 | `activity-seeding.png` | On disk — not yet referenced in active HTML; activity card image for Seeding/Overseeding | `[ ]` |
| 10 | `activity-general.png` | On disk — not yet referenced in active HTML; general-purpose activity card image | `[ ]` |

### PWA / Manifest Icons (referenced in `manifest.json`, files not yet created)

| # | File | Size | Use | Replaced? |
|---|------|------|-----|-----------|
| 11 | `/icon-192.png` | 192×192 | PWA home-screen icon (Android, desktop install) | `[ ]` |
| 12 | `/icon-512.png` | 512×512 | PWA splash / store icon | `[ ]` |
| 13 | `/screenshot-mobile.png` | 390×844 | PWA store screenshot (narrow/mobile) | `[ ]` |

---

## SECTION 2 — INLINE SVG ICONS

These are SVG paths written directly in the HTML/JSX code.

| # | Icon Description | Location in Code | Replaced? |
|---|-----------------|------------------|-----------|
| 14 | **Google "G" logo** (multi-color SVG, 4 paths: red/blue/yellow/green) | `index.html` ~line 324 — Login screen "Continue with Google" button | `[ ]` |
| 15 | **Hamburger / Menu icon** (3 horizontal lines) | `index.html` ~line 2137 — App header, top-right menu toggle button | `[ ]` |
| 16 | **Person / User silhouette icon** (head + shoulders outline) | `index.html` ~line 2173 — Navigation menu "Sign In / My Account" item | `[ ]` |

---

## SECTION 3 — EMOJI USED AS ICONS

All emoji are rendered as large text icons throughout the app. Each should be replaced with a matching SVG/icon from the new icon set.

### 3A — Activity Type Icons
Used on: Activity Selector screen, Activity Form header, History cards, Dashboard recent activity feed, and the `v4-new-components.js` Dashboard component as `<img src={ACTIVITY_TYPES[type].icon}>`.

| # | Emoji | Activity | Locations | Replaced? |
|---|-------|----------|-----------|-----------|
| 17 | 🌱 | Mowing Lawn | `ACTIVITY_TYPES.mowing.icon` — Activity selector card, form header, history list, dashboard | `[ ]` |
| 18 | 🌾 | Fertilizer & Treatments | `ACTIVITY_TYPES.fertilizer.icon` — Activity selector card, form header, history list, dashboard | `[ ]` |
| 19 | ✂️ | Trimming Beds | `ACTIVITY_TYPES.trimming.icon` — Activity selector card, form header, history list, dashboard | `[ ]` |
| 20 | 💧 | Watering | `ACTIVITY_TYPES.watering.icon` — Activity selector card, form header, history list, dashboard | `[ ]` |
| 21 | 🌱 | Seeding/Overseeding | `ACTIVITY_TYPES.seeding.icon` — Activity selector card, form header, history list, dashboard *(same emoji as Mowing — should be differentiated)* | `[ ]` |
| 22 | 🔧 | Aeration | `ACTIVITY_TYPES.aeration.icon` — Activity selector card, form header, history list, dashboard | `[ ]` |
| 23 | 🔧 | Equipment Maintenance | `ACTIVITY_TYPES.maintenance.icon` — Activity selector card, form header, history list, dashboard *(same emoji as Aeration — should be differentiated)* | `[ ]` |

### 3B — Treatment Category Icons
Used on: Product Guide / Add Activity > Fertilizer & Treatments — category selector chips.

| # | Emoji | Category | Location | Replaced? |
|---|-------|----------|----------|-----------|
| 24 | 🌾 | Fertilizer | `TREATMENT_CATEGORIES.fertilizer.icon` — Treatment category picker | `[ ]` |
| 25 | 🛡️ | Pre-Emergent | `TREATMENT_CATEGORIES.preemergent.icon` — Treatment category picker | `[ ]` |
| 26 | 🌿 | Post-Emergent | `TREATMENT_CATEGORIES.postemergent.icon` — Treatment category picker | `[ ]` |
| 27 | 🍄 | Fungicide | `TREATMENT_CATEGORIES.fungicide.icon` — Treatment category picker | `[ ]` |
| 28 | 🐛 | Insecticide | `TREATMENT_CATEGORIES.insecticide.icon` — Treatment category picker | `[ ]` |
| 29 | 🌍 | Soil Amendment | `TREATMENT_CATEGORIES.soilAmendment.icon` — Treatment category picker | `[ ]` |

### 3C — Navigation / Menu Icons
Used on: Slide-out navigation menu (when hamburger is tapped) and Home screen quick-action cards.

| # | Emoji | Nav Item | Location | Replaced? |
|---|-------|----------|----------|-----------|
| 30 | ➕ | Add Activity | Nav menu item + Home screen | `[ ]` |
| 31 | 📋 | History | Nav menu item + empty state placeholder | `[ ]` |
| 32 | 🏠 | My Garage | Nav menu item + Home screen quick-action card | `[ ]` |
| 33 | 🌱 | My Yard | Nav menu item + Home screen quick-action card | `[ ]` |
| 34 | 📖 | Product Guide | Nav menu item | `[ ]` |
| 35 | 📚 | Research Sources | Nav menu item | `[ ]` |
| 36 | ⚙️ | Settings | Nav menu item + Settings page heading | `[ ]` |

### 3D — Weather Condition Icons
Used on: Weather Snapshot widget (home screen), season banner.

| # | Emoji | Condition | Location | Replaced? |
|---|-------|-----------|----------|-----------|
| 37 | ☀️ | Clear Sky / Peak Summer | `WMO_CODES[0]`, Season banner — summer | `[ ]` |
| 38 | 🌤️ | Mainly Clear / Early Spring | `WMO_CODES[1]`, Season banner — early spring | `[ ]` |
| 39 | ⛅ | Partly Cloudy | `WMO_CODES[2]` | `[ ]` |
| 40 | ☁️ | Overcast | `WMO_CODES[3]` | `[ ]` |
| 41 | 🌫️ | Foggy / Icy Fog | `WMO_CODES[45, 48]` | `[ ]` |
| 42 | 🌦️ | Light Drizzle / Drizzle / Light Showers / Showers | `WMO_CODES[51, 53, 80, 81]` | `[ ]` |
| 43 | 🌧️ | Heavy Drizzle / Light–Heavy Rain / Showers | `WMO_CODES[55, 61, 63, 65, 81]` | `[ ]` |
| 44 | 🌨️ | Light Snow | `WMO_CODES[71]` | `[ ]` |
| 45 | ❄️ | Snow / Heavy Snow / Dormant Season | `WMO_CODES[73, 75]`, Season banner — winter/dormant | `[ ]` |
| 46 | ⛈️ | Heavy Showers / Thunderstorm / Thunderstorm+Hail | `WMO_CODES[82, 95, 99]` | `[ ]` |
| 47 | 🌡️ | Unknown condition / Frost Alert | `WMO_CODES` fallback, frost risk banner | `[ ]` |

### 3E — Season Banner Icons
Displayed in the sticky banner below the header, reflecting current lawn season.

| # | Emoji | Season / Condition | Location | Replaced? |
|---|-------|-------------------|----------|-----------|
| 48 | 🌱 | Active Growing Season / Spring | Season banner — spring, growing season | `[ ]` |
| 49 | ☀️ | Peak Summer | Season banner — summer *(shared with weather)* | `[ ]` |
| 50 | 🔥 | Heat Stress | Season banner — heat stress warning | `[ ]` |
| 51 | 🍂 | Fall Season | Season banner — fall | `[ ]` |
| 52 | ❄️ | Dormant / Winter | Season banner — winter *(shared with weather)* | `[ ]` |

### 3F — Dashboard / Status Icons
Used inline within status cards and labels on the Dashboard and Weather Snapshot.

| # | Emoji | Meaning | Location | Replaced? |
|---|-------|---------|----------|-----------|
| 53 | 📊 | Dashboard heading | Dashboard page `<h2>` heading, `v4-new-components.js` | `[ ]` |
| 54 | 💧 | Weekly Water Budget label | Water deficit card heading | `[ ]` |
| 55 | ✅ | Good conditions / Activity saved | Water budget (surplus), forecast impact card, activity save alert | `[ ]` |
| 56 | ⚠️ | Weather timing alert / Minor deficit | Forecast impact card, water deficit card | `[ ]` |

### 3G — My Garage / Equipment Icons
Used in the Product Guide and My Garage section tab/filter headers.

| # | Emoji | Equipment Category | Location | Replaced? |
|---|-------|-------------------|----------|-----------|
| 57 | 🚜 | Mowers | `typeIcons.mowers` — Product Guide tab / My Garage filter | `[ ]` |
| 58 | 📡 | Spreaders | `typeIcons.spreaders` — Product Guide tab / My Garage filter | `[ ]` |
| 59 | ✂️ | Trimmers | `typeIcons.trimmers` — Product Guide tab / My Garage filter *(shared with Trimming activity)* | `[ ]` |
| 60 | 🌾 | Fertilizers | `typeIcons.fertilizers` — Product Guide tab / My Garage filter | `[ ]` |
| 61 | 🌱 | Seeds | `typeIcons.seeds` — Product Guide tab / My Garage filter | `[ ]` |

### 3H — Page / Section Heading Icons
Used as decorative prefix icons on section headings throughout the app.

| # | Emoji | Heading | Location | Replaced? |
|---|-------|---------|----------|-----------|
| 62 | 🌱 | "Lawn Profile" heading | Lawn Profile page `<h2>`, `v4-new-components.js` | `[ ]` |
| 63 | 🌱 | "My Yard" heading | My Yard page `<h2>` | `[ ]` |
| 64 | 🌾 | "Grass Type" sub-heading | Lawn Profile > Grass Type section, `v4-new-components.js` | `[ ]` |
| 65 | 🌱 | Loading / splash screen icon | Full-screen loading spinner — large (text-5xl) centered icon | `[ ]` |
| 66 | 🌱 | Empty state / no activities | Activity selector — "no previous activity" empty state (text-4xl) | `[ ]` |

---

## SECTION 4 — SUMMARY COUNT

| Category | Count |
|----------|-------|
| Image files on disk | 10 |
| PWA manifest icons | 3 |
| Inline SVG icons | 3 |
| Activity type emoji | 7 |
| Treatment category emoji | 6 |
| Navigation menu emoji | 7 |
| Weather condition emoji | 11 |
| Season banner emoji | 5 |
| Dashboard/status emoji | 4 |
| Garage/equipment emoji | 5 |
| Page heading emoji | 5 |
| **TOTAL** | **66** |

---

## NOTES FOR REPLACEMENT

1. **Duplicated emoji** — Several emoji are reused for different purposes (e.g., 🌱 is used for Mowing, Seeding, My Yard nav, My Yard heading, loading screen, and empty state). Your new icon set should use **distinct icons** for each of these.

2. **🔧 Wrench** — Used for both *Aeration* and *Equipment Maintenance* activity types. These should get unique icons (e.g., aeration spike vs. wrench).

3. **`ACTIVITY_TYPES[type].icon` in Dashboard** — In `v4-new-components.js` line 181, activity icons are rendered as `<img src={...}>`, meaning the activity icon values in `ACTIVITY_TYPES` must be valid image paths (not emoji) for that component to display correctly. The rest of the app renders them as text. You'll need to reconcile this — either use image paths everywhere or convert the Dashboard to render emoji/SVG.

4. **Google Sign-In SVG** — The Google "G" logo (item #14) is a brand asset. Google's guidelines require it to be reproduced accurately. Do not replace it with a generic icon unless you are removing Google Sign-In entirely.

5. **PWA icons** (`icon-192.png`, `icon-512.png`) are referenced in `manifest.json` but the files don't exist yet — they need to be created as part of any new icon set.
