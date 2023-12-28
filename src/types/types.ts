export interface Artist {
  id: number
  name: string
  genres: string[]
  members: string[]
  image: string
  webpage: string
}

export interface Song {
  title: string
  artist: number
  genre: string
  length: number
  file?: string
}

export interface Album {
  id?: number
  title: string
  artist: number
  year: number
  image: string
  songs: Song[]
}
// Unoptional most of the fields after 'API' is ready
