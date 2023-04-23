import { allPosts } from 'contentlayer/generated'
import dayjs from 'dayjs'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

export default function Post({ params }: {params: {slug: string}}) {
  const post = allPosts.find(v => v.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDX = useMDXComponent(post.body.code)

  return (
    <section className='flex flex-col mt-16 mb-56'>
      <h1 className="font-bold text-3xl font-serif tracking-tighter mt-5">
        <Balancer>{post.title}</Balancer>
      </h1>
      <span className='text-md text-gray-400 my-3 py-2 border-t border-purple-900 w-fit'>{dayjs(post.date).format('YYYY-MM-DD hh:mm')}</span>
      <article className='prose prose-slate max-w-3xl font-display mt-5'>
        <MDX></MDX>
      </article>
    </section>
  )
}
