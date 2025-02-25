import { Metadata } from 'next'
import Post from '@/components/layout/post'
import { getPage } from '../../../source'

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

  const postData = getPage([`weekly/${fileName}`])

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

export default async function PostPage(
  props: {
    params: Promise<{
      slug: string
    }>
  },
) {
  const params = await props.params
  const postData = getPage(['weekly', fixSlug(params.slug)])
  const post = postData?.data

  return (
    post ? <Post post={post}></Post> : null
  )
}
