import PropTypes from 'prop-types'
import { buttonStylesEnum } from '../helpers/enums'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonOperator({ label }) {
  const {
    equals,
    elements,
    lastElement,
    editing,
    editIndex,
    editOperator,
    setElements,
    addElement,
    updateLastElement
  } = useCalculator()

  const handleSetOperator = () => {
    if (equals && !lastElement) {
      return
    }

    if (isOperator(lastElement)) {
      updateLastElement(label)
    } else {
      addElement(label)
    }
  }

  const handleEditOperator = () => {
    const newElements = [...elements]
    newElements[editIndex] = label
    setElements(newElements)
  }

  const handleClick = (e) => {
    e.preventDefault()

    if (!editing) {
      handleSetOperator()
    } else if (editOperator) {
      handleEditOperator()
    }
  }

  return (
    <Button
      icon={label}
      type={buttonStylesEnum.primary}
      onClick={handleClick}
    />
  )
}

ButtonOperator.propTypes = {
  label: PropTypes.string.isRequired
}

export default ButtonOperator
