import clsx from 'clsx'
import PropTypes from 'prop-types'
import { isElementEditionByIndex } from '../helpers/expression'
import { useCalculator } from '../hooks/useCalculator'

function Element({ index, element }) {
  const { hasResult, editionIndex, setEdition } = useCalculator()
  const isElementEdition = isElementEditionByIndex(index, editionIndex)

  const handleClick = (e) => {
    e.preventDefault()
    setEdition(index, false)
  }

  return (
    <button
      className={clsx(
        'border-2 leading-none p-0.5',
        { 'border-transparent': !isElementEdition },
        { 'rounded border-cyan-400 dark:border-cyan-600': isElementEdition }
      )}
      disabled={hasResult}
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
