import { allDocuments } from "contentlayer/generated"
import { AdvancedIndex, createSearchAPI } from "../../../lib/search/server"

export const { GET } = createSearchAPI({
  indexes: allDocuments.map<AdvancedIndex>(v => ({
    id: v.url,
    url: v.url,
    title: v.title,
    content: v.strip,
  })),
})