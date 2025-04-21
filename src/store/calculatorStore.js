import { create } from 'zustand'
import { getButtons } from '../helpers/buttons'
import { LabelsEnum } from '../helpers/enums'
import {
  backspace,
  calculate,
  clear,
  edited,
  equals,
  percent,
  setEdition,
  setElement,
  toggleCalculator,
  toggleDegreesLabel,
  toggleTheme
} from '../helpers/store'
import { getDefaultTheme } from '../helpers/theme'

export const useCalculatorStore = create((set) => ({
  theme: getDefaultTheme(),
  buttons: getButtons(true),
  standard: true,
  allClear: true,
  degrees: true,
  elements: [LabelsEnum.ZERO],
  records: [],
  reCalculate: 0,
  result: '',
  hasResult: false,
  hasError: false,
  editionIndex: -1,
  setTheme: () => set(toggleTheme),
  setDegrees: () => set(toggleDegreesLabel),
  setCalculator: () => set(toggleCalculator),
  setElement: (label) => set(setElement(label)),
  setEdition: (index, isRecord) => set(setEdition(index, isRecord)),
  calculate: () => set(calculate),
  clear: () => set(clear),
  backspace: () => set(backspace),
  percent: () => set(percent),
  equals: () => set(equals),
  edited: () => set(edited)
}))
