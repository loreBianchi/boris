// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: 'content',
  schema: {
    title: z.string().min(1).max(80),
    description: z.string().min(1).max(120),
    tags: z.array(z.string()),
    date: z.string().min(1).max(120),
    slug: z.string().min(1).max(120).optional(),
    thumbnailUrl: z.string().min(1).max(120).optional(),
    postImageUrl: z.string().min(1).max(120).optional(),
    postImageUrlWidth: z.number().min(1).max(120).optional(),
  },
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,

};