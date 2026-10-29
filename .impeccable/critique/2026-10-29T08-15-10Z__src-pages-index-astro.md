---
target: home page (site)
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:/Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro"
target_fingerprint: "sha256:4b45ec37e784e50662c63db0074a196e76041e92fadb174bfa427a822b2ac466"
target_path: /Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro
timestamp: 2026-10-29T08-15-10Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review sub-agent · B: detector + browser evidence sub-agent). Chrome overlay not run (two Chrome browsers connected; none selected). Headless URL scans used.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Five identical "Coming soon" with no date/progress |
| 2 | Match System / Real World | 3 | Map alt says legend "beside"; on mobile it is below |
| 3 | User Control and Freedom | 3 | Citations land at top of References, not the entry |
| 4 | Consistency and Standards | 3 | Two left edges on Home: .site-guide x=185 vs intro x=489 beside empty rail |
| 5 | Error Prevention | 2 | TODO check only warns; About ships with TODO |
| 6 | Recognition Rather Than Recall | 3 | Mobile pins show numbers only |
| 7 | Flexibility and Efficiency | 2 | No reference ids; process pages don't show their place |
| 8 | Aesthetic and Minimalist Design | 3 | "Earth Processes (in Brazil)" three times: brand, h1, h2 |
| 9 | Error Recovery | 3 | Clear 404 |
| 10 | Help and Documentation | 3 | Site guide explains weekly growth; no authorship |
| Total | | 28/40 | Good |

## Design Specificity Verdict
LLM: atlas plate is the authored idea (real lat/lon pins, synced legend, numbered figures). Rest generic: flag palette, Sugarloaf postcard, no first-person voice on Home. Biggest miss: atlas stops at Home; process pages don't know their place.
Detector: CLI clean. URL scans: 33 text-occlusion (closed dropdown, false positive), side-tab header/dropdown (false positive), low-contrast 1.0:1 on atlas caption (manual 5.30:1, false positive). Real: .atlas-plate 3px top border (side-tab rule, deliberate plate frame), repeating-gradient graticule (deliberate).

## Priority Issues
- [P1] Visible TODO on About (A rated P0). Fix: author writes; build fails on TODO, DRAFT stays warning. Command: /impeccable harden
- [P1] Home hides required content and author voice: photo y=946, prose ~1560 desktop. Fix (map-first kept): replace repeated h2 with author's one-line standfirst; move .site-guide to end; make intro a headed "Overview" section. Command: /impeccable layout
- [P1] Process pages look broken. Fix: show the page's own place (mini map with its pin or "Pinned at … · Figure 1" linking back); questions remain author's. Command: /impeccable onboard
- [P2] Citations don't reach cited entry. Fix: ids per reference, cite links to #ref-…, :target highlight. Command: /impeccable harden
- [P2] Palette from flag, not land. Fix: yellow only as marker; consider earth tones on process pages. Command: /impeccable colorize

## Persona Red Flags
- Peer reviewer: praises map, then TODO + empty pages; two screens to confirm Home photo/text; no first-person voice.
- Jordan: five "Coming soon" before content; title repeated three times.
- Sam: at 200% zoom map taller than viewport, legend (only focusable route) a screen down; alt "beside" mismatch; citations land on References h1.
- Casey: pins 26px and pointer-active; Menu top-right; page 3112px, prose at 1604px.

## Minor Observations
- h1 nearly repeats brand.
- "Read" weak label for published pages; "Published · Week 2".
- "Last updated" in footer would support weekly growth.
- Keep id="processes-heading" if the atlas h2 is removed (404 and process pages link to it).

## Questions to Consider
- Why is the only photo the most famous postcard if the author is from there?
- What if each process page opened on its own pin, making the site a trip across Brazil?
- Could the map show progress (filled vs outlined pins) instead of five identical "Coming soon"?
