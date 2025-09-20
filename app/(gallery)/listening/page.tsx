'use client'
import { CSSProperties } from 'react'
import { motion, stagger, Variants } from 'motion/react'
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delayChildren: stagger(0.5),
      },
    },
  }

  const coverVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
    },
    hover: {
      scale: 1.1,
      zIndex: 10,
      transition: {
        when: 'beforeChildren',
        duration: 0.15,
      },
    },
  }
  const infoVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <div className="w-5/6 mx-auto xl:w-full">
      <h1 className="text-4xl font-serif">Listening</h1>
      <div className="mt-16 mb-36">
        <motion.ul className="grid gap-2 md:gap-4" style={gridLayout} variants={containerVariants} initial="hidden" animate="visible">
          {
            tracks.map(v => (
              <motion.div
                key={v.url}
                className="relative cursor-pointer aspect-square drop-shadow-md"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={coverVariants}
              >
                <img className="aspect-square" src={v.album.image.url} alt={v.name}></img>
                <motion.div
                  className="absolute left-0 bottom-0 w-full text-center"
                  variants={infoVariants}
                >
                  <a
                    className="w-11/12 inline-block mx-auto rounded-lg text-sm bg-gray-500 text-indigo-100 px-2 py-1 truncate cursor-alias"
                    href={v.url}
                  >
                    {v.name}
                    {' '}
                    -
                    {v.authorName}
                  </a>
                </motion.div>
              </motion.div>
            ))
          }
        </motion.ul>
      </div>
    </div>
  )
}
