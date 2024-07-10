import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { SortedResult } from './shared'

async function fetchDocs(api: string, query: string) {
  if (query.length === 0) return []
  const params = new URLSearchParams()
  params.set('query', query)
  const res = await fetch(`${api}?${params.toString()}`)
  if (!res.ok) throw new Error(await res.text())
  return (await res.json()) as SortedResult[]
}

export const useDocsSearch = (api = '/api/search') => {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce(search, 100)
  const [results, setResults] = useState<SortedResult[]>([])

  useEffect(() => {
    fetchDocs(api, debouncedValue).then(r => {
      setResults(r)
    })
  }, [debouncedValue, api])

  return {
    search,
    setSearch,
    results,
  }
}
