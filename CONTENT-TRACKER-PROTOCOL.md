# Yardstick — Content Tracker Protocol

**Document type:** Standing operating procedure  
**Purpose:** How Claude and Jon work together using the master content tracker  
**Google Sheet:** https://docs.google.com/spreadsheets/d/1vhkOjLbXfqQnba-kmRO-6jEiLrnUn4kAE8zRXS2J9tk/edit  
**Learn section:** https://yardstick.diy/learn

-----

## Current Limitation (Important)

Claude’s Google Drive connector reads Google Docs only — not Google Sheets. Until a native Sheets connector is available, the workflow below bridges this gap with minimal friction. Check Claude Settings → Connectors periodically; when Google Sheets appears, this protocol can be simplified to direct read/write.

-----

## The Sheet Structure

The tracker has 6 tabs. The two tabs Claude needs most often are:

|Tab                     |Purpose                                                          |
|------------------------|-----------------------------------------------------------------|
|📋 Article Tracker       |Master list — every article, its status, slug, sources, and notes|
|🟢 Live Articles         |Published articles only — quick reference with live URLs         |
|📊 Dashboard             |Count summary by category and status                             |
|📅 Publish Calendar      |12-week rolling publish schedule                                 |
|🔗 Content Clusters      |Internal linking map by grass type / topic                       |
|📝 Article Brief Template|Fill-in brief for each new article assignment                    |

### Article Tracker columns (in order)

`# · Title · Primary Keyword · Grass Type · Zone(s) · Category · Est. Volume · Competition · Priority · Seasonality · URL Slug · Status · Publish Date · Live URL · Written By · University Sources · Word Count · App CTA? · Notes`

-----

## Status Values

|Status        |Meaning                                               |
|--------------|------------------------------------------------------|
|🟢 Published   |Live at yardstick.diy/learn/[slug]                    |
|🟡 In Progress |Currently being written                               |
|🔵 Drafted     |Written, not yet reviewed or published                |
|🔄 Needs Review|Draft complete, needs a read-through before publishing|
|⚪ Planned     |In the pipeline, not started                          |
|🔴 On Hold     |Deprioritized, revisit later                          |

-----

## How to Start Any Content Session

Paste this at the top of your message whenever you want Claude to work against the tracker:

```
Content tracker: https://docs.google.com/spreadsheets/d/1vhkOjLbXfqQnba-kmRO-6jEiLrnUn4kAE8zRXS2J9tk/edit

[then your request]
```

Claude will fetch the sheet, read the current data, and work from it directly.

-----

## Common Session Types & Exact Prompts to Use

### 1. Write a new article

```
Content tracker: [link]

Write the article for row [#] — "[Article Title]". 
Follow the Yardstick brand voice (university-sourced, no product pushing, 
soil temp angle where relevant). Include CitationBadge placements and 
an app CTA. Target [word count] words.
```

Claude will pull the row data (keyword, grass type, zone, sources, notes)
and use it as the brief. No need to repeat that information.

-----

### 2. Update status for published articles

```
Content tracker: [link]

The following articles just went live. Please give me the exact cell 
updates to make in the sheet:

- Row [#]: status → 🟢 Published, live URL → https://yardstick.diy/learn/[slug], publish date → [date]
- Row [#]: same
```

Claude will confirm the exact rows and values. You apply the updates directly in the sheet.

-----

### 3. Mark an article in progress

```
Content tracker: [link]

I'm starting work on row [#] — "[Title]". 
Update status to 🟡 In Progress.
```

-----

### 4. Plan the next articles to write

```
Content tracker: [link]

Looking at the current pipeline, which 3 articles should I write next 
and why? Consider: seasonality for [current month], search volume, 
which clusters need completing, and what's already live to link from.
```

Claude will cross-reference the tracker against the content cluster map
and current season to give a prioritized recommendation.

-----

### 5. Add new article ideas to the tracker

```
Content tracker: [link]

Add these new article ideas to the tracker. Assign them a priority, 
category, grass type, and suggested slug:

1. [Article idea]
2. [Article idea]
```

Claude will return the full row data for each new article ready to paste
into the sheet.

-----

### 6. Generate a full article brief

```
Content tracker: [link]

Generate a complete article brief for row [#] using the Article Brief 
Template format. I'll use this to brief a writer or AI.
```

-----

### 7. Audit the tracker

```
Content tracker: [link]

Audit the current tracker and tell me:
- Which content clusters are missing key articles
- Any planned articles that are redundant with live ones
- What's most urgent to publish before [season]
```

-----

