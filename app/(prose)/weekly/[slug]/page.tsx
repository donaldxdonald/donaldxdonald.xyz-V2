import { Metadata } from 'next'
import Post from '@/components/layout/post'
import { getPage } from '../../../source'

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}): Promise<Metadata | undefined> {
  const postData = getPage([`weekly/${params.slug}`])

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
  const url = `https://donaldxdonald.xyz/weekly/${slug}`
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

export default function PostPage({ params }: {
  params: {
    slug: string
  }
}) {
  const postData = getPage(['weekly', params.slug])
  const post = postData?.data

  return (
    post ? <Post post={post}></Post> : null
  )
}
