import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    authors: z.array(z.string()).optional(),
    tourLink: z.string().optional(),
    reservaLink: z.string().optional(),
    CVLink: z.string().optional(),
  })
});

export const collections = {
  blog: blogCollection
};

