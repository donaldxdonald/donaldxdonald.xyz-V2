import { ComputedFields, FieldDefs, defineDocumentType, makeSource } from 'contentlayer/source-files'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import strip from 'strip-markdown'
import { visit } from 'unist-util-visit'
import { rehypeStarryNight } from './lib/rehype-starry-night'

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

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath.split('/').pop(),
  },
  url: {
    type: 'string',
    resolve: doc => doc._raw.flattenedPath,
  },
  description: {
    type: 'string',
    resolve: async doc => {
      if (doc.description) {
        return doc.description
      }

      const vFile = await remark()
        .use(strip)
        .process(doc.body.raw)

      return String(vFile)
        .trim()
        .replace(/\n/g, ' ')
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
            visit(tree, 'heading', node => {
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

export default makeSource({
  contentDirPath: 'content',
  contentDirExclude: ['json'],
  documentTypes: [Post, Weekly],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeStarryNight,
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
