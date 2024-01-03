import { create } from 'zustand'
import { Song } from '../types/types'

type CurrentPlaylistStore = {
  currentSong: Song | null
  currentPlaylist: Song[]
  setCurrentSong: (song: Song) => void
  clearCurrentSong: () => void
}

export const useCurrentPlaylistStore = create<CurrentPlaylistStore>()((set) => ({
  currentSong: null,
  currentPlaylist: [],
  setCurrentSong: (song) => set(() => ({ currentSong: song })),
  clearCurrentSong: () => set(() => ({ currentSong: null })),
}));
