import { create } from 'zustand'
import { Song } from '../types/types'

type CurrentPlaylistStore = {
  currentSong: Song | null
  currentPlaylist: Song[]
  isPlaying: boolean
  shuffle: boolean
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentSong: (song: Song) => void
  clearCurrentSong: () => void
}

export const useCurrentPlaylistStore = create<CurrentPlaylistStore>()((set) => ({
  currentSong: null,
  currentPlaylist: [],
  isPlaying: false,
  shuffle: false,
  setIsPlaying: (isPlaying) => set(() => ({ isPlaying })),
  setCurrentSong: (song) => set((state) => {
    if (song.id === state.currentSong?.id) {
      return { isPlaying: !state.isPlaying }
    }
    return { currentSong: song, isPlaying: true }
  }),
  clearCurrentSong: () => set(() => ({ currentSong: null })),
}));
