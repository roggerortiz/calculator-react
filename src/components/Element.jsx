import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useCalculator } from '../hooks/useCalculator'

function Element({ index, element }) {
  const { editingIndex, isEditing, setEditing } = useCalculator()
  const isEditingElement = index === editingIndex && isEditing

  const handleClick = (e) => {
    e.preventDefault()
    setEditing(index, element, false)
  }

  return (
    <button
      className={clsx(
        'border-2 leading-none p-0.5',
        { 'border-transparent': !isEditingElement },
        { 'rounded border-cyan-400 dark:border-cyan-600': isEditingElement }
      )}
      onClick={handleClick}
    >
      <span>{element}</span>
    </button>
  )
}

Element.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.string.isRequired
}

export default Element
