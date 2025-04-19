import PropTypes from 'prop-types'
import { useCalculator } from '../hooks/useCalculator'

function Record({ index, record }) {
  const { isEditing, setEditing } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (!isEditing) {
      setEditing(index, record, true)
    }
  }

  return (
    <button
      className='leading-none p-0.5'
      disabled={isEditing}
      onClick={handleClick}
    >
      {record}
    </button>
  )
}

Record.propTypes = {
  index: PropTypes.number.isRequired,
  record: PropTypes.string.isRequired
}

export default Record
