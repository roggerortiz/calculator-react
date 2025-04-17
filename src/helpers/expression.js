import { LabelsEnum, NumbersEnum, OperatorsEnum } from './enums'

export const isOperator = (value) => {
  return Object.values(OperatorsEnum).includes(value)
}

export const isEmptyElements = (elements) => {
  return elements.length === 1 && elements[0] === NumbersEnum.ZERO
}

export const getLastElement = (elements) => {
  return elements[elements.length - 1]
}

export const updateElements = (elements, reCalculate) => {
  return {
    cleanLabel: LabelsEnum.CLEAN_C,
    elements,
    hasResult: false,
    reCalculate: reCalculate + 1
  }
}

export const resetElements = (reCalculate) => {
  return {
    ...updateElements([NumbersEnum.ZERO], reCalculate),
    cleanLabel: LabelsEnum.CLEAN_AC
  }
}

export const addElement = (value, elements, reCalculate) => {
  elements.push(value)
  return updateElements(elements, reCalculate)
}

export const updateLastElement = (value, elements, reCalculate) => {
  elements[elements.length - 1] = value
  return updateElements(elements, reCalculate)
}

export const removeLastElement = (elements, reCalculate) => {
  const newElements = [...elements].slice(0, -1)
  return updateElements(newElements, reCalculate)
}
