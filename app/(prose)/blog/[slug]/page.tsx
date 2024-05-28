import Post from '@/components/layout/post'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import { TOC } from '../../../../components/mdx/TOC'

export async function generateMetadata({
  params,
}: {params: {slug: string}}): Promise<Metadata | undefined> {
  const post = allPosts.find(v => v.slug === params.slug)
  if (!post) {
    return
  }

  const {
    title,
    description,
    image,
    date,
    slug,
  } = post
  const url = `https://donaldxdonald.xyz/blog/${slug}`
  const ogImage = image || `https://donaldxdonald.xyz/og?title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function PostPage({ params }: {params: {slug: string}}) {
  const post = allPosts.find(v => v.slug === params.slug)
  return (
    <>
      <Post post={post}></Post>
      <div className='h-screen hidden fixed top-0 left-[50vw] translate-x-full lg:translate-x-[35vw] xl:translate-x-[30vw] 2xl:translate-x-[28rem] lg:flex flex-col items-center px-2 py-28'>
        <TOC tableOfContents={post?.toc || []} hrefPrefix={`/blog/${params.slug}`}></TOC>
      </div>
    </>
  )
}
