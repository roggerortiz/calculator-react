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
import { ButtonActionsEnum, ButtonStylesEnum, LabelsEnum } from './enums'
import { isEdition, isOperatorEdition } from './expression'
import { isNumber, isOperator } from './utils'

const buttons = [
  {
    id: 1,
    order: 13,
    standard: true,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.CLEAR
  },
  {
    id: 2,
    order: 14,
    standard: true,
    icon: faArrowLeft,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.BACKSPACE
  },
  {
    id: 3,
    order: 15,
    standard: true,
    icon: faPercent,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.PERCENT
  },
  {
    id: 4,
    order: 16,
    standard: true,
    icon: faDivide,
    label: LabelsEnum.DIVIDE,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 5,
    order: 20,
    standard: true,
    icon: faXmark,
    label: LabelsEnum.X_MARK,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 6,
    order: 24,
    standard: true,
    icon: faMinus,
    label: LabelsEnum.MINUS,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 7,
    order: 28,
    standard: true,
    icon: faPlus,
    label: LabelsEnum.PLUS,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 8,
    order: 29,
    standard: true,
    icon: faRepeat,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.CALCULATOR
  },
  {
    id: 9,
    order: 32,
    standard: true,
    icon: faEquals,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.EQUALS
  },
  {
    id: 10,
    order: 32,
    standard: true,
    icon: faCheck,
    style: ButtonStylesEnum.DANGER,
    action: ButtonActionsEnum.EDITED
  },
  {
    id: 11,
    order: 25,
    standard: true,
    label: LabelsEnum.ONE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 12,
    order: 26,
    standard: true,
    label: LabelsEnum.TWO,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 13,
    order: 27,
    standard: true,
    label: LabelsEnum.THREE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 14,
    order: 21,
    standard: true,
    label: LabelsEnum.FOUR,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 15,
    order: 22,
    standard: true,
    label: LabelsEnum.FIVE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 16,
    order: 23,
    standard: true,
    label: LabelsEnum.SIX,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 17,
    order: 17,
    standard: true,
    label: LabelsEnum.SEVEN,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 18,
    order: 18,
    standard: true,
    label: LabelsEnum.EIGHT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 19,
    order: 19,
    standard: true,
    label: LabelsEnum.NINE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 20,
    order: 30,
    standard: true,
    label: LabelsEnum.ZERO,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 21,
    order: 31,
    standard: true,
    label: LabelsEnum.DECIMAL_POINT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 22,
    order: 1,
    standard: false,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.DEGREES
  },
  {
    id: 23,
    order: 2,
    standard: false,
    label: LabelsEnum.SINE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 24,
    order: 3,
    standard: false,
    label: LabelsEnum.COSINE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 25,
    order: 4,
    standard: false,
    label: LabelsEnum.TANGENT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 26,
    order: 5,
    standard: false,
    label: LabelsEnum.LOGARITHM,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 27,
    order: 6,
    standard: false,
    label: LabelsEnum.NATURAL_LOGARITHM,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 28,
    order: 7,
    standard: false,
    label: LabelsEnum.LEFT_PARENTHESES,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 29,
    order: 8,
    standard: false,
    label: LabelsEnum.RIGHT_PARENTHESES,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 30,
    order: 9,
    standard: false,
    value: LabelsEnum.CARET,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 31,
    order: 10,
    standard: false,
    value: LabelsEnum.RADICAL,
    label: LabelsEnum.SQUARE_ROOT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 32,
    order: 11,
    standard: false,
    value: LabelsEnum.EXCLAMATION_POINT,
    label: LabelsEnum.FACTORIAL,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  },
  {
    id: 33,
    order: 12,
    standard: false,
    label: LabelsEnum.PI_SYMBOL,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT
  }
]

export const buttonColors = {
  [ButtonStylesEnum.DANGER]:
    'text-white bg-red-500 hover:bg-red-600 dark:text-white dark:bg-red-600 dark:hover:bg-red-500',
  [ButtonStylesEnum.PRIMARY]:
    'text-white bg-cyan-500 hover:bg-cyan-600 dark:text-white dark:bg-cyan-700 dark:hover:bg-cyan-600',
  [ButtonStylesEnum.SECONDARY]:
    'text-zinc-800 bg-zinc-200 hover:bg-zinc-300 dark:text-white dark:bg-zinc-700 dark:hover:bg-zinc-600'
}

export const getButtons = (standard) => {
  return buttons
    .filter((button) => !standard || button.standard)
    .sort((buttonA, buttonB) => (buttonA.order > buttonB.order ? 1 : -1))
}

export const isDisabledButton = (label, action, editionIndex) => {
  const isNumberButton = isNumber(label)
  const isOperatorButton = isOperator(label)
  const isCleanButton = action === ButtonActionsEnum.CLEAR
  const isDecimalPointButton = action === LabelsEnum.DECIMAL_POINT

  const edition = isEdition(editionIndex)
  const operatorEdition = isOperatorEdition(editionIndex)

  return (
    (edition && operatorEdition && (isCleanButton || isNumberButton || isDecimalPointButton)) ||
    (edition && !operatorEdition && (isCleanButton || isOperatorButton))
  )
}
