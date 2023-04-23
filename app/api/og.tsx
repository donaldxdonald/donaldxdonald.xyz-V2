import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const postDate = searchParams.get('date')

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: 'Jost',
          backgroundColor: '#e9d5ff',
          backgroundImage: new URL("../../public/noise.png", import.meta.url).toString(),
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '1.5rem',
            letterSpacing: '-0.05em',
            fontSize: '1.2rem',
          }}
        >DonaldxDonald</span>
        {
          postDate && <span
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '1.5rem',
              letterSpacing: '-0.05em',
              fontSize: '1.2rem',
            }}
          >{postDate}</span>
        }
        <h1
          style={{
            fontSize: "3rem",
            whiteSpace: 'normal',
            margin: '1em',
          }}
        >
          { postTitle || '' }
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}