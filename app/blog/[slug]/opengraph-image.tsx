import { allPosts } from "contentlayer/generated"
import { ImageResponse } from "next/server"
import PostOG from "../../../components/shared/post-og"

export const runtime = "edge"

export default async function og({ params }: {params: {slug: string}}) {
  const fontJost = await fetch(
    new URL(
      '../node_modules/@fontsource/jost/files/jost-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then(res => res.arrayBuffer())

  const post = allPosts.find(v => v.slug === params.slug)
  const {
    title = 'Cannot find post',
    date = Date.now().toString(),
  } = post || {}

  return new ImageResponse(
    (
      <PostOG title={title} date={date} type="Blog"></PostOG>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Jost',
          data: fontJost,
        },
      ],
    },
  )
}
