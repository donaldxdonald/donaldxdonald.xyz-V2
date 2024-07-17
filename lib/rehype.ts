import { RehypeShikiOptions } from "@shikijs/rehype"

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
