import clsx from 'clsx'
import PropTypes from 'prop-types'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'

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
    if (elements.length === 1 && lastElement === '0' && label === '0') {
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
    } else if (!editOperator) {
      handleEditNumber()
    }
  }

  return (
    <button
      className={clsx(
        'flex justify-center items-center border rounded font-semibold text-lg h-12 bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-white',
        { 'opacity-60': editing && editOperator }
      )}
      disabled={editing && editOperator}
      onClick={handleClick}
    >
      <span>{label}</span>
    </button>
  )
}

ButtonNumber.propTypes = {
  label: PropTypes.string.isRequired
}

export default ButtonNumber
