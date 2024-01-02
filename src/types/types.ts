export interface Artist {
  id: number
  name: string
  genres: string[]
  members: string[]
  image: string
  webpage: string
}

export interface Song {
  id: number
  title: string
  album: number
  genre: string
  length?: number
  file: string
}

export interface Album {
  id: number
  title: string
  artist: number
  genres: string[]
  year: number
  image: string
}
// Unoptional most of the fields after 'API' is ready
