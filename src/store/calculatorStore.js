import { create } from 'zustand'
import { CalculatorsEnum, LabelsEnum, NumbersEnum, ThemesEnum } from '../helpers/enums'
import {
  addElement,
  getLastElement,
  isOperator,
  removeLastElement,
  resetElements,
  updateElements,
  updateLastElement
} from '../helpers/expression'
import { getDefaultTheme } from '../helpers/theme'
import { calculateResult } from '../helpers/utils'

export const useCalculatorStore = create((set) => ({
  theme: getDefaultTheme(),
  calculator: CalculatorsEnum.STANDARD,
  cleanLabel: LabelsEnum.CLEAN_AC,
  degreesLabel: LabelsEnum.DEGREES,
  reCalculate: 0,
  records: [],
  elements: [NumbersEnum.ZERO],
  result: '',
  hasResult: false,
  isEditing: false,
  editIndex: -1,
  editReplace: false,
  editOperator: false,
  toggleTheme: () => {
    set(({ theme }) => ({
      theme: theme === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT
    }))
  },
  toggleCalculator: () => {
    set(({ calculator }) => {
      if (calculator === CalculatorsEnum.STANDARD) {
        return { calculator: CalculatorsEnum.SCIENTIFIC }
      } else if (calculator === CalculatorsEnum.SCIENTIFIC) {
        return { calculator: CalculatorsEnum.STANDARD }
      } else {
        return {}
      }
    })
  },
  toggleDegrees: () => {
    set(({ degreesLabel }) => {
      if (degreesLabel === LabelsEnum.DEGREES) {
        return { degreesLabel: LabelsEnum.RADIANS }
      } else if (degreesLabel === LabelsEnum.RADIANS) {
        return { degreesLabel: LabelsEnum.DEGREES }
      } else {
        return {}
      }
    })
  },
  calculate: () => {
    set(({ elements, hasResult }) => {
      if (hasResult || !elements.length || (elements.length === 1 && elements[0] === NumbersEnum.ZERO)) {
        return {}
      }

      return {
        records: [...elements],
        result: calculateResult(elements)
      }
    })
  },
  clean: () => {
    set(({ cleanLabel, reCalculate }) => {
      if (cleanLabel === LabelsEnum.CLEAN_C) {
        return resetElements(reCalculate)
      } else if (cleanLabel === LabelsEnum.CLEAN_AC) {
        return { records: [] }
      }
    })
  },
  backspace: () => {
    set(({ hasResult, elements, isEditing, editOperator, reCalculate }) => {
      if (
        hasResult ||
        !elements.length ||
        (elements.length === 1 && elements[0] === NumbersEnum.ZERO) ||
        (isEditing && editOperator)
      ) {
        return {}
      }

      const lastElement = getLastElement(elements)
      const newLastElement = lastElement.slice(0, -1)

      if (isOperator(lastElement) || (!newLastElement && elements.length)) {
        return removeLastElement(elements, reCalculate)
      }

      if (!newLastElement && elements.length === 1) {
        return resetElements(reCalculate)
      }

      return updateLastElement(newLastElement, elements, reCalculate)
    })
  },
  percent: () => {
    set(({ elements, isEditing, editOperator, hasResult, reCalculate }) => {
      if (hasResult || (isEditing && editOperator)) {
        return
      }

      const lastElement = Number(getLastElement(elements))
      const newLastElement = lastElement ? lastElement / 100 : 0

      return updateLastElement(newLastElement, elements, reCalculate)
    })
  },
  number: (number) => {
    set(({ isEditing, editIndex, editOperator, editReplace, elements, hasResult, reCalculate }) => {
      if (!isEditing) {
        if (elements.length === 1 && elements[0] === NumbersEnum.ZERO && number === NumbersEnum.ZERO) {
          return {}
        }

        if (hasResult || !elements.length) {
          return updateElements([number], reCalculate)
        }

        const lastElement = getLastElement(elements)

        if (isOperator(lastElement)) {
          return addElement(number, elements, reCalculate)
        }

        const newLastElement = `${lastElement !== NumbersEnum.ZERO ? lastElement : ''}${number}`

        return updateLastElement(newLastElement, elements, reCalculate)
      } else if (!editOperator) {
        let element = elements[editIndex]

        if (element === NumbersEnum.ZERO && number === NumbersEnum.ZERO) {
          return {}
        }

        elements[editIndex] = `${element !== '0' && !editReplace ? element : ''}${number}`

        return {
          ...updateElements(elements),
          editReplace: false
        }
      } else {
        return {}
      }
    })
  },
  decimalPoint: () => {
    set(({ elements, hasResult, reCalculate }) => {
      const lastElement = getLastElement(elements)

      if (hasResult || lastElement.includes(LabelsEnum.DECIMAL_POINT)) {
        return {}
      }

      if (isOperator(lastElement)) {
        const newElement = `${NumbersEnum.ZERO}${LabelsEnum.DECIMAL_POINT}`
        return addElement(newElement, elements, reCalculate)
      }

      const newElement = `${lastElement}${LabelsEnum.DECIMAL_POINT}`
      return updateLastElement(newElement, elements, reCalculate)
    })
  },
  operator: (operator) => {
    set(({ elements, isEditing, editIndex, editOperator, reCalculate }) => {
      if (!isEditing) {
        const lastElement = getLastElement(elements)

        if (isOperator(lastElement)) {
          return updateLastElement(operator, elements, reCalculate)
        }

        return addElement(operator, elements, reCalculate)
      } else if (editOperator) {
        elements[editIndex] = operator
        return updateElements(elements, reCalculate)
      }
    })
  },
  equals: () => {
    set(({ result }) => ({
      elements: [result],
      hasResult: true
    }))
  },
  editing: (index, item, isRecord) => {
    set(({ hasResult }) => {
      if (hasResult && !isRecord) {
        return {}
      }

      const isOperator = isOperator(item)

      return {
        hasResult: false,
        isEditing: true,
        editIndex: index,
        editReplace: !isOperator,
        editOperator: isOperator
      }
    })
  },
  edited: () => {
    set(({ result }) => ({
      elements: [result],
      hasResult: true,
      isEditing: false,
      editIndex: -1,
      equals: true
    }))
  }
}))
