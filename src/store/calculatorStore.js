import { create } from 'zustand'

export const useCalculatorStore = create((set) => ({
  theme: '',
  setTheme: (theme) => set({ theme })
}))
