import { Metadata } from 'next'
import Post from '@/components/layout/post'
import { blogSource } from '@/app/source'
import { TOC } from '../../../../components/mdx/TOC'

export async function generateMetadata(
  props: {
    params: Promise<{
      slug: string
    }>
  },
): Promise<Metadata | undefined> {
  const params = await props.params
  const postData = blogSource.getPage([params.slug])
  if (!postData) {
    return
  }

  const {
    title,
    description,
    image,
    date,
  } = postData.data
  const url = `https://donaldxdonald.xyz/blog/${params.slug}`
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
  const postData = blogSource.getPage([params.slug])

  if (!postData) {
    return null
  }

  return (
    <>
      <Post page={postData}></Post>
      <div className="h-screen hidden fixed top-0 left-[50vw] translate-x-full lg:translate-x-[35vw] xl:translate-x-[30vw] 2xl:translate-x-112 lg:flex flex-col items-center px-2 py-28">
        <TOC tableOfContents={[]} hrefPrefix={`/blog/${params.slug}`}></TOC>
      </div>
    </>
  )
}
