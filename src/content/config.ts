import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(["John Doe", "Jane Doe", "Mike Doe"])
  })
})

export const collections = {
  blog
}