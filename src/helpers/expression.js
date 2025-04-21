import { LabelsEnum } from './enums'
import { isNumber, isOperator, isZero } from './utils'

export const isEmptyElements = (elements) => {
  return elements.length === 1 && isZero(elements[0])
}

export const getLastElement = (elements) => {
  return elements[elements.length - 1]
}

export const updateElements = (elements, reCalculate) => {
  return {
    cleanLabel: LabelsEnum.CLEAN_C,
    reCalculate: reCalculate + 1,
    elements,
    hasError: false,
    hasResult: false
  }
}

export const resetElements = (reCalculate) => {
  return {
    ...updateElements([LabelsEnum.ZERO], reCalculate),
    cleanLabel: LabelsEnum.CLEAN_AC
  }
}

export const addElement = (value, elements, reCalculate) => {
  return updateElements([...elements, value], reCalculate)
}

export const updateLastElement = (value, elements, reCalculate) => {
  elements[elements.length - 1] = value
  return updateElements(elements, reCalculate)
}

export const removeLastElement = (elements, reCalculate) => {
  elements = [...elements].slice(0, -1)

  if (!elements.length) {
    return resetElements(reCalculate)
  }

  return updateElements(elements, reCalculate)
}

export const setLastElement = (label, elements, reCalculate, hasResult) => {
  const lastElement = getLastElement(elements)
  const isDecimalPoint = label === LabelsEnum.DECIMAL_POINT
  const isFactorial = label === LabelsEnum.EXCLAMATION_POINT

  if (
    (isEmptyElements(elements) && isNumber(label) && isZero(label)) ||
    (isDecimalPoint && lastElement.includes(LabelsEnum.DECIMAL_POINT))
  ) {
    return {}
  }

  if (isNumber(label) && hasResult) {
    return updateElements([label], reCalculate)
  }

  if ((isDecimalPoint || isFactorial) && isOperator(lastElement)) {
    return addElement(`${LabelsEnum.ZERO}${label}`, elements, reCalculate)
  }

  if ((!isOperator(label) && isOperator(lastElement)) || (isOperator(label) && !isOperator(lastElement))) {
    return addElement(label, elements, reCalculate)
  }

  if (
    (isEmptyElements(elements) && !isDecimalPoint && !isFactorial) ||
    (isOperator(label) && isOperator(lastElement))
  ) {
    return updateLastElement(label, elements, reCalculate)
  }

  return updateLastElement(`${lastElement}${label}`, elements, reCalculate)
}

export const isEdition = (editionIndex) => {
  return editionIndex !== -1
}

export const isNumberEdition = (elements, editionIndex) => {
  return isEdition(editionIndex) && isNumber(elements[editionIndex])
}

export const isOperatorEdition = (elements, editionIndex) => {
  return isEdition(editionIndex) && isOperator(elements[editionIndex])
}

export const isElementEditionByIndex = (index, editionIndex) => {
  return isEdition(editionIndex) && index === editionIndex
}

export const editElement = (label, elements, reCalculate, editionIndex) => {
  const element = elements[editionIndex]

  if (
    (isNumber(label) && (!isNumberEdition(editionIndex) || (isZero(label) && isZero(element)))) ||
    (isOperator(label) && !isOperatorEdition(editionIndex))
  ) {
    return {}
  }

  elements[editionIndex] = `${isNumber(label) && !isZero(element) ? element : ''}${label}`

  return {
    ...updateElements(elements, reCalculate),
    records: [...elements]
  }
}
