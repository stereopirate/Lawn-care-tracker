# Lawn Care Tracker — Complete Features & Functionality Reference
> Marketing Reference Document · v7.0 · For use in generating landing page copy, sell sheets, and promotional materials

---

## What It Is

A free, browser-based lawn care companion app that combines real-time local weather, research-backed grass care guidance, equipment management, and activity logging — all in one place, with no login or subscription required. Data stays private on the user's device.

---

## App Screens / Sections (8 Total)

| Screen | Purpose |
|---|---|
| **Dashboard (Home)** | Weather snapshot, seasonal status, quick stats, recent activity |
| **Add Activity** | Log any lawn care task with smart, context-aware fields |
| **Activity History** | Full log of every activity with color-coded visual timeline |
| **My Garage** | Equipment inventory, product selection, maintenance tracking |
| **My Yard** | Lawn profile, grass type guide, zone-specific annual program |
| **Product Guide** | Browse & compare 96+ mowers, spreaders, trimmers, fertilizers, and seeds |
| **Research Sources** | 110+ publications from 19 university extension programs |
| **Settings** | Data export, reset, version notes |

---

## Dashboard & Weather

### Real-Time Local Weather
- Powered by **Open-Meteo API** (free, no API key, privacy-friendly)
- Entered once via 5-digit zip code → auto-detects location and USDA zone
- Displays: temperature, "feels like," daily high/low, humidity, wind speed & direction (8-point compass), 7-day rainfall, rain probability, UV index (Low/Moderate/High/Very High), and current conditions with emoji icon (19 condition types supported)

### Soil Temperature Card
- Estimates soil temp at 4" depth from current air temp
- Powers a live **Lawn Recommendation** card with color-coded background:
  - **Blue** — "Too cold for most lawn activity" (< 50°F)
  - **Green** — "Good for cool-season grass care" (50–65°F)
  - **Brand Green** — "Ideal growing conditions" (65–85°F)
  - **Orange** — "Very warm — focus on watering" (> 85°F)

### Seasonal Status Banner
- Automatically changes messaging and color by soil temperature range:
  - Dormant Season · Early Spring · Active Growing Season · Peak Summer · Heat Stress

### Activity Stats Widget
- Toggle between **This Year / This Season / All Time**
- Shows count by activity type with color-coded indicators

### Quick Navigation
- One-tap access to My Yard and My Garage from the dashboard
- Recent activity feed showing last 5 logged tasks

---

## Activity Logging (7 Activity Types)

All activities support a date picker and free-text notes field.

### 1. Mowing Lawn
- Mower type (Walk Behind, Riding, Zero Turn)
- Mower model (pulled from equipment database)
- Mow height (1.5" to 4" in increments)
- Clippings method (Bagging, Mulching, Side Discharge)
- Duration in minutes

### 2. Fertilizer & Treatments
Six sub-categories, each with tailored product pickers and fields:
- **Fertilizer** — product picker, spreader selection, spreader setting, application rate, coverage area
- **Pre-Emergent** — same fields; soil temp warning built in
- **Post-Emergent** — product picker with active ingredient callout
- **Fungicide** — product details with disease target notes
- **Insecticide** — product details with pest target notes
- **Soil Amendment** — product picker for lime, sulfur, gypsum, humic acid, etc.

Each treatment displays a product info card showing: active ingredient, recommended rate, best timing, and target pest/disease.

### 3. Trimming Beds
- Areas trimmed (free text)
- Tool selection (String Trimmer, Edger, Hedge Trimmer)

### 4. Watering
- Method (Sprinkler System, Hose, Hand Watering)
- Duration in minutes

### 5. Seeding / Overseeding
- Grass seed product picker (10 varieties)
- Spreader selection and setting
- Amount used (lbs)

### 6. Aeration
- Method (Core, Spike, Liquid Aeration)
- Coverage area (sq ft)

### 7. Equipment Maintenance
- Equipment type (Mower, Trimmer, Edger, Blower, Other)
- Maintenance type (Oil Change, Blade Sharpening, Spark Plug, Air Filter, Cleaning)

---

## Activity History

- Full chronological log, newest first
- Expandable detail cards per activity
- Color-coded by activity type (7 distinct colors)
- Delete individual entries
- Visual type badges for quick scanning

**Activity color palette:**
- Mowing → Green | Fertilizer → Orange | Trimming → Emerald
- Watering → Blue | Seeding → Amber | Aeration → Purple | Maintenance → Gray

---

## My Garage — Equipment Management

### Equipment Type Selection
- Three categories: **Mowers, Spreaders, Trimmers**
- Image icon buttons with square crop design
- Mower sub-type filtering: Walk Behind · Riding · Zero Turn

### Product Database (75+ mowers, 10 spreaders, 10 trimmers)
Users pick their model from a pre-loaded database; equipment auto-fills name, brand, features, deck size, and maintenance schedule.

**Custom entry option** for equipment not in the database.

### Maintenance Tracking
- Hour-based service interval tracking per equipment piece
- Alerts for: Oil Change, Air Filter, Spark Plug, Blade Sharpening
- Visual red highlight when service is overdue
- Hours logged automatically from mowing activity duration

---

## My Yard — Lawn Profile & Grass Guide

