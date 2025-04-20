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

  if (isEmptyElements(elements)) {
    return updateLastElement(number, elements, reCalculate)
  }

  return updateLastElement(`${lastElement}${number}`, elements, reCalculate)
}

export const editNumber = ({
  number,
  elements,
  reCalculate,
  isEditing,
  editingIndex,
  isEditingOperator,
  isEditingReplace
}) => {
  if (!isEditing || isEditingOperator) {
    return {}
  }

  let element = elements[editingIndex]

  if (element === LabelsEnum.ZERO && number === LabelsEnum.ZERO) {
    return {}
  }

  elements[editingIndex] = `${element !== LabelsEnum.ZERO && !isEditingReplace ? element : ''}${number}`

  return {
    ...updateElements(elements, reCalculate),
    records: [...elements],
    isEditingReplace: false
  }
}
