---
target: home page (site)
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 4
target_identity: "file:/Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro"
target_fingerprint: "sha256:9486151bc99a6937e2130611176d231808fc848313fc9179823e508f204d0875"
target_path: /Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro
timestamp: 2026-10-29T08-03-28Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review sub-agent · B: detector + browser evidence sub-agent). Chrome overlay not run (two Chrome browsers connected; none selected). Headless URL scans used.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Nav dropdown hides draft status |
| 2 | Match System / Real World | 3 | "Week N" assumes course context |
| 3 | User Control and Freedom | 3 | Desktop dropdown stays open when tabbing away |
| 4 | Consistency and Standards | 3 | 7px header shift (scrollbar) between long/short pages |
| 5 | Error Prevention | 2 | "Coming soon" rows link to near-empty pages; TODO check only warns |
| 6 | Recognition Rather Than Recall | 3 | Process index at y=2046 desktop / 2333 mobile |
| 7 | Flexibility and Efficiency | 2 | Citations link to References page top, no per-entry anchors |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained, too quiet for first screen |
| 9 | Error Recovery | 3 | Clear 404 with paths back |
| 10 | Help and Documentation | 3 | .site-guide explains weekly model |
| Total | | 28/40 | Good |

## Design Specificity Verdict
LLM: improved but still "Brazil country report" with two authored touches (numbered atlas figures, graticule band). Flag palette, flag favicon, Sugarloaf postcard, encyclopedia sections are first-reach choices. "From the inside" positioning invisible: no byline, no Portuguese names, no home-region marker.
Detector: CLI clean. URL scans 6–10/page: text-occlusion (closed dropdown, false positive), side-tab (header 4px strip, dropdown top edge — false positive), cramped-padding (.processes bleed, false positive), repeating-stripes-gradient (graticule, real advisory; A notes it is nearly invisible at 7%). Detector missed all four P1 issues.

## Priority Issues
- [P1] Visible TODO on About ("[TODO: my connection to Brazil]"). Assessment A rated P0. Fix: author writes paragraph; make build fail on TODO in non-draft pages. Command: /impeccable harden
- [P1] Five process pages one sentence each; `questions` unused. Fix: author writes 2–3 questions per page, or unlink "Coming soon" rows until published. Command: /impeccable onboard
- [P1] Process index still ~2.5 screens down Home. Fix: compact five-week strip under hero; keep full index at end. Command: /impeccable layout
- [P1] Author perspective invisible on first screen. Fix: byline under h1 in author's words; Portuguese names in photo caption; optional home-region map marker. Command: /impeccable bolder
- [P2] First screen undersized (hero 592px on 1280) and stock. Note: follows the user's explicit choice of photo width = text width; option is a full-bleed hero above the column. Geology hook for Sugarloaf caption needs a source. Command: /impeccable bolder

## Persona Red Flags
- Peer reviewer: TODO, five one-line pages, two images, nothing interactive; Britannica cited nearly every paragraph with no first-person sentence.
- Jordan: brand and h1 near-duplicate; author only in footer; "Week 2–6" assumes course.
- Sam: desktop dropdown stays open after tabbing past, covers content at 200%; three identical citation links to same page top.
- Casey: Menu top-right; citation links 16–20px tall; map before first paragraph pushes prose below first screen.

## Minor Observations
- scrollbar-gutter: stable fixes 7px shift.
- #processes-heading anchor lands flush to top, no scroll-margin.
- Published rows will say "Read" only; consider "Read · Week 2".
- Radii inconsistent (2px vs 6px).
- Graticule at 7% nearly invisible.

## Questions to Consider
- Without flag colors and Sugarloaf, would anything on Home say "Brazil, by a Brazilian"?
- What if the first screen were the map with the five processes pinned to Brazilian places?
- Is a clickable "Coming soon" row a promise or a letdown?
