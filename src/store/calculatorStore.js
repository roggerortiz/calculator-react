import { create } from 'zustand'
import { cleanLabelsEnum } from '../helpers/enums'

export const useCalculatorStore = create((set) => ({
  theme: '',
  cleanLabel: cleanLabelsEnum.ac,
  records: [],
  elements: ['0'],
  hasResult: false,
  editing: false,
  editIndex: -1,
  editValue: '',
  editReplace: false,
  editOperator: false,
  setTheme: (theme) => set({ theme }),
  resetCleanLabel: () => set({ cleanLabel: cleanLabelsEnum.ac }),
  setRecords: (records) => set({ records }),
  setElements: (elements) => set({ elements }),
  setHasResult: (hasResult) => set({ hasResult }),
  resetElements: (element) => {
    return set({
      elements: [element ?? '0'],
      cleanLabel: cleanLabelsEnum.ac,
      hasResult: false
    })
  },
  addElement: (newElement) => {
    return set((state) => {
      const elements = [...state.elements, newElement]
      return { elements, cleanLabel: cleanLabelsEnum.c, hasResult: false }
    })
  },
  updateLastElement: (lastElement) => {
    return set((state) => {
      const elements = [...state.elements]
      elements[elements.length - 1] = lastElement
      return { elements, cleanLabel: cleanLabelsEnum.c, hasResult: false }
    })
  },
  removeLastElement: () => {
    return set((state) => {
      const prevElements = [...state.elements]
      const elements = prevElements.slice(0, -1)
      return { elements, cleanLabel: cleanLabelsEnum.c, hasResult: false }
    })
  },
  setEditing: (editing) => set({ editing }),
  setEditIndex: (editIndex) => set({ editIndex }),
  setEditValue: (editValue) => set({ editValue }),
  setEditReplace: (editReplace) => set({ editReplace }),
  setEditOperator: (editOperator) => set({ editOperator })
}))
