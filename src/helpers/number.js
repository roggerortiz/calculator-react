import { LabelsEnum } from './enums'
import {
  addElement,
  getLastElement,
  isEmptyElements,
  isOperator,
  updateElements,
  updateLastElement
} from './expression'

export const addNumber = ({ number, isEditing, elements, hasResult, reCalculate }) => {
  if (isEditing) {
    return {}
  }

  if (isEmptyElements(elements) && number === LabelsEnum.ZERO) {
    return {}
  }

  if (hasResult) {
    return updateElements([number], reCalculate)
  }

  const lastElement = getLastElement(elements)

  if (isOperator(lastElement)) {
    return addElement(number, elements, reCalculate)
  }

  const newLastElement = `${lastElement !== LabelsEnum.ZERO ? lastElement : ''}${number}`
  return updateLastElement(newLastElement, elements, reCalculate)
}

export const editNumber = ({ number, isEditing, editingIndex, isEditingOperator, isEditingReplace, elements }) => {
  if (!isEditing || isEditingOperator) {
    return {}
  }

  let element = elements[editingIndex]

  if (element === LabelsEnum.ZERO && number === LabelsEnum.ZERO) {
    return {}
  }

  elements[editingIndex] = `${element !== '0' && !isEditingReplace ? element : ''}${number}`

  return {
    ...updateElements(elements),
    isEditingReplace: false
  }
}
