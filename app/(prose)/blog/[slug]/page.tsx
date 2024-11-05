import { Metadata } from 'next'
import Post from '@/components/layout/post'
import { getPage } from '@/app/source'
import { TOC } from '../../../../components/mdx/TOC'

export async function generateMetadata(
  props: {
    params: Promise<{
      slug: string
    }>
  },
): Promise<Metadata | undefined> {
  const params = await props.params
  const postData = getPage([`blog/${params.slug}`])
  if (!postData) {
    return
  }

  const {
    title,
    description,
    image,
    date,
    slug,
  } = postData.data
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

export default async function PostPage(
  props: {
    params: Promise<{
      slug: string
    }>
  },
) {
  const params = await props.params
  const postData = getPage(['blog', params.slug])
  const post = postData?.data

  return (
    <>
      {
        post
          ? <Post post={post}></Post>
          : null
      }
      <div className="h-screen hidden fixed top-0 left-[50vw] translate-x-full lg:translate-x-[35vw] xl:translate-x-[30vw] 2xl:translate-x-[28rem] lg:flex flex-col items-center px-2 py-28">
        <TOC tableOfContents={post?.toc || []} hrefPrefix={`/blog/${params.slug}`}></TOC>
      </div>
    </>
  )
}
