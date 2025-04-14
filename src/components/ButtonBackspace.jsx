import { buttonsEnum, buttonStylesEnum } from '../helpers/enums'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonBackspace() {
  const { equals, editing, editOperator, elements, lastElement, resetElements, updateLastElement, removeLastElement } =
    useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (
      !elements.length ||
      (editing && editOperator) ||
      (equals && !lastElement) ||
      (elements.length === 1 && lastElement === '0')
    ) {
      return
    }

    const newLastElement = lastElement.slice(0, -1)

    if (isOperator(lastElement) || (!newLastElement && elements.length > 1)) {
      removeLastElement()
      return
    }

    if (!newLastElement && elements.length === 1) {
      resetElements()
      return
    }

    updateLastElement(newLastElement)
  }

  return (
    <Button
      icon={buttonsEnum.backspace}
      type={buttonStylesEnum.primary}
      onClick={handleClick}
    />
  )
}

export default ButtonBackspace
