import { z, defineCollection } from "astro:content";

const ProjectCollection  = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        category: z.string(),
        cover: z.object({
            src: image(),
            alt: z.string()
        }),
        tags: z.array(z.string()),
        featured: z.boolean().default(false)
    })
})

export const collections = {
    'projects': ProjectCollection,
}