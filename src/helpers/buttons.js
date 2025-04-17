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
import { ButtonTypesEnum, LabelsEnum, NumbersEnum, OperatorsEnum } from './enums'

export const standardButtons = [
  { id: 1, type: ButtonTypesEnum.CLEAN },
  { id: 2, icon: faArrowLeft, type: ButtonTypesEnum.BACKSPACE },
  { id: 3, icon: faPercent, type: ButtonTypesEnum.PERCENT },
  { id: 4, label: OperatorsEnum.divide, icon: faDivide, type: ButtonTypesEnum.OPERATOR },
  { id: 5, label: NumbersEnum.SEVEN, type: ButtonTypesEnum.NUMBER },
  { id: 6, label: NumbersEnum.EIGHT, type: ButtonTypesEnum.NUMBER },
  { id: 7, label: NumbersEnum.NINE, type: ButtonTypesEnum.NUMBER },
  { id: 8, label: OperatorsEnum.TIMES, icon: faXmark, type: ButtonTypesEnum.OPERATOR },
  { id: 9, label: NumbersEnum.FOUR, type: ButtonTypesEnum.NUMBER },
  { id: 10, label: NumbersEnum.FIVE, type: ButtonTypesEnum.NUMBER },
  { id: 11, label: NumbersEnum.SIX, type: ButtonTypesEnum.NUMBER },
  { id: 12, label: OperatorsEnum.MINUS, icon: faMinus, type: ButtonTypesEnum.OPERATOR },
  { id: 13, label: NumbersEnum.ONE, type: ButtonTypesEnum.NUMBER },
  { id: 14, label: NumbersEnum.TWO, type: ButtonTypesEnum.NUMBER },
  { id: 15, label: NumbersEnum.THREE, type: ButtonTypesEnum.NUMBER },
  { id: 16, label: OperatorsEnum.PLUS, icon: faPlus, type: ButtonTypesEnum.OPERATOR },
  { id: 17, icon: faRepeat, type: ButtonTypesEnum.CALCULATOR },
  { id: 18, label: NumbersEnum.ZERO, type: ButtonTypesEnum.NUMBER },
  { id: 19, label: LabelsEnum.DECIMAL_POINT, type: ButtonTypesEnum.DECIMAL_POINT },
  { id: 20, icon: faEquals, type: ButtonTypesEnum.EQUALS },
  { id: 21, icon: faCheck, type: ButtonTypesEnum.EDITED }
]

export const scientificButtons = [
  { id: 1, type: ButtonTypesEnum.DEGREES },
  { id: 2, label: OperatorsEnum.SINE, type: ButtonTypesEnum.OPERATOR },
  { id: 3, label: OperatorsEnum.COSINE, type: ButtonTypesEnum.OPERATOR },
  { id: 4, label: OperatorsEnum.TANGENT, type: ButtonTypesEnum.OPERATOR },
  { id: 5, label: OperatorsEnum.LOGARITHM, type: ButtonTypesEnum.OPERATOR },
  { id: 6, label: OperatorsEnum.NATURAL_LOGARITHM, type: ButtonTypesEnum.OPERATOR },
  { id: 7, label: OperatorsEnum.LEFT_PARENTHESIS, type: ButtonTypesEnum.OPERATOR },
  { id: 8, label: OperatorsEnum.RIGHT_PARENTHESIS, type: ButtonTypesEnum.OPERATOR },
  { id: 9, label: OperatorsEnum.EXPONENTIATION, type: ButtonTypesEnum.OPERATOR },
  { id: 10, label: OperatorsEnum.SQUARE_ROOT, type: ButtonTypesEnum.OPERATOR },
  { id: 11, label: OperatorsEnum.FACTORIAL, type: ButtonTypesEnum.OPERATOR },
  { id: 12, label: OperatorsEnum.PI, type: ButtonTypesEnum.OPERATOR }
]
