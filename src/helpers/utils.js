import { LabelsEnum, UnaryOperatorKeys } from './enums'

export const isZero = (value) => {
  return value === LabelsEnum.ZERO
}

export const isNumber = (value) => {
  value = value?.toString()?.trim()

  if (value === '' || value === undefined || value === null) {
    return false
  }

  return !isNaN(value)
}

export const isOperator = (value) => {
  const isDivide = value === LabelsEnum.DIVIDE
  const isTimes = value === LabelsEnum.X_MARK
  const isMinus = value === LabelsEnum.MINUS
  const isPlus = value === LabelsEnum.PLUS
  const isCaret = value === LabelsEnum.CARET

  return isDivide || isTimes || isMinus || isPlus || isCaret
}

const convertToDegrees = (items, element, index, degrees) => {
  const isTrigonometric = isTrigonometricOperatorKey(items[index + 1])
  const convert = !degrees && index < items.length - 1 && isTrigonometric
  return convert ? `(${element}*180)/${LabelsEnum.PI_NAME}` : element
}

export const isTrigonometricOperatorKey = (value) => {
  const isSine = value === UnaryOperatorKeys.SINE
  const isCosine = value === UnaryOperatorKeys.COSINE
  const isTangent = value === UnaryOperatorKeys.TANGENT

  return isSine || isCosine || isTangent
}

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

const updateUnaryOperators = (element, number, degrees) => {
  if (isNumber(element)) {
    return `(${number})`
  }

  let newElement = ''
  const chars = element.replace(number, '').split('').reverse()
  const items = [number, ...chars]

  items.forEach((item, index) => {
    newElement = `(${convertToDegrees(items, `${item}${newElement}`, index, degrees)})`
  })

  return newElement
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

export const fixUnaryOperators = (degrees) => {
  return (element) => {
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
          elements.push(updateUnaryOperators(tempElement, number, degrees))
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

    elements.push(updateUnaryOperators(tempElement, number, degrees))
    return resetUnaryOperators(elements.join(''))
  }
}
