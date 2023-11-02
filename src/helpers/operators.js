import { operatorsEnum } from './enums'

const allOperators = [
  operatorsEnum.plus,
  operatorsEnum.minus,
  operatorsEnum.times,
  operatorsEnum.divideBy
]
const firstOperators = [operatorsEnum.times, operatorsEnum.divideBy]
const secondOperators = [operatorsEnum.plus, operatorsEnum.minus]

export const isOperator = (value) => {
  return allOperators.includes(value)
}

export const isFirstOperator = (value) => {
  return firstOperators.includes(value)
}

export const isSecondOperator = (value) => {
  return secondOperators.includes(value)
}
