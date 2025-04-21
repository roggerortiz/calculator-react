import { getButtons } from './buttons'
import { CalculatorsEnum, LabelsEnum, ThemesEnum } from './enums'
import {
  editElement,
  getLastElement,
  isEdition,
  isEmptyElements,
  isNumberEdition,
  isOperatorEdition,
  removeLastElement,
  resetElements,
  setLastElement,
  updateElements,
  updateLastElement
} from './expression'
import { getResult } from './result'
import { isOperator } from './utils'

export const toggleTheme = ({ theme }) => ({
  theme: theme === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT
})

export const toggleCalculator = ({ calculator, editionIndex }) => ({
  calculator: calculator === CalculatorsEnum.STANDARD ? CalculatorsEnum.SCIENTIFIC : CalculatorsEnum.STANDARD,
  buttons: getButtons(calculator, editionIndex)
})

export const toggleDegreesLabel = ({ degreesLabel }) => ({
  degreesLabel: degreesLabel === LabelsEnum.DEGREES ? LabelsEnum.RADIANS : LabelsEnum.DEGREES
})

export const setEdition = (index, isRecord) => {
  return ({ calculator, records, hasResult, editionIndex }) => {
    if ((hasResult && !isRecord) || (isEdition(editionIndex) && isRecord)) {
      return {}
    }

    return {
      buttons: getButtons(calculator, index),
      hasError: false,
      hasResult: false,
      elements: [...records],
      editionIndex: index
    }
  }
}

export const calculate = ({ elements, hasResult }) => {
  if (hasResult) {
    return {}
  }

  if (isEmptyElements(elements)) {
    return {
      result: ''
    }
  }

  return {
    records: [...elements],
    result: getResult(elements)
  }
}

export const clean = ({ cleanLabel, reCalculate }) => {
  if (cleanLabel === LabelsEnum.CLEAN_C) {
    return resetElements(reCalculate)
  }

  if (cleanLabel === LabelsEnum.CLEAN_AC) {
    return { records: [] }
  }

  return {}
}

export const backspace = ({ elements, reCalculate, hasResult, editionIndex }) => {
  if (hasResult || isEmptyElements(elements) || isOperatorEdition(editionIndex)) {
    return {}
  }

  if (isNumberEdition(editionIndex)) {
    const element = elements[editionIndex]
    const newElement = element.slice(0, -1)

    elements[editionIndex] = newElement || LabelsEnum.ZERO
    return updateElements(elements, reCalculate)
  }

  const lastElement = getLastElement(elements)
  const newLastElement = lastElement.slice(0, -1)

  if (isOperator(lastElement) || !newLastElement) {
    return removeLastElement(elements, reCalculate)
  }

  return updateLastElement(newLastElement, elements, reCalculate)
}

export const percent = ({ elements, reCalculate, hasResult, editionIndex }) => {
  const lastElement = Number(getLastElement(elements))

  if (hasResult || isNaN(lastElement) || isOperatorEdition(editionIndex)) {
    return {}
  }

  return updateLastElement((lastElement / 100).toString, elements, reCalculate)
}

export const equals = ({ result }) => {
  const hasError = !result || result === LabelsEnum.ERROR || result === LabelsEnum.INFINITY

  return {
    elements: hasError ? [LabelsEnum.ZERO] : [result],
    hasResult: true,
    hasError
  }
}

export const edited = ({ calculator, result }) => ({
  buttons: getButtons(calculator),
  elements: [result],
  hasResult: true,
  editionIndex: -1
})

export const setElement = (label) => {
  return ({ elements, reCalculate, hasResult, editionIndex }) => {
    if (isEdition(editionIndex)) {
      return editElement(label, elements, reCalculate, editionIndex)
    }

    return setLastElement(label, elements, reCalculate, hasResult)
  }
}
