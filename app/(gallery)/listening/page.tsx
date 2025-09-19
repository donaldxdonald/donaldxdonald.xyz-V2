'use client'
import { CSSProperties } from 'react'
import { motion } from 'motion/react'
import Tracks from 'content/json/tracks.json'
import { Track } from './type'

const gridLayout: CSSProperties = {
  gridTemplateColumns: 'repeat(auto-fit, minmax(12em, 1fr))',
}

// const title = 'I\'m listening...'
// const description = 'What\'s on my Spotify'

// export const metadata: Metadata = {
//   title,
//   description,
//   openGraph: {
//     title,
//     description,
//   },
//   twitter: {
//     title,
//     description,
//     card: 'summary_large_image',
//   },
// }

export default function ListeningPage() {
  const tracks = JSON.parse(JSON.stringify(Tracks)) as Track[]

  return (
    <div className="w-5/6 mx-auto xl:w-full">
      <h1 className="text-4xl font-serif">Listening</h1>
      <div className="mt-16 mb-36">
        <motion.ul className="grid gap-2 md:gap-4" style={gridLayout}>
          {
            tracks.map((v, i) => (
              <motion.a
                href={v.url}
                key={v.url}
                className="relative cursor-pointer aspect-square drop-shadow-md group"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: i * 0.02 } }}
                whileHover={{ scale: 1.3, zIndex: 10, transition: { ease: 'easeOut', delay: 0.2, duration: 0.25 } }}
              >
                <img className="aspect-square" src={v.album.image.url} alt={v.name}></img>
                <motion.p
                  className="absolute left-1/2 bottom-0 -translate-x-1/2 w-11/12 rounded-lg text-sm bg-gray-500 text-indigo-100 px-2 py-1 truncate"
                >
                  {v.name}
                  {' '}
                  -
                  {v.authorName}
                </motion.p>
              </motion.a>
            ))
          }
        </motion.ul>
      </div>
    </div>
  )
}
