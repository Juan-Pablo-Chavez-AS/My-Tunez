import { create } from 'zustand'
import { Song } from '../types/types'

type AlbumStore = {
  songs: Song[]
  setSongs: (songs: Song[]) => void
}

export const useSongStore = create<AlbumStore>()((set) => ({
  songs: [],
  setSongs: (songs) => set(() => ({ songs: songs }))
}));
