import { allWeeklies } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

export default function Post({ params }: {params: {slug: string}}) {
  const post = allWeeklies.find(v => v.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDX = useMDXComponent(post.body.code)

  return (
    <section className='flex flex-col gap-4 mt-16 mb-56 w-1/2 font-display'>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <article className='prose'>
        <MDX ></MDX>
      </article>
    </section>
  )
}
