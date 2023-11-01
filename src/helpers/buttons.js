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

export const buttons = [
  { id: 1, icon: faPercent, operator: true, action: 'percent' },
  { id: 2, label: 'c', operator: true, action: 'clean' },
  { id: 3, icon: faArrowLeft, operator: true, action: 'backspace' },
  { id: 4, label: '÷', icon: faDivide, operator: true, action: 'addOperator' },
  { id: 5, label: '7', operator: false, action: 'addNumber' },
  { id: 6, label: '8', operator: false, action: 'addNumber' },
  { id: 7, label: '9', operator: false, action: 'addNumber' },
  { id: 8, label: 'x', icon: faXmark, operator: true, action: 'addOperator' },
  { id: 9, label: '4', operator: false, action: 'addNumber' },
  { id: 10, label: '5', operator: false, action: 'addNumber' },
  { id: 11, label: '6', operator: false, action: 'addNumber' },
  { id: 12, label: '-', icon: faMinus, operator: true, action: 'addOperator' },
  { id: 13, label: '1', operator: false, action: 'addNumber' },
  { id: 14, label: '2', operator: false, action: 'addNumber' },
  { id: 15, label: '3', operator: false, action: 'addNumber' },
  { id: 16, label: '+', icon: faPlus, operator: true, action: 'addOperator' },
  { id: 17, icon: faPlusMinus, operator: true, action: 'toggleNegative' },
  { id: 18, label: '0', operator: false, action: 'addNumber' },
  { id: 19, label: '.', operator: false, action: 'addDecimal' },
  { id: 20, icon: faEquals, operator: true, action: 'equals' }
]
