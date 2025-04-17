import { create } from 'zustand'
import { CalculatorsEnum, LabelsEnum, NumbersEnum } from '../helpers/enums'
import {
  backspace,
  calculate,
  clean,
  edited,
  equals,
  percent,
  setDecimalPoint,
  setEditing,
  setNumber,
  setOperator,
  toggleCalculator,
  toggleDegreesLabel,
  toggleTheme
} from '../helpers/store'
import { getDefaultTheme } from '../helpers/theme'

export const useCalculatorStore = create((set) => ({
  theme: getDefaultTheme(),
  cleanLabel: LabelsEnum.CLEAN_AC,
  degreesLabel: LabelsEnum.DEGREES,
  calculator: CalculatorsEnum.STANDARD,
  elements: [NumbersEnum.ZERO],
  records: [],
  result: '',
  reCalculate: 0,
  hasResult: false,
  editingIndex: -1,
  isEditing: false,
  isEditingReplace: false,
  isEditingOperator: false,
  setTheme: () => set(toggleTheme),
  setDegrees: () => set(toggleDegreesLabel),
  setCalculator: () => set(toggleCalculator),
  setDecimalPoint: () => set(setDecimalPoint),
  setNumber: (number) => set(setNumber(number)),
  setOperator: (operator) => set(setOperator(operator)),
  setEditing: (index, item, isRecord) => set(setEditing(index, item, isRecord)),
  calculate: () => set(calculate),
  clean: () => set(clean),
  backspace: () => set(backspace),
  percent: () => set(percent),
  equals: () => set(equals),
  edited: () => set(edited)
}))
