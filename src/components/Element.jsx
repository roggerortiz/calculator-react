import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useCalculator } from '../hooks/useCalculator'

function Element({ index, element }) {
  const { hasResult, editIndex, editing } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    editing(index, element, false)
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
      <span>{element}</span>
    </div>
  )
}

Element.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.string.isRequired
}

export default Element
