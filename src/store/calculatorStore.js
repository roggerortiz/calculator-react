import { create } from 'zustand'

export const useCalculatorStore = create((set) => ({
  theme: '',
  cleanLabel: 'ac',
  operation: '',
  hasResult: false,
  elements: ['0'],
  setTheme: (theme) => set({ theme }),
  resetCleanLabel: () => set({ cleanLabel: 'ac' }),
  setOperation: (operation) => set({ operation }),
  setHasResult: (hasResult) => set({ hasResult }),
  setElements: (elements) => set({ elements }),
  resetElements: (element) => {
    return set({
      elements: [element ?? '0'],
      cleanLabel: 'ac'
    })
  },
  addElement: (newElement) => {
    return set((state) => {
      const elements = [...state.elements, newElement]
      return { elements, cleanLabel: 'c' }
    })
  },
  updateLastElement: (lastElement) => {
    return set((state) => {
      const elements = [...state.elements]
      elements[elements.length - 1] = lastElement
      return { elements, cleanLabel: 'c' }
    })
  },
  removeLastElement: () => {
    return set((state) => {
      const prevElements = [...state.elements]
      const elements = prevElements.slice(0, prevElements.length - 1)
      return { elements, cleanLabel: 'c' }
    })
  }
}))
