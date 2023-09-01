import { Image } from "@spotify/web-api-ts-sdk"

export interface Artist {
  name: string
  image: Image
}

export interface Track {
  name: string
  url: string
  authorName: string
  album: {
    name: string
    url: string
    image: Image
  }
}
