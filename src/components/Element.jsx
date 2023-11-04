import clsx from 'clsx'
import PropTypes from 'prop-types'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'

function Element({ index, element }) {
  const {
    equals,
    editIndex,
    setEditing,
    setEditIndex,
    setEditReplace,
    setEditOperator
  } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (equals) {
      return
    }

    setEditing(true)
    setEditIndex(index)
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
        { 'cursor-default': index === editIndex || equals },
        { 'cursor-pointer': index !== editIndex && !equals }
      )}
      onClick={handleClick}
    >
      <span>{element}</span>
    </div>
  )
}

Element.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.string.isRequired
}

export default Element
