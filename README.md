# Earth Processes in Brazil — PS 120 Final Project

Astro static site. All content is Markdown in `src/content/`.

## Editing content

| File | Page |
| --- | --- |
| `src/content/pages/home.md` | Home |
| `src/content/pages/about.md` | About |
| `src/content/pages/references.md` | References (APA, alphabetical) |
| `src/content/processes/*.md` | The five Earth Processes pages |

To publish a weekly article, open its file in `src/content/processes/`, write the content below the `---` block, and change `draft: true` to `draft: false` (removes the "Coming in Week N" badge). Add the new sources to `references.md`.

Images go in `public/images/` and are referenced as `![alt text](/ps120/images/file.jpg)` inside Markdown.

Photos for places on the Home map live in `public/images/places/`, each as a `.jpg` with a `.webp` copy beside it (1200px wide). A place gets its photo through `photo:` in its front matter (`src`, `alt`, `credit`); the Home default photo is `image:` in `home.md`. To add one:

```sh
cd public/images/places
sips -s format jpeg -Z 1200 original.jpg --out my-place.jpg
cwebp -q 78 my-place.jpg -o my-place.webp
```

## Commands

```sh
npm install
npm run dev      # http://localhost:4321/ps120/
npm run build    # output in dist/
```

## Deploy

Every push to `main` deploys to https://vmsfig.github.io/ps120/ via `.github/workflows/deploy.yml`.
