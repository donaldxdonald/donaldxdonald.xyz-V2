import dayjs from 'dayjs'
import Link from 'next/link'
import { DocumentTypes } from '../../.contentlayer/generated/types'

export default function PostList({ list }: {list: DocumentTypes[]}) {
  const sortedList = list.sort((a, b) => {
    return dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1
  })

  return (
    <section className="flex flex-col gap-4 mt-16 mb-56 w-3/4 font-display tracking-tighter">
      {
        sortedList.map((item, i) => (
          <Link
            key={item._id}
            href={item.url}
            className='animate-fade-up opacity-0 px-5 py-3 flex flex-col text-lg w-full rounded-md text-slate-600 hover:text-purple-800 hover:bg-purple-50'
            style={{ animationDelay: `${0.5 + i * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <span>{ item.title }</span>
            <hr className='text-purple-900  my-3' />
            <span className='text-sm text-gray-400'>{ item.date }</span>
          </Link>
        ))
      }
    </section>
  )
}