### Lawn Profile
- Lawn size (sq ft)
- USDA hardiness zone (6 parent zones, 12 sub-zones: 4a–9b)
- Grass type (6 varieties)
- Soil type
- Zip code (triggers auto zone + weather lookup)

### Grass Type Knowledge Base (6 Varieties)
For each grass type, the app provides:

| Data Point | Example |
|---|---|
| Recommended mow height | 2.5"–4" |
| Ideal soil pH | 6.0–7.0 |
| Watering needs | 1"–1.5" per week |
| Sun requirements | Full sun to partial shade |
| Fertilizer rate | lbs N per 1,000 sq ft |
| Peak growth period | Spring & Fall |
| Soil temp for germination | 50–65°F |

**Supported grass types:**
- **Cool Season:** Tall Fescue · Kentucky Bluegrass · Perennial Ryegrass
- **Warm Season:** Bermudagrass · Zoysiagrass · St. Augustinegrass

Each grass type includes:
- 4 key care tips
- Common issues / problems list
- Zone compatibility rating with color-coded warnings
- Research source links (Penn State, Purdue, NC State, UGA, Texas A&M, etc.)

### Zone Compatibility Assessment
- Warns when selected grass type is outside its ideal USDA zone range
- Color-coded: compatible / marginal / not recommended

### Monthly Task Recommendations
- **Current month is highlighted** automatically
- 12-month program calendar per grass type per zone
- Soil temperature guidance per month
- Task importance levels (color-coded)
- Collapsible full annual calendar view

---

## Product Guide — Browse & Compare 96+ Products

### Categories
1. **Mowers** (75 total: 25 Walk Behind, 25 Riding, 25 Zero Turn)
2. **Spreaders** (10 total)
3. **Trimmers** (10 total)
4. **Fertilizers** (10 total)
5. **Seeds** (10 total)

### Filtering
- Category tabs
- Brand dropdown filter (with count)
- Mower type filter (Walk Behind / Riding / Zero Turn / All)
- Real-time product count display

### Product Detail Cards
- Expandable cards with full spec sheets
- Features list, deck size, line size, coverage area, NPK ratios, etc.
- Maintenance schedule where applicable

### Comparison Tool (Up to 3 Products)
- Select products across the guide for side-by-side comparison
- Sticky comparison bar appears at bottom of screen
- Side-by-side grid layout, horizontally scrollable on mobile
- Shows only relevant spec rows
- **Highlights differing values in bold**
- Remove individual products from comparison at any time

### Brands Represented
John Deere, Husqvarna, Toro, EGO, Honda, Cub Cadet, Ariens, Stihl, Echo, Scotts, Milorganite, Pennnington, Jonathan Green, Lesco, Makita, DeWalt, Ryobi, Milwaukee, and more.

---

## Treatment Product Database (25+ Products, 6 Categories)

| Category | Example Products |
|---|---|
| Fertilizers | Scotts Turf Builder, Milorganite, Lesco 24-5-11 |
| Pre-Emergent | Prodiamine 65 WDG, Scotts Halts, Barricade, Dimension |
| Post-Emergent | Tenacity, Ortho Weed B Gon, Speedzone, Quinclorac |
| Fungicides | Scotts Disease Ex, Heritage G, Azoxystrobin |
| Insecticides | GrubEx, BioAdvanced Grub Killer, Dylox, Bifenthrin |
| Soil Amendments | Lime, Elemental Sulfur, Gypsum, Humic Acid |

Each treatment product card shows: active ingredient, recommended application rate, best timing, and target pest or disease.

---

## Research Sources

- **19 university cooperative extension programs** indexed
- **110+ peer-reviewed publications** referenced
- Universities include: Penn State, Purdue, NC State, UGA, Texas A&M, Michigan State, Clemson, Virginia Tech, University of Florida IFAS, Kansas State, U of Minnesota, LSU, Ohio State, Rutgers, UConn, UMass, Oklahoma State, University of Arkansas, Alabama Cooperative Extension
- Citation badges throughout the app link to source documents
- Dedicated Research Sources screen with university cards and direct links

---

## USDA Hardiness Zone System

- 6 parent zones (4–9) with sub-zone precision (a/b)
- 16 unique zone profiles with temperature ranges, climate classification, and description
- Auto-detected via zip code lookup
- Manual selection available
- Zone-specific grass care programs and guidance throughout

---

## Data & Privacy

- **All data stored locally** in the browser (localStorage)
- **No account, no login, no cloud sync**
- Three data buckets: activities, equipment, profile
- **Export as JSON** (timestamped backup file)
- Full data reset with confirmation step
- No tracking, no ads, no data sold

---

## Design & Experience Highlights

- **Mobile-first** responsive design — works on phone, tablet, desktop
- **Single HTML file** — no install, loads fast, works offline after first load
- **Color-coded everything** — activity types, temperature ranges, zone compatibility, treatment categories
- **Expandable cards** — clean interface that surfaces detail on demand
- **Emoji-rich UI** — quick visual scanning without reading every label
- Card-based layout with left-border accents, drop shadows, gradient header
- Smooth micro-animations: fade-in, scale-in, button press feedback, sticky bar slide-up
- Toast notifications for confirmations
- Large touch targets for mobile usability
