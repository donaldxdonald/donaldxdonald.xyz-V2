import dayjs from 'dayjs'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'
import { useMDXComponent } from '@content-collections/mdx/react'
import { Post as PostType } from 'content-collections'

export default function Post({ post }: {
  post: PostType
}) {
  if (!post) {
    notFound()
  }

  const MDX = useMDXComponent(post.mdx)

  return (
    <section className="flex flex-col mt-16 mb-56">
      <h1 className="font-bold text-4xl font-serif tracking-tighter mt-5">
        <Balancer>{post.title}</Balancer>
      </h1>
      <span className="text-md text-gray-400 my-3 py-2 border-t border-purple-900 w-fit font-mono">
        {dayjs(post.date).format('YYYY-MM-DD hh:mm')}
        {' '}
        | (
        <Link className="hover:underline" target="__blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">license</Link>
        )
      </span>
      <article className="prose prose-slate max-w-3xl font-display mt-5">
        <MDX></MDX>
      </article>
    </section>
  )
}
