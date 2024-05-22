import { useDebounce } from '@uidotdev/usehooks'
import { Command } from 'cmdk'
import { Post, Weekly, allPosts, allWeeklies } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from "react"

export const SearchContext: FC = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [weeklies, setWeeklies] = useState<Weekly[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [query, setQuery] = useState('')
  const debounceQuery = useDebounce(query, 300)
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
      setWeeklies(allWeeklies)
      setPosts(sortedPosts)
      return
    }
    const includes = (a: string, b: string) => a.toLowerCase().includes(b.toLowerCase())
    const weeklyResults = sortedWeeklies.filter(v => {
      return includes(v.title, debounceQuery) || includes(v.strip, debounceQuery)
    })
    const postResults = sortedPosts.filter(v => {
      return includes(v.title, debounceQuery) || includes(v.strip, debounceQuery)
    })
    setWeeklies(weeklyResults)
    setPosts(postResults)
  }, [debounceQuery, sortedWeeklies, sortedPosts])

  function onValueChange(value: string) {
    console.log(value)

    // router.push(href)
  }

  return (
    <Command.Dialog className='raycast' open={open} onOpenChange={setOpen} onValueChange={onValueChange}>
      <Command.Input value={query} onValueChange={setQuery} />

      <Command.List>
        {loading && <Command.Loading>Hang on…</Command.Loading>}

        <Command.Empty>No results found.</Command.Empty>

        {
          weeklies.length > 0
            ? <Command.Group heading="Weekly">
              {
                weeklies.map(item => (
                  <Command.Item
                    key={item.title}
                    value={item.url}
                  >
                    {item.title}
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
                    key={item.title}
                    value={item.url}
                  >
                    {item.title}
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
