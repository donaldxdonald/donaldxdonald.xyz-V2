import {
  compileMDX as baseCompileMDX,
  Options as MDXOptions,
} from '@content-collections/mdx'
import { Context, Meta } from '@content-collections/core'
import remarkGfm from 'remark-gfm'
import { remarkHeading } from 'fumadocs-core/mdx-plugins'
import rehypeShiki from '@shikijs/rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypeLinkNewWindow, shikiOptions } from './rehype'

export function compileMDX(doc: {
  _meta: Meta
  content: string
},
context: Context,
options: MDXOptions = {},
) {
  const { remarkPlugins = [], rehypePlugins = [], ...rest } = options

  return baseCompileMDX(context, doc, {
    ...rest,
    remarkPlugins: [
      remarkGfm,
      remarkHeading,
      ...remarkPlugins,
    ],
    rehypePlugins: [
      [rehypeShiki, shikiOptions],
      [rehypeAutolinkHeadings, {
        properties: { className: ['header-anchor'], ariaHidden: true, tabIndex: -1 },
        content: {
          type: 'text',
          value: '#',
        },
      }],
      rehypeLinkNewWindow,
      ...rehypePlugins,
    ],
  })
}
