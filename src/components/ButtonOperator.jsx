import {
  faDivide,
  faMinus,
  faPlus,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { operatorsEnum } from '../helpers/enums'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonOperator({ label }) {
  const {
    hasResult,
    elements,
    lastElement,
    editing,
    editIndex,
    editOperator,
    setElements,
    setEditValue,
    addElement,
    updateLastElement
  } = useCalculator()

  const icons = {
    [operatorsEnum.plus]: faPlus,
    [operatorsEnum.minus]: faMinus,
    [[operatorsEnum.times]]: faXmark,
    [operatorsEnum.divide]: faDivide
  }

  const handleSetOperator = () => {
    if (hasResult && !lastElement) {
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

    setEditValue(label)
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
    <button
      className={clsx(
        'flex justify-center items-center border rounded font-semibold text-lg h-12 bg-cyan-500 dark:bg-cyan-700 text-white',
        { 'opacity-60': editing && !editOperator }
      )}
      disabled={editing && !editOperator}
      onClick={handleClick}
    >
      <ButtonIcon icon={icons[label]} />
    </button>
  )
}

ButtonOperator.propTypes = {
  label: PropTypes.string.isRequired
}

export default ButtonOperator
