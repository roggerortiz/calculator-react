import { addElement, getLastElement, isOperator, updateElements, updateLastElement } from './expression'

export const addOperator = ({ operator, elements, isEditing, reCalculate }) => {
  if (isEditing) {
    return {}
  }

  const lastElement = getLastElement(elements)

  if (isOperator(lastElement)) {
    return updateLastElement(operator, elements, reCalculate)
  }

  return addElement(operator, elements, reCalculate)
}

export const editOperator = ({ operator, elements, isEditing, editingIndex, isEditingOperator, reCalculate }) => {
  if (!isEditing || !isEditingOperator) {
    return {}
  }

  elements[editingIndex] = operator

  return updateElements(elements, reCalculate)
}
