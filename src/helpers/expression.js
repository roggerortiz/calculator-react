import { LabelsEnum } from './enums'

export const isOperator = (value) => {
  const isDivide = value === LabelsEnum.DIVIDE
  const isTimes = value === LabelsEnum.X_MARK
  const isMinus = value === LabelsEnum.MINUS
  const isPlus = value === LabelsEnum.PLUS
  const isCaret = value === LabelsEnum.CARET

  return isDivide || isTimes || isMinus || isPlus || isCaret
}

export const isTrigonometricOperator = (value) => {
  const isSine = value === LabelsEnum.SINE
  const isCosine = value === LabelsEnum.COSINE
  const isTangent = value === LabelsEnum.TANGENT

  return isSine || isCosine || isTangent
}

export const isEmptyElements = (elements) => {
  return elements.length === 1 && elements[0] === LabelsEnum.ZERO
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
  elements.push(value)
  return updateElements(elements, reCalculate)
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
