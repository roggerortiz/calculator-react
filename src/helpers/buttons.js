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
import { ButtonActionsEnum, ButtonStylesEnum, CalculatorsEnum, LabelsEnum } from './enums'

const buttons = [
  {
    id: 1,
    order: 13,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.CLEAN,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 2,
    order: 14,
    icon: faArrowLeft,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.BACKSPACE,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 3,
    order: 15,
    icon: faPercent,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.PERCENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 4,
    order: 16,
    icon: faDivide,
    label: LabelsEnum.DIVIDE,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.OPERATOR,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 5,
    order: 20,
    icon: faXmark,
    label: LabelsEnum.X_MARK,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.OPERATOR,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 6,
    order: 24,
    icon: faMinus,
    label: LabelsEnum.MINUS,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.OPERATOR,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 7,
    order: 28,
    icon: faPlus,
    label: LabelsEnum.PLUS,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.OPERATOR,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 8,
    order: 29,
    icon: faRepeat,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.CALCULATOR,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 9,
    order: 32,
    icon: faEquals,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.EQUALS,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 10,
    order: 32,
    icon: faCheck,
    style: ButtonStylesEnum.DANGER,
    action: ButtonActionsEnum.EDITED,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 11,
    order: 25,
    label: LabelsEnum.ONE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 12,
    order: 26,
    label: LabelsEnum.TWO,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 13,
    order: 27,
    label: LabelsEnum.THREE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 14,
    order: 21,
    label: LabelsEnum.FOUR,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 15,
    order: 22,
    label: LabelsEnum.FIVE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 16,
    order: 23,
    label: LabelsEnum.SIX,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 17,
    order: 17,
    label: LabelsEnum.SEVEN,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 18,
    order: 18,
    label: LabelsEnum.EIGHT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 19,
    order: 19,
    label: LabelsEnum.NINE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 20,
    order: 30,
    label: LabelsEnum.ZERO,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.NUMBER,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 21,
    order: 31,
    label: LabelsEnum.DECIMAL_POINT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.DECIMAL_POINT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 22,
    order: 1,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.DEGREES,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 23,
    order: 2,
    label: LabelsEnum.SIN,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.UNARY_OPERATOR,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 24,
    order: 3,
    label: LabelsEnum.COS,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.UNARY_OPERATOR,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 25,
    order: 4,
    label: LabelsEnum.TAN,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.UNARY_OPERATOR,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 26,
    order: 5,
    label: LabelsEnum.LOGARITHM,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.UNARY_OPERATOR,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 27,
    order: 6,
    label: LabelsEnum.NATURAL_LOGARITHM,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.UNARY_OPERATOR,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 28,
    order: 7,
    label: LabelsEnum.LEFT_PARENTHESIS,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.LEFT_PARENTHESIS,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 29,
    order: 8,
    label: LabelsEnum.RIGHT_PARENTHESIS,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.RIGHT_PARENTHESIS,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 30,
    order: 9,
    value: LabelsEnum.CARET,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.OPERATOR,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 31,
    order: 10,
    value: LabelsEnum.RADICAL,
    label: LabelsEnum.SQUARE_ROOT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.UNARY_OPERATOR,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 32,
    order: 11,
    value: LabelsEnum.EXCLAMATION_POINT,
    label: LabelsEnum.FACTORIAL,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.FACTORIAL,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 33,
    order: 12,
    label: LabelsEnum.PI_SYMBOL,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.CONSTANT,
    calculator: CalculatorsEnum.SCIENTIFIC
  }
]

export const getButtons = (calculator) => {
  return buttons
    .filter((button) => {
      return calculator === CalculatorsEnum.SCIENTIFIC || button.calculator === CalculatorsEnum.STANDARD
    })
    .sort((buttonA, buttonB) => {
      return buttonA.order > buttonB.order ? 1 : -1
    })
}
