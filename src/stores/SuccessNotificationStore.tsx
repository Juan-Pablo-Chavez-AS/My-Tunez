import { create } from 'zustand'

type AlbumStore = {
  open: boolean
  text: string
  openNotification: (text: string) => void
  closeNotification: () => void
}

export const useSuccessNotification = create<AlbumStore>()((set) => ({
  open: false,
  text: '',
  openNotification: (text) => set(() => ({ open: true, text: text })),
  closeNotification: () => set(() => ({ open: false })),

}));
