import { create } from 'zustand'
import { Song } from '../types/types'
import SongRepository from '../storage/song.repository'

type CurrentPlaylistStore = {
  currentSong: Song | null
  currentPlaylist: Song[]
  isPlaying: boolean
  shuffle: boolean
  shufflePlaylist: Song[]
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentSong: (song: Song) => void
  clearCurrentSong: () => void
  setPreviousSong: () => void
  setNextSong: () => void
  toggleShuffleOn: () => void
  toggleShuffleOff: () => void
}

export const useCurrentPlaylistStore = create<CurrentPlaylistStore>()((set) => ({
  currentSong: null,
  currentPlaylist: [],
  isPlaying: false,
  shuffle: false,
  shufflePlaylist: [],
  setIsPlaying: (isPlaying) => set(() => ({ isPlaying })),
  setCurrentSong: (song) => set((state) => {
    if (song.id === state.currentSong?.id) {
      return { isPlaying: !state.isPlaying }
    }

    const songRepository = new SongRepository()
    const playlist = songRepository.getByAlbumId(song.album)
    return { currentSong: song, isPlaying: true, currentPlaylist: playlist, shuffle: false, shufflePlaylist: [] }
  }),
  clearCurrentSong: () => set(() => ({ currentSong: null, setShuffle: false, shufflePlaylist: [] })),
  setPreviousSong: () => set((state) => {
    const playlist = state.shuffle ? state.shufflePlaylist : state.currentPlaylist

    const currentSongIndex = playlist.findIndex((song) => song.id === state.currentSong?.id)
    if (currentSongIndex === 0) {
      return { currentSong: playlist[playlist.length - 1] }
    }
    return { currentSong: playlist[currentSongIndex - 1] }
  }),
  setNextSong: () => set((state) => {
    const playlist = state.shuffle ? state.shufflePlaylist : state.currentPlaylist

    const currentSongIndex = playlist.findIndex((song) => song.id === state.currentSong?.id)
    if (currentSongIndex === playlist.length - 1) {
      return { currentSong: playlist[0] }
    }
    return { currentSong: playlist[currentSongIndex + 1] }
  }),
  toggleShuffleOn: () => set((state) => {
    const shufflePlaylist = [...state.currentPlaylist].sort(() => Math.random() - 0.5)
    return { shuffle: true, shufflePlaylist }
  }),
  toggleShuffleOff: () => set(() => ({ shuffle: false, shufflePlaylist: [] }))
}));
