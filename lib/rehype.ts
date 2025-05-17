import { RehypeShikiOptions } from '@shikijs/rehype'
import { Element } from 'hast'
import { Transformer } from 'unified'
import { visit } from 'unist-util-visit'

export const shikiOptions: RehypeShikiOptions = {
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

export const rehypeLinkNewWindow = (): Transformer => tree => {
  visit(tree, 'element', n => {
    const node = n as Element
    if (node.tagName === 'a' && node.properties?.href) {
      node.properties.target = '_blank'
      node.properties.rel = 'noopener noreferrer'
    }
  })
}
