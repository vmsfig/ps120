---
target: home page (site)
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro"
target_fingerprint: "sha256:6024ab22395bc87d914b2b8958bfc8211f4de1017f0b09dd3bece794cd237b72"
target_path: /Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro
timestamp: 2026-10-29T08-22-24Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review sub-agent · B: detector + browser evidence sub-agent). Chrome overlay not run (two Chrome browsers connected; none selected). Headless URL scans used.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Nav dropdown shows "Week N" only, no draft status |
| 2 | Match System / Real World | 3 | "Figure 1." above process-page locator reads oddly |
| 3 | User Control and Freedom | 3 | Prev/next, All, Escape work |
| 4 | Consistency and Standards | 3 | 7px sideways shift between long/short pages (scrollbar) |
| 5 | Error Prevention | 3 | Build fails on visible TODO |
| 6 | Recognition Rather Than Recall | 3 | Mobile markers lose place labels |
| 7 | Flexibility and Efficiency | 2 | Photo and closing note only reachable by long scroll |
| 8 | Aesthetic and Minimalist Design | 3 | Five "Coming soon" lines are noise |
| 9 | Error Recovery | 3 | 404 clear, no page list |
| 10 | Help and Documentation | 2 | Site guide moved to bottom of Home |
| Total | | 28/40 | Good |

## Design Specificity Verdict
LLM: atlas now holds the site together (draft/published markers, locator on process pages). Rest generic: textbook places, postcard photo now at bottom, nothing on first screen shows a Brazilian author. Strongest idea: a sixth, differently styled "Where I grew up" marker.
Detector: CLI clean. URL scans: 30 text-occlusion + header/dropdown side-tab from closed menu (false positive). Real but intentional: 3px top borders on .atlas-plate and .place-card; repeating-gradient graticule. low-contrast 1.0:1 on atlas caption is a detector artifact (5.30:1; 4.25:1 only at 1px grid crossings).

## Priority Issues
- [P1] Required photo buried (y=1702 desktop, 2602 mobile). Fix: photo right after atlas, before prose; cap desktop height at 16:9 with object-fit cover. Command: /impeccable layout
- [P1] Insider position invisible. Fix: author's line + byline under h1 (author writes); "Where I grew up" marker from home.md frontmatter (author supplies place); Portuguese place names with lang="pt-BR". Command: /impeccable bolder
- [P2] Placeholder pages look templated. Fix: author's questions; drop title-repeating sentence; dates instead of "Coming soon" (needs course calendar). Command: /impeccable onboard
- [P2] Status/wayfinding misplaced. Fix: site guide into atlas caption; draft status in dropdown; remove .place-card from figure numbering. Command: /impeccable clarify
- [P3] 7px sideways jump. Fix: scrollbar-gutter: stable. Command: /impeccable polish

## Persona Red Flags
- Peer reviewer: no photo on first screen; About TODO is deadline risk (blocks deploy); five identical placeholder sentences look machine-made; only engaging element is a hover highlight leading to empty pages.
- Jordan: nothing says who made it; h1 repeats site name.
- Sam: legend titles are spans, heading navigation skips atlas; at 200% zoom map (544px) taller than viewport.
- Casey: Menu top-right; markers unlabeled on mobile; photo 3+ screens down.

## Minor Observations
- Home map nearly square, shows a lot of neighbours.
- Footer "Updated" uses build date.
- Reference URLs break mid-token on mobile.
- 404 could list the five process pages.

## Questions to Consider
- If the site is "Brazil from the inside", why is the author's own place the one missing from the atlas?
- What strength would a reviewer write after clicking all five markers today?
- Is Sugarloaf the photo a Brazilian would choose, or a visitor's?
