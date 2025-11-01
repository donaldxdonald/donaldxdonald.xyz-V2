import { Metadata } from 'next'
import Post from '@/components/layout/post'
import { weeklySource } from '../../../source'

function fixSlug(slug: string) {
  return slug.startsWith('weekly_')
    ? slug.replace('weekly_', 'weekly-')
    : slug
}

export async function generateMetadata(
  props: {
    params: Promise<{
      slug: string
    }>
  },
): Promise<Metadata | undefined> {
  const params = await props.params
  const fileName = fixSlug(params.slug)

  const postData = weeklySource.getPage([fileName])

  if (!postData) {
    return
  }

  const {
    title,
    description,
    image,
    date,
  } = postData.data
  const url = `https://donaldxdonald.xyz/weekly/${fileName}`
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
  const postData = weeklySource.getPage([fixSlug(params.slug)])

  if (!postData) {
    return null
  }

  return <Post page={postData}></Post>
}
