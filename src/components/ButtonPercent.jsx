import { faPercent } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonPercent() {
  const {
    equals,
    editing,
    editOperator,
    lastElement,
    updateLastElement
  } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if ((editing && editOperator) || (equals && !lastElement)) {
      return
    }

    const lastNumber = Number(lastElement)
    const newLastElement = lastNumber ? Number(lastElement) / 100 : 0
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
      <ButtonIcon icon={faPercent} />
    </button>
  )
}

export default ButtonPercent
