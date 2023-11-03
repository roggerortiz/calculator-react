import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonBackspace() {
  const {
    hasResult,
    editing,
    editOperator,
    elements,
    lastElement,
    resetElements,
    updateLastElement,
    removeLastElement
  } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (
      !elements.length ||
      (editing && editOperator) ||
      (hasResult && !lastElement) ||
      (elements.length === 1 && lastElement === '0')
    ) {
      return
    }

    const newLastElement = lastElement.slice(0, lastElement.length - 1)

    if (isOperator(lastElement) || (!newLastElement && elements.length > 1)) {
      removeLastElement()
      return
    }

    if (!newLastElement && elements.length === 1) {
      resetElements()
      return
    }

    updateLastElement(newLastElement)
  }

  return (
    <button
      className={clsx(
        'flex justify-center items-center border rounded font-semibold text-lg h-12 bg-cyan-500 dark:bg-cyan-700 text-white',
        { 'opacity-60': editing && editOperator }
      )}
      disabled={editing && editOperator}
      onClick={handleClick}
    >
      <ButtonIcon icon={faArrowLeft} />
    </button>
  )
}

export default ButtonBackspace
