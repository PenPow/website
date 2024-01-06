import { defineCollection, z } from "astro:content";
import { rssSchema } from '@astrojs/rss';

const postsCollection = defineCollection({
	type: 'content',
	schema: rssSchema.extend({ hidden: z.boolean().optional().default(false), description: z.string() }),
});

export const collections = {
	'posts': postsCollection
}