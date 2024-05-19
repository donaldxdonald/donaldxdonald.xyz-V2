
import { Grammar, common, createStarryNight } from '@wooorm/starry-night'
import { ElementContent, Root } from 'hast'
import { toString } from 'hast-util-to-string'
import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

type Options = {
  grammars?: Grammar[]
}

export const rehypeStarryNight: Plugin<[Options], Root> = (options: Options = {}) => {
  const grammars = options.grammars || common
  const starryNightPromise = createStarryNight(grammars)
  const prefix = 'language-'

  return async function(tree) {
    const starryNight = await starryNightPromise

    visit(tree, 'element', (node, index, parent) => {
      if (!parent || index === null || index === undefined || node.tagName !== 'pre') {
        return
      }

      const head = node.children[0]

      if (
        !head ||
        head.type !== 'element' ||
        head.tagName !== 'code' ||
        !head.properties
      ) {
        return
      }

      const classes = head.properties.className

      if (!Array.isArray(classes)) return

      const language = classes.find(
        d => typeof d === 'string' && d.startsWith(prefix),
      )

      if (typeof language !== 'string') return

      const scope = starryNight.flagToScope(language.slice(prefix.length))

      // Maybe warn?
      if (!scope) return

      const fragment = starryNight.highlight(toString(head), scope)
      const children = fragment.children as ElementContent[]

      parent.children.splice(index, 1, {
        type: 'element',
        tagName: 'div',
        properties: {
          className: [
            'highlight',
            'highlight-' + scope.replace(/^source\./, '').replace(/\./g, '-'),
          ],
        },
        children: [{ type: 'element', tagName: 'pre', properties: {}, children }],
      })
    })
  }
}
