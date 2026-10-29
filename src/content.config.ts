import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Home, About, References
// A photo for a place on the Home atlas: shown in the hero when the place is hovered or chosen
const placePhoto = z.object({ src: z.string(), alt: z.string(), credit: z.string() });

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCredit: z.string().optional(),
    // Home only: a short line under the title, in the author's own words
    standfirst: z.string().optional(),
    // Home only: the author's own places, shown on the atlas in yellow (note: "born", "raised"...)
    authorPlaces: z.array(z.object({ name: z.string(), lat: z.number(), lon: z.number(), note: z.string(), labelSide: z.enum(['left', 'right']).optional(), photo: placePhoto.optional() })).optional(),
  }),
});

// The five Earth Processes pages (one article per week)
const processes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/processes' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    week: z.number(),
    summary: z.string().optional(),
    // Guiding questions the page will answer, shown as a preview while the page is a draft
    questions: z.array(z.string()).optional(),
    // Where in Brazil this process is pinned on the Home atlas (decimal degrees; south and west are negative)
    // labelSide overrides which side of the marker its name goes on, when two names would collide
    place: z.object({ name: z.string(), localName: z.string().optional(), lat: z.number(), lon: z.number(), labelSide: z.enum(['left', 'right']).optional(), photo: placePhoto.optional() }).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, processes };
