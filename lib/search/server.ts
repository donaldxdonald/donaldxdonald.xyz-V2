import { NextRequest, NextResponse } from 'next/server'
import Fuse from 'fuse.js'
import { StructuredData } from '../remark'
import { SortedResult } from './shared'

export interface AdvancedIndex {
  id: string
  title: string
  /**
   * Required if `tag` is enabled
   */
  tag?: string
  content: string
  /**
   * preprocess mdx content with `structure`
   */
  structuredData?: StructuredData
  url: string
}

export interface AdvancedOptions {
  indexes: AdvancedIndex[]
}

interface SearchAPI {
  GET: (request: NextRequest) => NextResponse<SortedResult[]>

  search: (
    query: string,
    options?: { locale?: string; tag?: string },
  ) => SortedResult[]
}

export interface Index {
  title: string
  content: string
  url: string
  keywords?: string
}

function create(search: SearchAPI['search']): SearchAPI {
  return {
    search,
    GET(request) {
      const query = request.nextUrl.searchParams.get('query')
      if (!query) return NextResponse.json([])

      return NextResponse.json(
        search(query, {
          tag: request.nextUrl.searchParams.get('tag') ?? undefined,
          locale: request.nextUrl.searchParams.get('locale') ?? undefined,
        }),
      )
    },
  }
}

export function createSearchAPI(
  options: AdvancedOptions,
): SearchAPI {
  return initSearchAPIAdvanced(options as AdvancedOptions)
}

export function initSearchAPIAdvanced({
  indexes,
}: AdvancedOptions): SearchAPI {
  const fuse = new Fuse(indexes, {
    keys: [
      {
        name: 'title',
        weight: 0.5,
      },
      {
        name: 'content',
        weight: 0.8,
      },
    ],
    includeMatches: true,
    includeScore: true,
    shouldSort: true,
  })

  return create(query => {
    const results = fuse.search(query, {
      limit: 10,
    })

    return results.map<SortedResult>(p => {
      const firstRange = p.matches?.[0]?.indices?.[0] || [0, 0]
      const target = p.item[(p.matches?.[0].key || 'content') as keyof AdvancedIndex] as string
      const start = Math.max(firstRange[0] - 10, 0)
      const end = Math.min(firstRange[1] + 100, target.length)
      return {
        type: 'page',
        content: p.item.content,
        id: p.item.id,
        url: p.item.url,
        title: p.item.title,
        matched: target.slice(start, end),
      }
    })
  })
}
