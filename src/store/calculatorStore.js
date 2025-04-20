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
  setConstant,
  setDecimalPoint,
  setEditing,
  setFactorial,
  setNumber,
  setOperator,
  setUnaryOperator,
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
  setUnaryOperator: (operator) => set(setUnaryOperator(operator)),
  setFactorial: () => set(setFactorial),
  setConstant: () => set(setConstant),
  calculate: () => set(calculate),
  clean: () => set(clean),
  backspace: () => set(backspace),
  percent: () => set(percent),
  equals: () => set(equals),
  edited: () => set(edited)
}))
