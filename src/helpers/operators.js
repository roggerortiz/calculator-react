import { operatorsEnum } from './enums'

const allOperators = [operatorsEnum.plus, operatorsEnum.minus, operatorsEnum.times, operatorsEnum.divide]

export const isOperator = (value) => {
  return allOperators.includes(value)
}
