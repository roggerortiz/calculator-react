import { create } from 'zustand'
import { calculatorsEnum, cleanLabelsEnum } from '../helpers/enums'
import { setDocumentTheme } from '../helpers/theme'

export const useCalculatorStore = create((set) => ({
  theme: '',
  calculator: calculatorsEnum.standar,
  cleanLabel: cleanLabelsEnum.ac,
  records: [],
  elements: ['0'],
  result: undefined,
  equals: false,
  recalculate: 0,
  editing: false,
  editIndex: -1,
  editValue: '',
  editReplace: false,
  editOperator: false,
  setTheme: (theme) => {
    setDocumentTheme(theme)
    return set({ theme })
  },
  setCalculator: (calculator) => set({ calculator }),
  resetCleanLabel: () => set({ cleanLabel: cleanLabelsEnum.ac }),
  setRecords: (records) => set({ records }),
  setResult: (result) => set({ result }),
  setEquals: (equals) => set({ equals }),
  setElements: (elements) => {
    return set(({ recalculate }) => ({
      elements,
      recalculate: recalculate + 1
    }))
  },
  resetElements: () => {
    return set(({ recalculate }) => ({
      cleanLabel: cleanLabelsEnum.ac,
      elements: ['0'],
      equals: false,
      recalculate: recalculate + 1
    }))
  },
  addElement: (newElement) => {
    return set(({ elements, recalculate }) => {
      const newElements = [...elements, newElement]
      return {
        cleanLabel: cleanLabelsEnum.c,
        elements: newElements,
        equals: false,
        recalculate: recalculate + 1
      }
    })
  },
  updateLastElement: (lastElement) => {
    return set(({ elements, recalculate }) => {
      const newElements = [...elements]
      newElements[newElements.length - 1] = lastElement
      return {
        cleanLabel: cleanLabelsEnum.c,
        elements: newElements,
        equals: false,
        recalculate: recalculate + 1
      }
    })
  },
  removeLastElement: () => {
    return set(({ elements, recalculate }) => {
      const newElements = [...elements].slice(0, -1)
      return {
        cleanLabel: cleanLabelsEnum.c,
        elements: newElements,
        equals: false,
        recalculate: recalculate + 1
      }
    })
  },
  setEditing: (editing) => set({ editing }),
  setEditIndex: (editIndex) => set({ editIndex }),
  setEditReplace: (editReplace) => set({ editReplace }),
  setEditOperator: (editOperator) => set({ editOperator })
}))
