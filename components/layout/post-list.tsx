'use client'
import { format, isBefore } from 'date-fns'
import { Link } from 'next-view-transitions'
import { AnimatePresence, motion } from 'motion/react'
import { Post } from 'content-collections'
import { groupBy } from '../../lib/utils'

export default function PostList({ list }: { list: Post[] }) {
  const groupedList = groupBy(list, item => format(item.date, 'yyyy'))
  const groupedSortedList = Object.keys(groupedList)
    .sort((a, b) => {
      return Number(b) - Number(a)
    })
    .map(year => {
      const subList = groupedList[year]
      return [
        year,
        subList.sort((a, b) => isBefore(a.date, b.date) ? 1 : -1),
      ] as const
    })

  return (
    <AnimatePresence>
      <motion.section className="flex flex-col gap-4 mt-8 md:mt-16 mb-56 w-full">
        {
          groupedSortedList.map(([year, sortedList]) => (
            <div className="mt-3" key={year}>
              <motion.h2 className="text-3xl md:/text-4xl opacity-75 font-bold tracking-tighter my-5 ml-2 md:ml-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{year}</motion.h2>
              <motion.ul>
                {
                  sortedList.map((post, i) => (
                    <motion.li key={post._meta.filePath} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { type: 'spring', delay: i * 0.02 } }}>
                      <Link
                        href={post.url}
                        className="px-2 md:px-5 tracking-tight py-3 flex justify-between text-sm md:text-lg w-full rounded-md text-slate-600 hover:text-purple-800 hover:bg-purple-100"
                      >
                        <span className="flex-1 max-w-[80%] truncate">{ post.title }</span>
                        <span className="text-xs md:text-sm text-gray-400 font-mono">{ format(post.date, 'yyyy-MM-dd') }</span>
                      </Link>
                    </motion.li>
                  ))
                }
              </motion.ul>
            </div>
          ))
        }
      </motion.section>
    </AnimatePresence>
  )
}
