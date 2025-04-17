import { NumbersEnum } from './enums'
import { addElement, getLastElement, isOperator, updateElements, updateLastElement } from './expression'

export const addNumber = ({ number, isEditing, elements, hasResult, reCalculate }) => {
  if (isEditing) {
    return {}
  }

  if (elements.length === 1 && elements[0] === NumbersEnum.ZERO && number === NumbersEnum.ZERO) {
    return {}
  }

  if (hasResult || !elements.length) {
    return updateElements([number], reCalculate)
  }

  const lastElement = getLastElement(elements)

  if (isOperator(lastElement)) {
    return addElement(number, elements, reCalculate)
  }

  const newLastElement = `${lastElement !== NumbersEnum.ZERO ? lastElement : ''}${number}`
  return updateLastElement(newLastElement, elements, reCalculate)
}

export const editNumber = ({ number, isEditing, editingIndex, isEditingOperator, isEditingReplace, elements }) => {
  if (!isEditing || isEditingOperator) {
    return {}
  }

  let element = elements[editingIndex]

  if (element === NumbersEnum.ZERO && number === NumbersEnum.ZERO) {
    return {}
  }

  elements[editingIndex] = `${element !== '0' && !isEditingReplace ? element : ''}${number}`

  return {
    ...updateElements(elements),
    isEditingReplace: false
  }
}
