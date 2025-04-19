import { getButtons } from './buttons'
import { CalculatorsEnum, LabelsEnum, ThemesEnum } from './enums'
import {
  addElement,
  getLastElement,
  isEmptyElements,
  isOperator,
  removeLastElement,
  resetElements,
  updateElements,
  updateLastElement
} from './expression'
import { addNumber, editNumber } from './number'
import { addOperator, editOperator } from './operator'
import { getResult } from './utils'

export const toggleTheme = ({ theme }) => ({
  theme: theme === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT
})

export const toggleCalculator = ({ calculator }) => {
  calculator = calculator === CalculatorsEnum.STANDARD ? CalculatorsEnum.SCIENTIFIC : CalculatorsEnum.STANDARD

  return {
    calculator,
    buttons: getButtons(calculator)
  }
}

export const toggleDegreesLabel = ({ degreesLabel }) => ({
  degreesLabel: degreesLabel === LabelsEnum.DEGREES ? LabelsEnum.RADIANS : LabelsEnum.DEGREES
})

export const setDecimalPoint = ({ elements, reCalculate }) => {
  const lastElement = getLastElement(elements)

  if (lastElement.includes(LabelsEnum.DECIMAL_POINT)) {
    return {}
  }

  if (isOperator(lastElement)) {
    const newElement = `${LabelsEnum.ZERO}${LabelsEnum.DECIMAL_POINT}`
    return addElement(newElement, elements, reCalculate)
  }

  const newElement = `${lastElement}${LabelsEnum.DECIMAL_POINT}`
  return updateLastElement(newElement, elements, reCalculate)
}

export const setNumber = (number) => {
  return ({ isEditing, editingIndex, isEditingOperator, isEditingReplace, elements, hasResult, reCalculate }) => {
    if (!isEditing) {
      return addNumber({ number, elements, reCalculate, hasResult, isEditing })
    } else if (!isEditingOperator) {
      return editNumber({ number, elements, reCalculate, isEditing, editingIndex, isEditingOperator, isEditingReplace })
    } else {
      return {}
    }
  }
}

export const setOperator = (operator) => {
  return ({ elements, isEditing, editingIndex, isEditingOperator, reCalculate }) => {
    if (!isEditing) {
      return addOperator({ operator, elements, isEditing, reCalculate })
    } else if (isEditingOperator) {
      return editOperator({ operator, elements, isEditing, editingIndex, isEditingOperator, reCalculate })
    } else {
      return {}
    }
  }
}

export const setEditing = (index, item, isRecord) => {
  return ({ hasResult, records }) => {
    if (hasResult && !isRecord) {
      return {}
    }

    const isEditingOperator = isOperator(item)

    return {
      hasError: false,
      hasResult: false,
      elements: [...records],
      editingIndex: index,
      isEditing: true,
      isEditingOperator,
      isEditingReplace: !isEditingOperator
    }
  }
}

export const calculate = ({ elements, hasResult }) => {
  if (hasResult || !elements.length || isEmptyElements(elements)) {
    return {}
  }

  return {
    records: [...elements],
    result: getResult(elements)
  }
}

export const clean = ({ cleanLabel, reCalculate }) => {
  if (cleanLabel === LabelsEnum.CLEAN_C) {
    return resetElements(reCalculate)
  } else if (cleanLabel === LabelsEnum.CLEAN_AC) {
    return { records: [] }
  }
}

export const backspace = ({ hasResult, elements, editingIndex, isEditing, isEditingOperator, reCalculate }) => {
  if (hasResult || isEmptyElements(elements) || (isEditing && isEditingOperator)) {
    return {}
  }

  if (isEditing && !isEditingOperator) {
    elements[editingIndex] = elements[editingIndex].slice(0, -1)
    return updateElements(elements, reCalculate)
  }

  const lastElement = getLastElement(elements)
  const newLastElement = lastElement.slice(0, -1)

  if (isOperator(lastElement) || !newLastElement) {
    return removeLastElement(elements, reCalculate)
  }

  if (!newLastElement && elements.length === 1) {
    return resetElements(reCalculate)
  }

  return updateLastElement(newLastElement, elements, reCalculate)
}

export const percent = ({ elements, isEditing, isEditingOperator, hasResult, reCalculate }) => {
  if (hasResult || (isEditing && isEditingOperator)) {
    return
  }

  const lastElement = Number(getLastElement(elements))
  const newLastElement = lastElement ? lastElement / 100 : 0

  return updateLastElement(newLastElement, elements, reCalculate)
}

export const equals = ({ result }) => ({
  elements: !result || result === LabelsEnum.ERROR ? [LabelsEnum.ZERO] : [result],
  hasError: result === LabelsEnum.ERROR,
  hasResult: true
})

export const edited = ({ result }) => ({
  elements: [result],
  hasResult: true,
  editingIndex: -1,
  isEditing: false,
  isEditingReplace: false,
  isEditingOperator: false
})

export const factorial = ({ elements, reCalculate }) => {
  const lastElement = getLastElement(elements)

  if (isOperator(lastElement)) {
    return addElement(`${LabelsEnum.ZERO}!`, elements, reCalculate)
  }

  return updateLastElement(`${lastElement}!`, elements, reCalculate)
}

export const constant = ({ elements, reCalculate }) => {
  const lastElement = getLastElement(elements)

  if (isOperator(lastElement)) {
    return addElement(LabelsEnum.PI_SYMBOL, elements, reCalculate)
  }

  const newLastElement = `${lastElement !== LabelsEnum.ZERO ? lastElement : ''}${LabelsEnum.PI_SYMBOL}`
  return updateLastElement(newLastElement, elements, reCalculate)
}
