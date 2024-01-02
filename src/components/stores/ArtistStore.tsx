import { create } from 'zustand'
import { Artist } from '../../types/types'

type ArtistStore = {
  artists: Artist[]
  setArtists: (artists:Artist[]) => void
}

export const useArtistStore = create<ArtistStore>()((set) => ({
  artists: [],
  setArtists: (artists) => set(() => ({ artists: artists }))
}))