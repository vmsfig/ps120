---
target: home page / site
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro"
target_fingerprint: "sha256:741ff0862d8fd9cd4f7205f1b57e8a9bdab271018017fcca4c19f55a3f155a5d"
target_path: /Volumes/VFIGUEREDO/Ensign College/PS 120/Website/src/pages/index.astro
timestamp: 2026-10-29T09-03-01Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector+browser via agent-hub; Chrome had 2 browsers connected, none selected)

## Heuristics: 23/32 (Good, 72%) — n/a: 7, 10
1 Status 3 (key shows "Published" with none published, index.astro:124) · 2 Real world 3 ("A true Brazilian." ambiguous) · 3 Control 3 (hover photo never reverts, index.astro:182) · 4 Consistency 2 (INPE credit vs reference name; PT map labels vs EN legend; brand≈H1) · 5 Error prev 3 · 6 Recognition 3 (mobile map/legend stacked) · 8 Aesthetic 3 (hero ~560px of nav to empty pages) · 9 Recovery 3

## Specificity
Structure authored (atlas plate w/ author's places), voice+color generic (flag palette, encyclopedic prose). Personal layer buried in 13px caption (index.astro:125-130).
Detector: CLI clean. Browser overlay: Home 12, About 14, Process 10, Refs 23 — text-occlusion (closed details dropdown, global.css:177), side-tab (header/dropdown accent borders), stripes (intentional grid) = false positives. Real: line-length 90–111ch at 600–960px (--measure only ≥60em, global.css:510).

## Priority issues
1. [P1] Personal layer demoted to caption — author writes first-person dek; promote yellow key above map. (bolder/clarify)
2. [P1] Draft pages dead ends ([id].astro:41-45) — render place photo+credit; author writes 2–3 questions. (onboard)
3. [P2] Photo swap undiscoverable, broken on mobile — hint, scroll-to on tap, revert on pointerleave. (adapt)
4. [P2] Rubric content far down; long lines mid widths — reorder mobile, in-page links, measure outside MQ. (layout)
5. [P2] Credit/reference name mismatch (INPE). (polish)

## Personas
Jordan: brand≈H1, "Week" explained only in caption. Casey: 2 screens to prose, dot tap invisible. Sam: map alt omits author's places. Peer reviewer: no nameable engaging element on first screen; 5/7 placeholder pages.

## Minor
PRODUCT.md hero drift (Sugarloaf vs Brasília satellite); desaturated satellite og:image; plain 404; hardcoded base path in home.md:43; Economy ends abruptly.
