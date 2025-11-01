import { blog, weekly } from '@/.source'
import { createSearchAPI } from '../../../lib/search/server'

// Combine blog and weekly posts
const allPosts = [...blog.docs, ...weekly.docs]

export const { GET } = await createSearchAPI({
  indexes: await Promise.all(allPosts.map(async v => {
    // Load the page content to get structured data
    return {
      id: v.info.path,
      url: `/${v.info.path}`,
      title: v.title,
      content: v.structuredData?.contents.map(c => c.content).join(' ') || '',
    }
  })),
})
