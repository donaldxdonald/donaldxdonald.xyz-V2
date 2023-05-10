import { allWeeklies } from 'contentlayer/generated'
import { Metadata } from 'next'
import Post from '../../../components/layout/post'

export async function generateMetadata({
  params,
}: {params: {slug: string}}): Promise<Metadata | undefined> {
  const post = allWeeklies.find(v => v.slug === params.slug)
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
  const url = `https://donaldxdonald.xyz/weekly/${slug}`
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
  const post = allWeeklies.find(v => v.slug === params.slug)

  return (
    <Post post={post}></Post>
  )
}
