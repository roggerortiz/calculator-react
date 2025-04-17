import {
  faArrowLeft,
  faCheck,
  faDivide,
  faEquals,
  faMinus,
  faPercent,
  faPlus,
  faRepeat,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { ButtonsEnum, LabelsEnum, NumbersEnum, OperatorsEnum } from './enums'

export const standardButtons = [
  { id: 1, type: ButtonsEnum.CLEAN },
  { id: 2, icon: faArrowLeft, type: ButtonsEnum.BACKSPACE },
  { id: 3, icon: faPercent, type: ButtonsEnum.PERCENT },
  { id: 4, label: OperatorsEnum.divide, icon: faDivide, type: ButtonsEnum.OPERATOR },
  { id: 5, label: NumbersEnum.SEVEN, type: ButtonsEnum.NUMBER },
  { id: 6, label: NumbersEnum.EIGHT, type: ButtonsEnum.NUMBER },
  { id: 7, label: NumbersEnum.NINE, type: ButtonsEnum.NUMBER },
  { id: 8, label: OperatorsEnum.TIMES, icon: faXmark, type: ButtonsEnum.OPERATOR },
  { id: 9, label: NumbersEnum.FOUR, type: ButtonsEnum.NUMBER },
  { id: 10, label: NumbersEnum.FIVE, type: ButtonsEnum.NUMBER },
  { id: 11, label: NumbersEnum.SIX, type: ButtonsEnum.NUMBER },
  { id: 12, label: OperatorsEnum.MINUS, icon: faMinus, type: ButtonsEnum.OPERATOR },
  { id: 13, label: NumbersEnum.ONE, type: ButtonsEnum.NUMBER },
  { id: 14, label: NumbersEnum.TWO, type: ButtonsEnum.NUMBER },
  { id: 15, label: NumbersEnum.THREE, type: ButtonsEnum.NUMBER },
  { id: 16, label: OperatorsEnum.PLUS, icon: faPlus, type: ButtonsEnum.OPERATOR },
  { id: 17, icon: faRepeat, type: ButtonsEnum.CALCULATOR },
  { id: 18, label: NumbersEnum.ZERO, type: ButtonsEnum.NUMBER },
  { id: 19, label: LabelsEnum.DECIMAL_POINT, type: ButtonsEnum.DECIMAL_POINT },
  { id: 20, icon: faEquals, type: ButtonsEnum.EQUALS },
  { id: 21, icon: faCheck, type: ButtonsEnum.EDITED }
]

export const scientificButtons = [
  { id: 1, type: ButtonsEnum.DEGREES },
  { id: 2, label: OperatorsEnum.SINE, type: ButtonsEnum.OPERATOR },
  { id: 3, label: OperatorsEnum.COSINE, type: ButtonsEnum.OPERATOR },
  { id: 4, label: OperatorsEnum.TANGENT, type: ButtonsEnum.OPERATOR },
  { id: 5, label: OperatorsEnum.LOGARITHM, type: ButtonsEnum.OPERATOR },
  { id: 6, label: OperatorsEnum.NATURAL_LOGARITHM, type: ButtonsEnum.OPERATOR },
  { id: 7, label: OperatorsEnum.LEFT_PARENTHESIS, type: ButtonsEnum.OPERATOR },
  { id: 8, label: OperatorsEnum.RIGHT_PARENTHESIS, type: ButtonsEnum.OPERATOR },
  { id: 9, label: OperatorsEnum.EXPONENTIATION, type: ButtonsEnum.OPERATOR },
  { id: 10, label: OperatorsEnum.SQUARE_ROOT, type: ButtonsEnum.OPERATOR },
  { id: 11, label: OperatorsEnum.FACTORIAL, type: ButtonsEnum.OPERATOR },
  { id: 12, label: OperatorsEnum.PI, type: ButtonsEnum.OPERATOR }
]
