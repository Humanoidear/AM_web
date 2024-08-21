import { preview } from 'astro';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		type: z.string(),
		services: z.string().array(),
		year: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		preview: z.string(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { work };
