import { Command } from 'cmdk'
import { Post } from 'content-collections'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from "react"
import { SocialLinks } from '../lib/constants'
import { useDocsSearch } from '../lib/search/client'
import { SortedResult } from '../lib/search/shared'

type HighlightItem = {
  content: string
  start: number
  end: number
}

type SearchItem = {
  title: string
  url: string
  date: string
} & HighlightItem

export const SearchContext: FC = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { search: query, setSearch: setQuery, results } = useDocsSearch()

  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener('keydown', keydown)
    return () => document.removeEventListener('keydown', keydown)
  }, [])

  function onSelectItem(item: Post | SearchItem | SortedResult) {
    router.push(`../${item.url}`)
    setOpen(false)
  }

  const contactList = SocialLinks

  return (
    <Command.Dialog shouldFilter={false} className="raycast" open={open} onOpenChange={setOpen}>
      <Command.Input
        placeholder="what's on your mind?"
        value={query}
        onValueChange={v => setQuery(v)}
      />

      <Command.List>
        {
          results.length > 0
            ? (
              <Command.Group heading="Results">
                {
                  results.map(item => (
                    <Command.Item
                      className="vertical"
                      key={item.url}
                      value={item.url}
                      onSelect={() => onSelectItem(item)}
                    >
                      <p className="truncate max-w-[98%]">{item.matched}</p>
                      <div className="text-xs text-[--gray9] flex items-center justify-between w-full">
                        <p>{item.title}</p>
                        {/* <span className='font-mono'>{item.date.split(' ')[0]}</span> */}
                      </div>
                    </Command.Item>
                  ))
                }
              </Command.Group>
            )
            : (
              <Command.Group heading="Contact">
                {
                  contactList.map(item => (
                    <Command.Item
                      key={item.link}
                      value={item.link}
                      onSelect={() => window.open(item.link)}
                    >
                      {item.desc}
                    </Command.Item>
                  ))
                }
              </Command.Group>
            )
        }
      </Command.List>
    </Command.Dialog>
  )
}
