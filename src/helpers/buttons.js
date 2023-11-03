import {
  faArrowLeft,
  faDivide,
  faEquals,
  faMinus,
  faPercent,
  faPlus,
  faPlusMinus,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { actionsEnums, operatorsEnum } from './enums'

export const buttons = [
  { id: 1, clean: true, operator: true, action: actionsEnums.clean },
  { id: 2, icon: faArrowLeft, operator: true, action: actionsEnums.backspace },
  { id: 3, icon: faPercent, operator: true, action: actionsEnums.percent },
  {
    id: 4,
    label: operatorsEnum.divideBy,
    icon: faDivide,
    operator: true,
    action: actionsEnums.addOperator
  },
  { id: 5, label: 'a', operator: false, action: actionsEnums.addNumber },
  { id: 6, label: '8', operator: false, action: actionsEnums.addNumber },
  { id: 7, label: '9', operator: false, action: actionsEnums.addNumber },
  {
    id: 8,
    label: operatorsEnum.times,
    icon: faXmark,
    operator: true,
    action: actionsEnums.addOperator
  },
  { id: 9, label: '4', operator: false, action: actionsEnums.addNumber },
  { id: 10, label: '5', operator: false, action: actionsEnums.addNumber },
  { id: 11, label: '6', operator: false, action: actionsEnums.addNumber },
  {
    id: 12,
    label: operatorsEnum.minus,
    icon: faMinus,
    operator: true,
    action: actionsEnums.addOperator
  },
  { id: 13, label: '1', operator: false, action: actionsEnums.addNumber },
  { id: 14, label: '2', operator: false, action: actionsEnums.addNumber },
  { id: 15, label: '3', operator: false, action: actionsEnums.addNumber },
  {
    id: 16,
    label: operatorsEnum.plus,
    icon: faPlus,
    operator: true,
    action: actionsEnums.addOperator
  },
  {
    id: 17,
    icon: faPlusMinus,
    operator: true,
    action: actionsEnums.toggleNegative
  },
  { id: 18, label: '0', operator: false, action: actionsEnums.addNumber },
  { id: 19, label: '.', operator: false, action: actionsEnums.addDecimalPoint },
  {
    id: 20,
    icon: faEquals,
    operator: true,
    action: actionsEnums.calculateResult
  }
]
