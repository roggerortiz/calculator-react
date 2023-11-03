import { buttonTypesEnum, operatorsEnum } from './enums'

export const buttons = [
  { id: 1, type: buttonTypesEnum.clean },
  { id: 2, type: buttonTypesEnum.backspace },
  { id: 3, type: buttonTypesEnum.percent },
  { id: 17, type: buttonTypesEnum.plusMinus },
  { id: 20, type: buttonTypesEnum.equals },
  { id: 13, label: '1', type: buttonTypesEnum.number },
  { id: 14, label: '2', type: buttonTypesEnum.number },
  { id: 15, label: '3', type: buttonTypesEnum.number },
  { id: 9, label: '4', type: buttonTypesEnum.number },
  { id: 10, label: '5', type: buttonTypesEnum.number },
  { id: 11, label: '6', type: buttonTypesEnum.number },
  { id: 5, label: '7', type: buttonTypesEnum.number },
  { id: 6, label: '8', type: buttonTypesEnum.number },
  { id: 7, label: '9', type: buttonTypesEnum.number },
  { id: 18, label: '0', type: buttonTypesEnum.number },
  { id: 19, label: '.', type: buttonTypesEnum.decimalPoint },
  { id: 4, label: operatorsEnum.divide, type: buttonTypesEnum.operator },
  { id: 8, label: operatorsEnum.times, type: buttonTypesEnum.operator },
  { id: 12, label: operatorsEnum.minus, type: buttonTypesEnum.operator },
  { id: 16, label: operatorsEnum.plus, type: buttonTypesEnum.operator }
]
