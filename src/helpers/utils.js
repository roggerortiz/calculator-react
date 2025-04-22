import { LabelsEnum } from './enums'

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
