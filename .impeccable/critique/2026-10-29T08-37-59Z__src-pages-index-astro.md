---
target: home page (site)
total_score: 25
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro"
target_fingerprint: "sha256:e0c23ed7d04d4e4d6fd6dc54196c3afb47c90b9df9dd5e67fedd0040d126cbfe"
target_path: /Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro
timestamp: 2026-10-29T08-37-59Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review sub-agent · B: detector + browser evidence sub-agent). Chrome overlay not run (two Chrome browsers connected; none selected). Headless URL scans used.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Home legend hides "Coming soon" visually; key references solid markers that don't exist yet |
| 2 | Match System / Real World | 3 | "Figure 1/2" on a landing page reads academic |
| 3 | User Control and Freedom | 3 | Escape, outside click, skip link, prev/next |
| 4 | Consistency and Standards | 2 | Status visible in nav/badge but not legend; pin labels show at 820 but hide at 1280/390 |
| 5 | Error Prevention | 3 | TODO build guard works |
| 6 | Recognition Rather Than Recall | 2 | Bare numbered pins at 1280 and mobile |
| 7 | Flexibility and Efficiency | 2 | No back-links from references to citations |
| 8 | Aesthetic and Minimalist Design | 3 | Figure 2 caption does 5 jobs |
| 9 | Error Recovery | 3 | 404 lists processes, not About/References |
| 10 | Help and Documentation | 2 | No orientation line for newcomers |
| Total | | 25/40 | Acceptable |

## Design Specificity Verdict
LLM: atlas is the site's identity (plate, place cards, figure numbering). Missing: insider view (standfirst/authorPlace empty, no Portuguese on Home) and Brazil barely distinct from neighbours on the map (#e7eedb vs #efece2).
Detector: CLI clean. URL scans 54 findings, nearly all from closed dropdown (verified never painted). Real: atlas caption line length ~87–92 chars (mild); place-card side-tab (intentional). low-contrast 1.0:1 false (5.30:1 / 4.73:1 on grid lines). B found: yellow "Figure 1." on scrim drops to 4.18:1 over near-white photo areas.

## Priority Issues
- [P1] Draft status unreadable on Home legend (visually hidden). Fix: visible muted "Coming soon"; shorten caption key. Command: /impeccable clarify
- [P1] Insider view absent. Fix: "By Vitor Figueredo · About the author" line; Portuguese localName back in legend; build warns when standfirst/authorPlace empty. Command: /impeccable bolder
- [P2] Pin labels hidden at 1280/mobile. Fix: map 1.6fr vs legend; labels from 20rem; short labels ("Amazon mouth", "Manaus") to avoid 1440 collision. Command: /impeccable layout
- [P2] Caption overloaded; Brazil faint on its own map. Fix: split caption (purpose / marker key with swatches / credit), cap width; stronger Brazil fill, greyer neighbours in SVG; safe contrast for photo "Figure 1.". Command: /impeccable colorize (map only)
- [P2] Process pages end in nothing. Fix: one fixed line from existing data (place + week). Note: differs from round 4's removed title-repeating sentence. Command: /impeccable onboard

## Persona Red Flags
- Peer reviewer: ticks pages fast; likely suggestion "process pages empty" / "more photos"; About has no image.
- Jordan: hero doesn't say who/why; pin sequence not obvious when scattered.
- Sam: pins hidden correctly; place names on map only for sighted users at wide widths.
- Casey: legend starts below fold (y=880); unlabeled pins.

## Minor Observations
- .site-guide unused CSS.
- index.astro comment about 404 linking to #processes-heading is stale.
- At 820px the rail leaves a 461px reading column.
- No og:image for Canvas link previews.
- Legend hover (--paper on --tint) barely visible.

## Questions to Consider
- Should the "where I grew up" marker be the atlas's anchor rather than optional?
- Would one Portuguese word near the title show the insider view better than layout polish?
- Should weekly progress (solid pin per published page) be the hero's main story?
