import clsx from 'clsx'
import PropTypes from 'prop-types'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'

function Element({ index, element }) {
  const {
    hasResult,
    editIndex,
    editValue,
    setEditing,
    setEditIndex,
    setEditValue,
    setEditReplace,
    setEditOperator
  } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (hasResult) {
      return
    }

    setEditing(true)
    setEditIndex(index)
    setEditValue(element)
    setEditReplace(!isOperator(element))
    setEditOperator(isOperator(element))
  }

  return (
    <div
      className={clsx(
        'border-2 rounded p-0.5',
        { 'border-cyan-400': index === editIndex },
        { 'dark:border-cyan-600': index === editIndex },
        { 'border-transparent': index !== editIndex },
        { 'cursor-default': index === editIndex || hasResult },
        { 'cursor-pointer': index !== editIndex && !hasResult }
      )}
      onClick={handleClick}
    >
      <span>{editIndex === index ? editValue : element}</span>
    </div>
  )
}

Element.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.string.isRequired
}

export default Element
