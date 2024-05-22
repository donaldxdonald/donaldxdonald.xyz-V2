import rehypeShiki, { RehypeShikiOptions } from '@shikijs/rehype'
import { ComputedFields, FieldDefs, defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { slug } from 'github-slugger'
import { Heading } from 'mdast'
import { toString } from 'mdast-util-to-string'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import stripMarkdown from 'strip-markdown'
import { visit } from 'unist-util-visit'

const postFields: FieldDefs = {
  title: {
    type: 'string',
    required: true,
  },
  date: {
    type: 'string',
    required: true,
  },
  image: {
    type: 'string',
  },
}

const strip = (content: string) => {
  const vFile = remark()
    .use(stripMarkdown)
    .processSync(content)
  return String(vFile)
    .trim()
    .replace(/\n/g, ' ')
}

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').pop(),
  },
  url: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath,
  },
  strip: {
    type: 'string',
    resolve: doc => strip(doc.body.raw),
  },
  description: {
    type: 'string',
    resolve: async doc => {
      if (doc.description) {
        return doc.description
      }

      return strip(doc.body.raw)
        .slice(0, 100)
    },
  },
  toc: {
    type: 'json',
    resolve: async doc => {
      const headingList: {depth: number; text: string; slug: string}[] = []

      await remark()
        .use(remarkGfm)
        .use(
          () => tree => {
            visit(tree, 'heading', (node: Heading) => {
              if (node.depth <= 2) {
                const text = toString(node)
                headingList.push({
                  depth: node.depth,
                  text,
                  slug: slug(text),
                })
              }
            })
          },
        )
        .process(doc.body.raw)

      return headingList
    },
  },
}

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/*.md*',
  contentType: 'mdx',
  fields: postFields,
  computedFields,
}))

const Weekly = defineDocumentType(() => ({
  name: 'Weekly',
  filePathPattern: 'weekly/*.md*',
  contentType: 'mdx',
  fields: postFields,
  computedFields,
}))

const shikiOptions: RehypeShikiOptions = {
  theme: 'rose-pine-moon',
  transformers: [
    {
      pre(node) {
        const header: typeof node = {
          type: 'element',
          tagName: 'div',
          properties: {},
          children: [
            {
              type: 'element',
              tagName: 'span',
              properties: {},
              children: [{ type: 'text', value: this.options.lang || 'text' }],
            },
          ],
        }
        node.children.unshift(header)
      },
    },
  ],
}

export default makeSource({
  contentDirPath: 'content',
  contentDirExclude: ['json'],
  documentTypes: [Post, Weekly],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // rehypeStarryNight,
      [rehypeShiki, shikiOptions],
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        properties: { className: ['header-anchor'], ariaHidden: true, tabIndex: -1 },
        content: {
          type: 'text',
          value: '#',
        },
      }],
    ],
  },
})
