import { format } from 'date-fns'
import { Link } from 'next-view-transitions'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'
import { getMDXComponents } from '../mdx/mdx-components'
import type { BlogPost } from '@/app/source'

export default async function Post({ page }: {
  page: BlogPost
}) {
  if (!page) {
    notFound()
  }

  const { data } = page
  const MDXContent = page.data.body
  const components = getMDXComponents()

  return (
    <section className="flex flex-col mt-6 md:mt-16 mb-56">
      <h1 className="font-bold text-4xl font-serif tracking-tighter mt-5">
        <Balancer>{data.title}</Balancer>
      </h1>
      <span className="text-md text-gray-400 my-3 py-2 border-t border-purple-900 w-fit font-mono">
        {format(data.date, 'yyyy-MM-dd HH:mm')}
        {' '}
        | (
        <Link className="hover:underline" target="__blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">license</Link>
        )
      </span>
      <article className="prose prose-slate max-w-3xl font-display mt-5">
        <MDXContent components={components} />
      </article>
    </section>
  )
}
