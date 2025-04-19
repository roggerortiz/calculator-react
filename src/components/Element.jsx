import PropTypes from 'prop-types'
import { useCalculator } from '../hooks/useCalculator'

function Element({ index, element }) {
  const { editingIndex, isEditing, setEditing } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    setEditing(index, element, false)
  }

  if (index === editingIndex && isEditing) {
    return (
      <div className='rounded border-2 border-cyan-400 dark:border-cyan-600 leading-none p-0.5'>
        <span>{element}</span>
      </div>
    )
  }

  return (
    <button
      className='rounded border-2 border-transparent leading-none p-0.5'
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
