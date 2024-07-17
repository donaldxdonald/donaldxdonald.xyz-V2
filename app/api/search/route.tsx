import { allPosts } from 'content-collections'
import { AdvancedIndex, createSearchAPI } from '../../../lib/search/server'

export const { GET } = await createSearchAPI({
  indexes: allPosts.map<AdvancedIndex>(v => ({
    id: v.url,
    url: v.url,
    title: v.title,
    content: v.strip,
  })),
})
