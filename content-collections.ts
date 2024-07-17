import { defineCollection, defineConfig, z as zod } from "@content-collections/core"
import { remark } from "remark"
import stripMarkdown from "strip-markdown"
import { TOCItem, fillWithTOC } from "./lib/remark"
import { compileMDX } from "./lib/mdx"

const strip = (content: string) => {
  const vFile = remark()
    .use(stripMarkdown)
    .processSync(content)
  return String(vFile)
    .trim()
    .replace(/\n/g, ' ')
}

const makeProseSchema = (z: typeof zod) => {
  return {
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }
}

const Post = defineCollection({
  name: 'Post',
  directory: 'content',
  include: ['blog/*.md*', 'weekly/*.md*'],
  exclude: ['json'],
  schema: makeProseSchema,
  transform: async(doc, ctx) => {
    const toc: TOCItem[] = []

    const mdx = await compileMDX(doc, ctx, {
      remarkPlugins: [
        fillWithTOC(toc),
      ],
    })
    const strippedContent = strip(doc.content)
    return {
      ...doc,
      slug: doc._meta.path.split('/').pop(),
      url: doc._meta.path,
      strip: strippedContent,
      description: doc.description || strippedContent.slice(0, 100),
      toc,
      mdx,
    }
  },
})

export default defineConfig({
  collections: [Post],
})
