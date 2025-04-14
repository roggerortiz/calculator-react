import PropTypes from 'prop-types'
import { buttonStylesEnum, numbersEnum } from '../helpers/enums'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonNumber({ label }) {
  const {
    equals,
    elements,
    editing,
    editIndex,
    editReplace,
    editOperator,
    lastElement,
    addElement,
    setEquals,
    setElements,
    setEditReplace,
    updateLastElement
  } = useCalculator()

  const handleSetNumber = () => {
    if (elements.length === 1 && lastElement === numbersEnum.zero && label === numbersEnum.zero) {
      return
    }

    if (equals) {
      setElements([label])
      setEquals(false)
      return
    }

    if (!elements.length) {
      setElements([label])
      return
    }

    if (isOperator(lastElement)) {
      addElement(label)
      return
    }

    const prevLastElement = lastElement !== '0' ? lastElement : ''
    const newLastElement = `${prevLastElement}${label}`

    updateLastElement(newLastElement)
  }

  const handleEditNumber = () => {
    const element = elements[editIndex]

    if (element === '0' && label === '0') {
      return
    }

    const prevElement = element !== '0' && !editReplace ? element : ''
    const newElement = `${prevElement}${label}`

    const newElements = [...elements]
    newElements[editIndex] = newElement

    setEditReplace(false)
    setElements(newElements)
  }

  const handleClick = (e) => {
    e.preventDefault()

    if (!editing) {
      handleSetNumber()
    } else if (editing && !editOperator) {
      handleEditNumber()
    }
  }

  return (
    <Button
      label={label}
      type={buttonStylesEnum.secondary}
      onClick={handleClick}
    />
  )
}

ButtonNumber.propTypes = {
  label: PropTypes.string.isRequired
}

export default ButtonNumber
