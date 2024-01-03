import { create } from 'zustand'
import { Song } from '../types/types'
import SongRepository from '../storage/song.repository'

type CurrentPlaylistStore = {
  currentSong: Song | null
  currentPlaylist: Song[]
  isPlaying: boolean
  shuffle: boolean
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentSong: (song: Song) => void
  clearCurrentSong: () => void
  setPreviousSong: () => void
  setNextSong: () => void
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

    const songRepository = new SongRepository()
    const playlist = songRepository.getByAlbumId(song.album)
    return { currentSong: song, isPlaying: true, currentPlaylist: playlist }
  }),
  clearCurrentSong: () => set(() => ({ currentSong: null })),
  setPreviousSong: () => set((state) => {
    const currentSongIndex = state.currentPlaylist.findIndex((song) => song.id === state.currentSong?.id)
    if (currentSongIndex === 0) {
      return { currentSong: state.currentPlaylist[state.currentPlaylist.length - 1] }
    }
    return { currentSong: state.currentPlaylist[currentSongIndex - 1] }
  }),
  setNextSong: () => set((state) => {
    const currentSongIndex = state.currentPlaylist.findIndex((song) => song.id === state.currentSong?.id)
    if (currentSongIndex === state.currentPlaylist.length - 1) {
      return { currentSong: state.currentPlaylist[0] }
    }
    return { currentSong: state.currentPlaylist[currentSongIndex + 1] }
  }),
}));
