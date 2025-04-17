import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useCalculator } from '../hooks/useCalculator'

function Element({ index, element }) {
  const { hasResult, editingIndex, setEditing } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    setEditing(index, element, false)
  }

  return (
    <div
      className={clsx(
        'border-2 rounded p-0.5',
        { 'border-cyan-400': index === editingIndex },
        { 'dark:border-cyan-600': index === editingIndex },
        { 'border-transparent': index !== editingIndex },
        { 'cursor-default': index === editingIndex || hasResult },
        { 'cursor-pointer': index !== editingIndex && !hasResult }
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
