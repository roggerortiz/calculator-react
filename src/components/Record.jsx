import PropTypes from 'prop-types'
import { isEdition } from '../helpers/expression'
import { useCalculator } from '../hooks/useCalculator'

function Record({ index, record }) {
  const { editionIndex, setEdition } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    setEdition(index, true)
  }

  return (
    <button
      className='leading-none p-0.5'
      disabled={isEdition(editionIndex)}
      onClick={handleClick}
    >
      <span>{record}</span>
    </button>
  )
}

Record.propTypes = {
  index: PropTypes.number.isRequired,
  record: PropTypes.string.isRequired
}

export default Record
