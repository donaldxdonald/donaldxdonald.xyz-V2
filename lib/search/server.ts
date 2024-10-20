import { NextRequest, NextResponse } from 'next/server'
import { InternalTypedDocument, Results, Tokenizer, create, insertMultiple, search } from '@orama/orama'
import { Position, Highlight } from '@orama/highlight'
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
  // structuredData?: StructuredData
  url: string
}

export interface AdvancedOptions {
  indexes: AdvancedIndex[]
}

interface SearchAPI {
  GET: (request: NextRequest) => Promise<NextResponse<SortedResult[]>>

  search: (
    query: string,
    options?: { locale?: string; tag?: string },
  ) => Promise<SortedResult[]>
}

export interface Index {
  title: string
  content: string
  url: string
  keywords?: string
}

const chineseTokenizer: Tokenizer = {
  language: 'english',
  normalizationCache: new Map(),
  tokenize: (raw: string) => {
    const segmenter = new Intl.Segmenter('zh', { granularity: 'word' })
    return Array.from(segmenter.segment(raw)).map(v => v.segment)
  },
}

function createSearch(searchFn: SearchAPI['search']): SearchAPI {
  return {
    search: searchFn,
    GET: async request => {
      const query = request.nextUrl.searchParams.get('query')
      if (!query) return NextResponse.json([])

      return NextResponse.json(
        await searchFn(query, {
          tag: request.nextUrl.searchParams.get('tag') ?? undefined,
          locale: request.nextUrl.searchParams.get('locale') ?? undefined,
        }),
      )
    },
  }
}

export function createSearchAPI(
  options: AdvancedOptions,
): Promise<SearchAPI> {
  return initSearchAPIAdvanced(options as AdvancedOptions)
}

export async function initSearchAPIAdvanced({
  indexes,
}: AdvancedOptions): Promise<SearchAPI> {
  const db = create({
    schema: {
      title: 'string',
      content: 'string',
      url: 'string',
    },
    components: {
      tokenizer: chineseTokenizer,
    },
  })

  await insertMultiple(db, indexes as never[])
  const highlighter = new Highlight({
    HTMLTag: 'mark',
    CSSClass: 'search-highlight',
  })

  return createSearch(async query => {
    const results = (await search(db, {
      term: query,
    })) as Results<InternalTypedDocument<AdvancedIndex>>

    const handledResults: SortedResult[] = []
    results.hits.forEach(r => {
      const p = r.document
      let resultForLink: SortedResult | undefined = undefined
      for (const k of ['content', 'title']) {
        const v = r.document[k]
        const highlighted = highlighter.highlight(v, query)
        for (const position of highlighted.positions) {
          if (!position) continue
          resultForLink = handleRange(p, k as keyof AdvancedIndex, position)
          break
        }
        if (resultForLink) break
      }
      if (resultForLink) {
        handledResults.push(resultForLink)
      }
    })
    return handledResults
  })
}

function handleRange(item: AdvancedIndex, key: keyof AdvancedIndex, range: Position): SortedResult {
  const target = item[key] || ''

  const start = range.start
  const end = Math.min(range.end + 100, target.length)
  return {
    type: 'page',
    content: item.content,
    id: item.id,
    url: item.url,
    title: item.title,
    matched: target.slice(start, end),
  }
}
