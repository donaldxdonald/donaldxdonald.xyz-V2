import dayjs from 'dayjs'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { DocumentTypes } from '../../.contentlayer/generated/types'

export default function Post({ post }: {post: DocumentTypes | undefined}) {
  if (!post) {
    notFound()
  }

  const MDX = useMDXComponent(post.body.code)

  return (
    <section className='flex flex-col mt-16 mb-56 w-[90%]'>
      <h1 className="font-bold text-4xl font-serif tracking-tighter mt-5">
        <Balancer>{post.title}</Balancer>
      </h1>
      <span className='text-md text-gray-400 my-3 py-2 border-t border-purple-900 w-fit font-mono'>
        {dayjs(post.date).format('YYYY-MM-DD hh:mm')} | (<Link className='hover:underline' target='__blank' href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>license</Link>)
      </span>
      <article className='prose prose-slate max-w-3xl font-display mt-5'>
        <MDX></MDX>
      </article>
    </section>
  )
}
