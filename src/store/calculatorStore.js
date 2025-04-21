import { create } from 'zustand'
import { getButtons } from '../helpers/buttons'
import { CalculatorsEnum, LabelsEnum } from '../helpers/enums'
import {
  backspace,
  calculate,
  clean,
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
  buttons: getButtons(CalculatorsEnum.STANDARD),
  cleanLabel: LabelsEnum.CLEAN_AC,
  degreesLabel: LabelsEnum.DEGREES,
  calculator: CalculatorsEnum.STANDARD,
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
  clean: () => set(clean),
  backspace: () => set(backspace),
  percent: () => set(percent),
  equals: () => set(equals),
  edited: () => set(edited)
}))
