import { LabelsEnum, UnaryOperatorKeys } from './enums'
import { isNumber } from './utils'

const isUnaryOperatorKey = (key) => {
  return Object.values(UnaryOperatorKeys).includes(key)
}

const setUnaryOperatorKeys = (element) => {
  return element
    .split(LabelsEnum.SINE)
    .join(UnaryOperatorKeys.SINE)
    .split(LabelsEnum.COSINE)
    .join(UnaryOperatorKeys.COSINE)
    .split(LabelsEnum.TANGENT)
    .join(UnaryOperatorKeys.TANGENT)
    .split(LabelsEnum.LOGARITHM)
    .join(UnaryOperatorKeys.LOGARITHM)
    .split(LabelsEnum.NATURAL_LOGARITHM)
    .join(UnaryOperatorKeys.NATURAL_LOGARITHM)
}

const resetUnaryOperators = (element) => {
  return element
    .split(UnaryOperatorKeys.SINE)
    .join(LabelsEnum.SINE)
    .split(UnaryOperatorKeys.COSINE)
    .join(LabelsEnum.COSINE)
    .split(UnaryOperatorKeys.TANGENT)
    .join(LabelsEnum.TANGENT)
    .split(UnaryOperatorKeys.LOGARITHM)
    .join(LabelsEnum.LOGARITHM)
    .split(UnaryOperatorKeys.NATURAL_LOGARITHM)
    .join(LabelsEnum.NATURAL_LOGARITHM)
    .split(UnaryOperatorKeys.SQUARE_ROOT)
    .join(LabelsEnum.SQUARE_ROOT_NAME)
}

const fixUnaryOperators = (element, number) => {
  if (isNumber(element)) {
    return `(${number})`
  }

  let fixedElement = `(${number})`

  element
    .replace(number, '')
    .split('')
    .reverse()
    .forEach((char) => {
      fixedElement = `(${char}${fixedElement})`
    })

  return fixedElement
}

const hasUnaryOperators = (element) => {
  return (
    element.includes(LabelsEnum.SINE) ||
    element.includes(LabelsEnum.COSINE) ||
    element.includes(LabelsEnum.TANGENT) ||
    element.includes(LabelsEnum.LOGARITHM) ||
    element.includes(LabelsEnum.NATURAL_LOGARITHM) ||
    element.includes(LabelsEnum.RADICAL)
  )
}

export const verifyUnaryOperators = (element) => {
  if (!hasUnaryOperators(element)) {
    return element
  }

  let elements = []
  let tempElement = ''
  let lastElement = ''
  let number = ''

  setUnaryOperatorKeys(element)
    .split('')
    .forEach((char) => {
      if (isNumber(lastElement) && isUnaryOperatorKey(char)) {
        elements.push(fixUnaryOperators(tempElement, number))
        tempElement = ''
        lastElement = ''
        number = ''
      }

      if (isNumber(char)) {
        number += char
      }

      tempElement += char
      lastElement = char
    })

  elements.push(fixUnaryOperators(tempElement, number))
  return resetUnaryOperators(elements.join(''))
}
