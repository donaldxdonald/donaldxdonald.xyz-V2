import { Plugin } from "unified"

export interface StructuredData {
  headings: Heading[]
  /**
   * Refer to paragraphs, a heading may contain multiple contents as well
   */
  contents: Content[]
}
interface Heading {
  id: string
  content: string
}
interface Content {
  heading: string | undefined
  content: string
}

export type TOCItem = {
  text: string
  slug: string
  depth: number
}

export const fillWithTOC = (emptyTOC: TOCItem[], depth = 2): Plugin => {
  return () => (tree, file) => {
    const preTOC = file.data.toc as {
      title: string
      url: `#${string}`
      depth: number
    }[] || []
    for (const item of preTOC) {
      if (item.depth === depth) {
        emptyTOC.push({
          depth: item.depth,
          text: item.title,
          slug: item.url.split('#')[1],
        })
      }
    }
  }
}
