export interface Artist {
  id?: number
  name: string
  genres?: string[]
  members?: string[]
  image: string
  webpage?: string
}

export interface Song {
  id?: number
  title: string
  artist: Artist
  album: Album
  genre: string
  length: number
  file?: string
}

export interface Album {
  id?: number
  title: string
  artist?: Artist
  year?: number
  image?: string
  songs?: Song[]
}
// Unoptional most of the fields after 'API' is ready
