import { create } from "zustand"

type DarkModeState = {
  darkMode: boolean
  toggle: () => void
}

export const useDarkMode = create<DarkModeState>()((set) => ({
  darkMode: false,
  toggle: () => set((state) => ({ darkMode: !state.darkMode }))
}))
