import PropTypes from 'prop-types'
import { useCalculator } from '../hooks/useCalculator'

function Record({ index, record }) {
  const { setEditing } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    setEditing(index, record, true)
  }

  return (
    <div
      className='border-2 border-transparent px-0.5 cursor-pointer'
      onClick={handleClick}
    >
      <span>{record}</span>
    </div>
  )
}

Record.propTypes = {
  index: PropTypes.number.isRequired,
  record: PropTypes.string.isRequired
}

export default Record
