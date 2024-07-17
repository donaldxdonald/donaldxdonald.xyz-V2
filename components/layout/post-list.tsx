'use client'
import dayjs from 'dayjs'
import Link from 'next/link'
import { Post } from 'content-collections'
import { groupBy } from '../../lib/utils'

export default function PostList({ list }: { list: Post[] }) {
  const groupedList = groupBy(list, item => dayjs(item.date).format('YYYY'))
  const groupedSortedList = Object.keys(groupedList)
    .sort((a, b) => {
      return Number(b) - Number(a)
    })
    .map(year => {
      const subList = groupedList[year]
      return [
        year,
        subList.sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1),
      ] as const
    })

  return (
    <section className="flex flex-col gap-4 mt-8 md:mt-16 mb-56 w-full">
      {
        groupedSortedList.map(([year, sortedList]) => (
          <div className="mt-3" key={year}>
            <h2 className="text-4xl opacity-75 font-bold tracking-tighter my-5 ml-5">{year}</h2>
            <ul>
              {
                sortedList.map((post, i) => (
                  <li key={post._meta.filePath}>
                    <Link
                      href={post.url}
                      className="animate-fade-up opacity-0 px-5 tracking-tight py-3 flex justify-between text-lg w-full rounded-md text-slate-600 hover:text-purple-800 hover:bg-purple-100"
                      style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'forwards' }}
                    >
                      <span className="flex-1 max-w-[80%] truncate">{ post.title }</span>
                      <span className="text-sm text-gray-400 font-mono">{ dayjs(post.date).format('YYYY-MM-DD') }</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </section>
  )
}
