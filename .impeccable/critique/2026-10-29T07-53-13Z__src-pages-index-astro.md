---
target: home page (site)
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:/Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro"
target_fingerprint: "sha256:b4f6f18b7de572c352cef4c9f2d9096bbedc8fb54e74db715835ee9102fe2921"
target_path: /Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro
timestamp: 2026-10-29T07-53-13Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review sub-agent · B: detector + browser evidence sub-agent). Browser overlay not run (two Chrome browsers connected; none selected). Headless URL scans used instead.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | No current-section state for "Earth Processes" on process pages |
| 2 | Match System / Real World | 3 | "Coming soon" (Home) vs "Coming in Week 2" (page) |
| 3 | User Control and Freedom | 2 | Process pages are dead ends: no prev/next, no back to index |
| 4 | Consistency and Standards | 3 | Status wording differs; week repeated twice on placeholder |
| 5 | Error Prevention | 2 | DRAFT/TODO notes ship in public HTML; no build guard |
| 6 | Recognition Rather Than Recall | 3 | Process index sits at y≈1700 (desktop) / 1800 (mobile) |
| 7 | Flexibility and Efficiency | 2 | No sequential path through weeks |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained and readable, but generic |
| 9 | Error Recovery | 1 | No 404.astro; GitHub default 404 with no way back |
| 10 | Help and Documentation | 2 | Home never explains the weekly structure |
| Total | | 24/40 | Acceptable |

## Design Specificity Verdict
LLM: clean but category-interchangeable. Brazil expressed only via flag colors, Sugarloaf postcard, generic reading column. PRODUCT.md positioning ("from the inside, as home") absent from first screen: no author, no first-person line, no map. Archivo condensed + Georgia pairing is the one authored choice.
Detector: CLI scan clean (0). Headless URL scans 4–5 per page: side-tab (header 4px full-width yellow border, false positive), cramped-padding on .processes (box-shadow/clip-path bleed, false positive), text-occlusion (closed dropdown links, false positive), gpt-thin-border-wide-shadow on .dropdown ul (real, advisory). Detector missed: drafts in public HTML, dead-end process pages, buried process index.

## Priority Issues
- [P1] Draft/TODO notes published, including HTML source. Verified in dist: about/ ships "<!-- DRAFT from your plan. Adjust it so it reflects your own conviction. -->", home ships "<!-- DRAFT: review every sentence, rewrite in your own voice… -->"; About shows "[TODO: my connection to Brazil]". Fix: strip HTML comments at build (remark plugin) or move to frontmatter; fail build on TODO/DRAFT in output. Command: /impeccable harden
- [P1] Process pages are dead ends that look empty. Fix: prev/next + "All Earth Processes"; drop repeated sentence; use unused `summary` frontmatter for 2–3 guiding questions (author's text). Command: /impeccable onboard
- [P1] Project structure buried at end of Home after ~1000px of uninterrupted prose. Fix: one-line "one page per week, weeks 2–6" with anchor to index, or move index under hero; unify status wording. Command: /impeccable layout
- [P2] No authorship or inside perspective on first screen; no in-text citations. Fix: byline under h1 in author's words; APA in-text citations linking to References; a second credited image (locator map). Command: /impeccable bolder
- [P2] Navigation edges: no current state for Earth Processes summary; no 404 page; dropdown lacks week numbers. Command: /impeccable harden

## Persona Red Flags
- Peer reviewer (5 min + rubric): hunts for the 5 pages, finds all empty, sees TODO on About, only one image. Likely suggestion: "add more visuals and finish About".
- Jordan: no sentence explains purpose or weekly cadence; "Coming soon" leads to a dead end.
- Sam: screen reader reads "[TODO: …]"; no current-section announcement on process pages. Skip link and zoom otherwise solid.
- Casey: Menu button top-right (hardest thumb zone); 3 taps or ~1800px scroll to reach a process; open menu covers ~500/844px.

## Minor Observations
- Desktop dropdown: thin border + wide shadow (generic), no week numbers.
- Full-viewport min-height makes short process pages feel emptier.
- Hero figcaption credit is good; repeat for future images.

## Questions to Consider
- If the edge is "from the inside", why is the first image a tourist postcard rather than a place only a local would pick?
- Should placeholders be links in week 1, or a dated roadmap that becomes links on publish?
- Could History/Culture/Economy each tie to a physical process so Home's required content introduces the five pages?
