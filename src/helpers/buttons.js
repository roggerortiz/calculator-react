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
import { isEdition, isOperatorEdition } from './expression'
import { isNumber, isOperator } from './utils'

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
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 5,
    order: 20,
    icon: faXmark,
    label: LabelsEnum.X_MARK,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 6,
    order: 24,
    icon: faMinus,
    label: LabelsEnum.MINUS,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 7,
    order: 28,
    icon: faPlus,
    label: LabelsEnum.PLUS,
    style: ButtonStylesEnum.PRIMARY,
    action: ButtonActionsEnum.ELEMENT,
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
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 12,
    order: 26,
    label: LabelsEnum.TWO,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 13,
    order: 27,
    label: LabelsEnum.THREE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 14,
    order: 21,
    label: LabelsEnum.FOUR,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 15,
    order: 22,
    label: LabelsEnum.FIVE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 16,
    order: 23,
    label: LabelsEnum.SIX,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 17,
    order: 17,
    label: LabelsEnum.SEVEN,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 18,
    order: 18,
    label: LabelsEnum.EIGHT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 19,
    order: 19,
    label: LabelsEnum.NINE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 20,
    order: 30,
    label: LabelsEnum.ZERO,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.STANDARD
  },
  {
    id: 21,
    order: 31,
    label: LabelsEnum.DECIMAL_POINT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
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
    label: LabelsEnum.SINE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 24,
    order: 3,
    label: LabelsEnum.COSINE,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 25,
    order: 4,
    label: LabelsEnum.TANGENT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 26,
    order: 5,
    label: LabelsEnum.LOGARITHM,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 27,
    order: 6,
    label: LabelsEnum.NATURAL_LOGARITHM,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 28,
    order: 7,
    label: LabelsEnum.LEFT_PARENTHESES,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 29,
    order: 8,
    label: LabelsEnum.RIGHT_PARENTHESES,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 30,
    order: 9,
    value: LabelsEnum.CARET,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 31,
    order: 10,
    value: LabelsEnum.RADICAL,
    label: LabelsEnum.SQUARE_ROOT,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 32,
    order: 11,
    value: LabelsEnum.EXCLAMATION_POINT,
    label: LabelsEnum.FACTORIAL,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
  },
  {
    id: 33,
    order: 12,
    label: LabelsEnum.PI_SYMBOL,
    style: ButtonStylesEnum.SECONDARY,
    action: ButtonActionsEnum.ELEMENT,
    calculator: CalculatorsEnum.SCIENTIFIC
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

export const getButtons = (calculator, editionIndex = -1) => {
  return buttons
    .filter((button) => {
      return calculator === CalculatorsEnum.SCIENTIFIC || button.calculator === CalculatorsEnum.STANDARD
    })
    .filter((button) => {
      if (button.action !== ButtonActionsEnum.EQUALS && button.action !== ButtonActionsEnum.EDITED) {
        return true
      }

      return (
        (button.action === ButtonActionsEnum.EQUALS && !isEdition(editionIndex)) ||
        (button.action === ButtonActionsEnum.EDITED && isEdition(editionIndex))
      )
    })
    .sort((buttonA, buttonB) => {
      return buttonA.order > buttonB.order ? 1 : -1
    })
}

export const isDisabledButton = (label, action, editionIndex) => {
  const isNumberButton = isNumber(label)
  const isOperatorButton = isOperator(label)
  const isCleanButton = action === ButtonActionsEnum.CLEAN
  const isDecimalPointButton = action === LabelsEnum.DECIMAL_POINT

  const edition = isEdition(editionIndex)
  const operatorEdition = isOperatorEdition(editionIndex)

  return (
    (edition && operatorEdition && (isCleanButton || isNumberButton || isDecimalPointButton)) ||
    (edition && !operatorEdition && (isCleanButton || isOperatorButton))
  )
}
