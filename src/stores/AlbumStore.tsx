import { create } from 'zustand'
import { Album } from '../types/types'

type AlbumStore = {
  albums: Album[]
  setAlbums: (artists: Album[]) => void
}

export const useAlbumStore = create<AlbumStore>()((set) => ({
  albums: [],
  setAlbums: (albums) => set(() => ({ albums: albums }))
}));
