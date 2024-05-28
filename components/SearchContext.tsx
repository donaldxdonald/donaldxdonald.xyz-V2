import { Command } from 'cmdk'
import { Post, Weekly, allPosts, allWeeklies } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
import { FC, useDeferredValue, useEffect, useState } from "react"
import { SocialLinks } from '../lib/constants'

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
  const [weeklies, setWeeklies] = useState<Array<Weekly | SearchItem>>([])
  const [posts, setPosts] = useState<Array<Post | SearchItem>>([])
  const [query, setQuery] = useState('')
  // const [isComposing, setIsComposing] = useState(false)
  const debounceQuery = useDeferredValue(query)
  const router = useRouter()

  const sortedWeeklies = allWeeklies.sort((a, b) => +new Date(b.date) - +new Date(a.date))
  const sortedPosts = allPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

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

  useEffect(() => {
    if (!debounceQuery) {
      setWeeklies([])
      setPosts([])
      return
    }
    const includes = (a: string, b: string) => a.toLowerCase().includes(b.toLowerCase())
    const weeklyResults = sortedWeeklies
      .filter(v => {
        return includes(v.title, debounceQuery) || includes(v.strip, debounceQuery)
      })
      .map<SearchItem>(v => {
      return {
        url: v.url,
        title: v.title,
        date: v.date,
        ...trimContent(v, debounceQuery),
      }
    })

    const postResults = sortedPosts.filter(v => {
      return includes(v.title, debounceQuery) || includes(v.strip, debounceQuery)
    })
      .map<SearchItem>(v => {
      return {
        url: v.url,
        title: v.title,
        date: v.date,
        ...trimContent(v, debounceQuery),
      }
    })
    setWeeklies(weeklyResults)
    setPosts(postResults)
  }, [debounceQuery, sortedWeeklies, sortedPosts])

  function onSelectItem(item: Post | Weekly | SearchItem) {
    router.push(`../${item.url}`)
    setOpen(false)
  }

  function trimContent(item: Weekly | Post, keyword: string): HighlightItem {
    let content = item.title
    let startIndex = content.toLowerCase().indexOf(keyword.toLowerCase())
    if (startIndex === -1) {
      content = item.strip
      startIndex = content.toLowerCase().indexOf(keyword.toLowerCase())
    }
    const endIndex = startIndex + keyword.length
    const trimed = content.slice(
      Math.max(startIndex - 8, 0),
      Math.min(endIndex + 60, content.length),
    )
    const trimedStart = trimed.toLowerCase().indexOf(keyword.toLowerCase())
    return {
      content: trimed,
      start: trimedStart,
      end: trimedStart + keyword.length,
    }
  }

  const contactList = SocialLinks

  return (
    <Command.Dialog shouldFilter={false} className='raycast' open={open} onOpenChange={setOpen}>
      <Command.Input
        placeholder="what's on your mind?"
        value={query}
        onValueChange={v => setQuery(v)}
      />

      <Command.List>
        {
          weeklies.length > 0
            ? <Command.Group heading="Weekly">
              {
                weeklies.map(item => (
                  <Command.Item
                    className='vertical'
                    key={item.url}
                    value={item.url}
                    onSelect={() => onSelectItem(item)}
                  >
                    <p className='truncate max-w-[98%]'>{'strip' in item ? item.strip : item.content}</p>
                    <div className='text-xs text-[--gray9] flex items-center justify-between w-full'>
                      <p>{item.title}</p>
                      <span>{item.date.split(' ')[0]}</span>
                    </div>
                  </Command.Item>
                ))
              }
            </Command.Group>
            : null
        }
        {
          posts.length > 0
            ? <Command.Group heading="Post">
              {
                posts.map(item => (
                  <Command.Item
                    className='vertical'
                    key={item.url}
                    value={item.url}
                    onSelect={() => onSelectItem(item)}
                  >
                    <p className='truncate max-w-[98%]'>{'strip' in item ? item.strip : item.content}</p>
                    <div className='text-xs text-[--gray9] flex items-center justify-between w-full'>
                      <p>{item.title}</p>
                      <span>{item.date.split(' ')[0]}</span>
                    </div>
                  </Command.Item>
                ))
              }
            </Command.Group>
            : null
        }
        {
          weeklies.length === 0 && posts.length === 0
            ? <Command.Group heading="Contact">
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
            : null
        }
      </Command.List>
    </Command.Dialog>
  )
}
