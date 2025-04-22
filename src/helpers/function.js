import { FunctionKeys, LabelsEnum } from './enums'
import { isNumber } from './utils'

const isFunctionKey = (key) => {
  return Object.values(FunctionKeys).includes(key)
}

export const isTrigFunctionKey = (value) => {
  const isSine = value === FunctionKeys.SINE
  const isCosine = value === FunctionKeys.COSINE
  const isTangent = value === FunctionKeys.TANGENT

  return isSine || isCosine || isTangent
}

const setFunctionKeys = (element) => {
  return element
    .split(LabelsEnum.SINE)
    .join(FunctionKeys.SINE)
    .split(LabelsEnum.COSINE)
    .join(FunctionKeys.COSINE)
    .split(LabelsEnum.TANGENT)
    .join(FunctionKeys.TANGENT)
    .split(LabelsEnum.LOGARITHM)
    .join(FunctionKeys.LOGARITHM)
    .split(LabelsEnum.NATURAL_LOGARITHM)
    .join(FunctionKeys.NATURAL_LOGARITHM)
}

const unsetFunctionKeys = (element) => {
  return element
    .split(FunctionKeys.SINE)
    .join(LabelsEnum.SINE)
    .split(FunctionKeys.COSINE)
    .join(LabelsEnum.COSINE)
    .split(FunctionKeys.TANGENT)
    .join(LabelsEnum.TANGENT)
    .split(FunctionKeys.LOGARITHM)
    .join(LabelsEnum.LOGARITHM)
    .split(FunctionKeys.NATURAL_LOGARITHM)
    .join(LabelsEnum.NATURAL_LOGARITHM)
    .split(FunctionKeys.SQUARE_ROOT)
    .join(LabelsEnum.SQUARE_ROOT_NAME)
}

const containsFunctions = (element) => {
  return (
    element.includes(LabelsEnum.SINE) ||
    element.includes(LabelsEnum.COSINE) ||
    element.includes(LabelsEnum.TANGENT) ||
    element.includes(LabelsEnum.LOGARITHM) ||
    element.includes(LabelsEnum.NATURAL_LOGARITHM) ||
    element.includes(LabelsEnum.RADICAL)
  )
}

const organizeFunctions = (tempFunction, number, degrees) => {
  if (isNumber(tempFunction)) {
    return `(${number})`
  }

  let newFunction = ''
  const chars = tempFunction.replace(number, '').split('').reverse()
  const items = [number, ...chars]

  items.forEach((item, index) => {
    newFunction = `${item}${newFunction}`

    if (!degrees && index < items.length - 1 && isTrigFunctionKey(items[index + 1])) {
      newFunction = `(${newFunction}*180)/${LabelsEnum.PI_NAME}`
    }

    newFunction = `(${newFunction})`
  })

  return newFunction.slice(1, newFunction.length - 1)
}

export const checkFunctions = (degrees) => {
  return (element) => {
    if (!containsFunctions(element)) {
      return element
    }

    let functions = []
    let tempFunction = ''
    let lastFunction = ''
    let number = ''

    const chars = setFunctionKeys(element).split('')

    chars.forEach((char) => {
      if (isNumber(lastFunction) && isFunctionKey(char)) {
        functions.push(organizeFunctions(tempFunction, number, degrees))
        tempFunction = ''
        lastFunction = ''
        number = ''
      }

      if (isNumber(char)) {
        number += char
      }

      tempFunction += char
      lastFunction = char
    })

    functions.push(organizeFunctions(tempFunction, number, degrees))

    return unsetFunctionKeys(functions.join(''))
  }
}
