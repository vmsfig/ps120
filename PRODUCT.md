# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Instructor (primary):** grades the site against the PS 120 assignment 1.3 rubric (45 points) and checks every weekly update through week 6.
- **Two classmates (peer reviewers):** open the link from the Canvas discussion and write two strengths plus one suggestion each, in complete sentences. They check whether it is a real published site (not slides, blog, or video), whether the required pages exist, whether it has engaging elements, whether AI use is visible, and whether the writing reads at university level. In week 2 different classmates review it, so first impressions keep mattering.

## Product Purpose

Final project for PS 120 Earth Science (Ensign College): a published website that explores Earth's physical processes through one country, Brazil. The site is set up in week 1. After that, one Earth Processes page is written each week from week 2 to week 6. Success means full rubric marks and a site that reviewers find engaging and credible.

## Positioning

The author is Brazilian. The site explains Brazil's geography from the inside, as home, not as a country picked off a list. A classmate writing about a country they chose for convenience cannot copy that perspective.

## Operating Context

- Deadlines: Part A (the site link posted to the Canvas discussion) is due Sat 2026-10-31 23:59 Denver time. Part B (two peer reviews) is due Mon 2026-11-02 23:59.
- Reviewers arrive from a Canvas discussion link, and usually go through the pages in order: Home, About, the Earth Processes pages, References.
- The site is written in English.

## Capabilities and Constraints

- Required pages:
  - **Home:** a title, at least one photo of Brazil, and historical, cultural, social, and economic information.
  - **About:** the author's ties to Brazil, one interesting fact about Brazil's physical geography, and a response to Alma 30:44 on how the Earth testifies of a Creator.
  - **Five Earth Processes pages:**
    - Maps, Location, and Cartographers
    - Plate Tectonics, Earthquakes, and Volcanoes
    - Weathering, Mass Wasting, and Erosion
    - Fluvial Processes, Oceans, and Coastlines
    - Climate Controls, Biomes, and Climate Change
  - **References:** APA style, alphabetical.
- The Earth Processes pages are placeholders until their week. A `draft: true` page shows a "Coming in Week N" badge.
- The site is built with Astro and Markdown content in `src/content/`. Every push to `main` deploys it to GitHub Pages at `https://vmsfig.github.io/ps120-brazil/`, under the base path `/ps120-brazil`. The editing workflow must stay "edit a Markdown file, push."
- The rubric penalizes visible AI use. The author writes or personalizes all content. Drafts stay clearly marked until rewritten, and personal ties are never filled in for the author.
- Every fact must trace to a source on the References page, and every image needs a visible credit (author, source, license).

## Brand Commitments

- Name: "Earth Processes in Brazil."
- Footer byline: "Vitor Figueredo · PS 120 Earth Science · Ensign College."
- Voice: first person where the assignment asks for it (About and the testimony), and clear university-level prose everywhere else.

## Evidence on Hand

- Hero photo: `public/images/places/brasilia-torre.jpg`, the Eixo Monumental from the TV Tower, by Geovana Albuquerque, Agência Brasília (2023), Wikimedia Commons, CC BY 2.0. The same photo marks Brasília for the Week 2 page and the author's "raised" place. Hovering or tapping a place on the Home atlas swaps it for that place's photo (`public/images/places/`, each credited in its front matter).
- Verified APA sources on the References page: Britannica's Brazil and Amazon River articles, the IBGE Censo 2022, the Book of Mormon (Alma 30), the NordNordWest base map, and one entry per place photo.
- Missing:
  - The author's personal connection text in About (still a TODO).
  - The content of all five Earth Processes pages.
  - Any further photos, maps, or data figures.
- Do not fabricate personal stories, quotes, data, or image credits.

## Product Principles

1. **Rubric first.** Every required element must be present and easy to find. A reviewer should be able to tick each criterion without searching.
2. **Credible.** Facts are sourced, images are credited, and the References page stays accurate.
3. **The author's voice, not AI's.** Structure and design support the author's own writing and never replace it.
4. **Built to grow weekly.** Adding a process page must be trivial, and placeholder pages must look intentional, not broken.
5. **Engaging for a reviewer who has five minutes.** The first screen should earn a strength in the peer review.
