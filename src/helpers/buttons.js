import { buttonsEnum, numbersEnum, operatorsEnum } from './enums'

export const standardButtons = [
  { id: 1, type: buttonsEnum.clean },
  { id: 2, type: buttonsEnum.backspace },
  { id: 3, type: buttonsEnum.percent },
  { id: 17, type: buttonsEnum.calculator },
  { id: 20, type: buttonsEnum.equals },
  { id: 13, label: numbersEnum.one, type: buttonsEnum.number },
  { id: 14, label: numbersEnum.two, type: buttonsEnum.number },
  { id: 15, label: numbersEnum.three, type: buttonsEnum.number },
  { id: 9, label: numbersEnum.four, type: buttonsEnum.number },
  { id: 10, label: numbersEnum.five, type: buttonsEnum.number },
  { id: 11, label: numbersEnum.six, type: buttonsEnum.number },
  { id: 5, label: numbersEnum.seven, type: buttonsEnum.number },
  { id: 6, label: numbersEnum.eight, type: buttonsEnum.number },
  { id: 7, label: numbersEnum.nine, type: buttonsEnum.number },
  { id: 18, label: numbersEnum.zero, type: buttonsEnum.number },
  { id: 19, label: numbersEnum.decimalPoint, type: buttonsEnum.decimalPoint },
  { id: 4, label: operatorsEnum.divide, type: buttonsEnum.operator },
  { id: 8, label: operatorsEnum.times, type: buttonsEnum.operator },
  { id: 12, label: operatorsEnum.minus, type: buttonsEnum.operator },
  { id: 16, label: operatorsEnum.plus, type: buttonsEnum.operator }
]

export const scientificButtons = [
  { id: 1, label: operatorsEnum.sin, type: buttonsEnum.operation },
  { id: 2, label: operatorsEnum.cos, type: buttonsEnum.operation },
  { id: 3, label: operatorsEnum.tan, type: buttonsEnum.operation }
]