### 8. Update the publish calendar

```
Content tracker: [link]

Update the 12-week publish calendar. Today is [date]. 
Prioritize [season] content and any gaps in the [cluster name] cluster.
```

-----

## How Claude Reads the Sheet

When you share the link, Claude uses the Google Drive fetch tool to read
the sheet contents. For best results:

- **Keep the sheet shared** as “Anyone with the link can view” (current setting)
- **Don’t rename the tabs** — Claude references tabs by their current emoji names
- **Don’t reorder columns** in the Article Tracker tab — Claude reads them by position

If Claude says it can’t read the sheet, export as CSV (File → Download → CSV)
and paste the contents directly into the chat as a fallback.

-----

## Maintaining the Sheet — Jon’s Responsibilities

Claude can tell you what to update but cannot write to the sheet directly
(until a Sheets connector is available). These are your standing update tasks:

|Trigger                   |What to update in the sheet                                      |
|--------------------------|-----------------------------------------------------------------|
|Article goes live         |Status → 🟢 Published · Live URL → full URL · Publish Date → today|
|Starting to write         |Status → 🟡 In Progress                                           |
|Draft finished            |Status → 🔵 Drafted                                               |
|New article idea          |Add row with all fields, status → ⚪ Planned                      |
|Article deprioritized     |Status → 🔴 On Hold · add reason in Notes                         |
|Article no longer relevant|Delete row or add “RETIRED” to Notes                             |

-----

## Article Writing Standards (Reference for Every Article)

Every article Claude writes for yardstick.diy/learn must follow these rules.  
These are derived from the Brand Book and Project Overview.

**Voice & sourcing**

- University extension research is the source — never commercial product sites
- Minimum 2 university sources per article, cited with CitationBadge components
- Lead with the soil temperature or zone-specific angle, not a calendar date
- Approved voice: “Like a trusted neighbor who happens to have a horticulture degree”
- No exclamation marks, no hype language, no product pushing

**Structure**

- H1 matches the article title in the tracker exactly
- Intro paragraph leads with the research-backed angle within the first 2 sentences
- Include at least one data table (zone × soil temp, monthly schedule, or grass type comparison)
- App CTA placement: after intro, after main data table, and in conclusion
- CTA copy example: “Track this in Yardstick — free. No account needed.”

**Internal linking**

- Every article links to the soil temperature hub: `/learn/soil-temperature-lawn-care-guide`
- Every article links to its content cluster hub (see 🔗 Content Clusters tab)
- Grass-specific articles link to the relevant grass care guide if it exists

**CitationBadge placements**

- Any specific soil temperature threshold claim
- Any N-P-K rate or application timing claim
- Any seeding rate or overseeding rate claim
- Any “research shows” or “university extension recommends” statement

-----

## Priority Definitions

|Priority|Meaning                                                              |When to write      |
|--------|---------------------------------------------------------------------|-------------------|
|P1      |Ship first — highest volume or fills a critical cluster gap          |Next 30 days       |
|P2      |Next 60 days — medium volume or completes an existing cluster        |Next 60 days       |
|P3      |Backlog — lower volume, niche grass type, or dependent on P1/P2 first|When P1/P2 are done|

-----

## Content Cluster Status (as of March 2026)

|Cluster             |Hub Status                  |Deep Dives Needed                           |
|--------------------|----------------------------|--------------------------------------------|
|Weed Control        |4 articles live             |Bermuda pre-em, cool-season pre-em          |
|Fertilizing         |3 hub articles live         |Grass-specific schedules (6 planned)        |
|Seeding & Renovation|3 articles live             |KBG overseed, Bermuda overseed              |
|Mowing              |2 articles live             |None — cluster complete                     |
|Seasonal            |3 articles live             |None — cluster complete                     |
|Grass Guides        |Bermuda, Fescue, Zoysia live|Perennial Rye, Fine Fescue, Centipede, Bahia|
|Soil & Science      |Soil temp + Soil pH live    |USDA zones, soil test how-to                |
|Soil & Aeration     |Aeration guide live         |Zone-specific timing deep dives (2 planned) |
|Pests & Disease     |Grub control live           |Nutsedge, brown patch, armyworm             |
|Watering            |None live                   |Bermuda + Fescue watering guides            |

-----

## Version History

|Date      |Change                                                                                      |
|----------|--------------------------------------------------------------------------------------------|
|March 2026|Protocol created. 22 articles live, 23 in pipeline. Google Sheets read-only via Drive fetch.|

*Update this table whenever the protocol changes or the Sheets connector status changes.*
