import clsx from 'clsx'
import PropTypes from 'prop-types'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'

function Record({ index, record }) {
  const {
    records,
    setHasResult,
    setElements,
    setEditing,
    setEditIndex,
    setEditValue,
    setEditReplace,
    setEditOperator
  } = useCalculator()

  const maxValidIndex = records.length - 3

  const handleClick = (e) => {
    e.preventDefault()

    if (index > maxValidIndex) {
      return
    }

    const elements = [...records].slice(0, -2)

    setHasResult(false)
    setElements(elements)

    setEditing(true)
    setEditIndex(index)
    setEditValue(record)
    setEditReplace(!isOperator(record))
    setEditOperator(isOperator(record))
  }

  return (
    <div
      className={clsx('border-2 border-transparent px-0.5', {
        'cursor-default': index > maxValidIndex,
        'cursor-pointer': index <= maxValidIndex
      })}
      onClick={handleClick}
    >
      {record}
    </div>
  )
}

Record.propTypes = {
  index: PropTypes.number.isRequired,
  record: PropTypes.string.isRequired
}

export default Record
