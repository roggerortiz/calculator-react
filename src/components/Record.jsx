import PropTypes from 'prop-types'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'

function Record({ index, record }) {
  const { setEquals, setEditing, setEditIndex, setEditReplace, setEditOperator } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    setEquals(false)
    setEditing(true)
    setEditIndex(index)
    setEditReplace(!isOperator(record))
    setEditOperator(isOperator(record))
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
