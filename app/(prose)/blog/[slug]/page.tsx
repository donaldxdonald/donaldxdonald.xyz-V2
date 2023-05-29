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
  const ogImage = image || `https://donaldxdonald.xyz/og?title=${encodeURIComponent(title)}&date=${date}`

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
      <div className='h-screen hidden fixed top-0 right-[17%] translate-x-full xl:right-1/2 xl:translate-x-[34rem] md:flex flex-col items-center px-2 py-28'>
        <TOC tableOfContents={post?.toc || []} hrefPrefix={`/blog/${params.slug}`}></TOC>
      </div>
    </>
  )
}
