export interface Artist {
  name: string
  image: SpotifyApi.ImageObject
}

export interface Track {
  name: string
  url: string
  authorName: string
  album: {
    name: string
    url: string
    image: SpotifyApi.ImageObject
  }
}
