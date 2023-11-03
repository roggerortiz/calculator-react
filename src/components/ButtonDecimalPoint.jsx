import clsx from 'clsx'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'

function ButtonDecimalPoint() {
  const {
    hasResult,
    editing,
    editOperator,
    lastElement,
    addElement,
    updateLastElement
  } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (hasResult && !lastElement) {
      return
    }

    if (isOperator(lastElement)) {
      addElement('0.')
      return
    }

    if (lastElement.includes('.')) {
      return
    }

    updateLastElement(`${lastElement}.`)
  }

  return (
    <button
      className={clsx(
        'flex justify-center items-center border rounded font-semibold text-lg h-12 bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-white',
        { 'opacity-60': editing && editOperator }
      )}
      disabled={editing && editOperator}
      onClick={handleClick}
    >
      <span>.</span>
    </button>
  )
}

export default ButtonDecimalPoint
