import { createMDXSource } from '@fumadocs/content-collections'
import { loader } from 'fumadocs-core/source'
import { Post, allPosts } from 'content-collections'

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/',
  source: createMDXSource(allPosts, []),
  slugs(info) {
    return info.flattenedPath.split('/')
  },
})

export const getBlogs = () => getPagesByName('Blog')

export const getWeeklies = () => getPagesByName('Weekly')

const getPagesByName = (folderName: 'Blog' | 'Weekly') => {
  const result: Post[] = []
  const folder = pageTree.children.find(v => v.name === folderName && v.type === 'folder') as Exclude<(typeof pageTree.children)[0], { type: 'page' | 'separator' }>
  const children = folder?.children || []

  for (const child of children) {
    if (child.type !== 'page') {
      continue
    }
    const p = child as Exclude<typeof child, { type: 'folder' | 'separator' }>
    const page = getPage(p.url.split('/').slice(1))

    if (page) {
      result.push(page.data)
    }
  }

  return result
}
