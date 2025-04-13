import { faPlusMinus } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { operatorsEnum } from '../helpers/enums'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonPlusMinus() {
  const { equals, editing, editOperator, elements, lastElement, updateLastElement } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (
      isOperator(lastElement) ||
      (equals && !lastElement) ||
      (editing && editOperator) ||
      (elements.length === 1 && lastElement === '0')
    ) {
      return
    }

    const isNegative = lastElement.startsWith(operatorsEnum.minus)

    const newLastElement = isNegative ? lastElement.slice(1) : `${operatorsEnum.minus}${lastElement}`

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
      <ButtonIcon icon={faPlusMinus} />
    </button>
  )
}

export default ButtonPlusMinus
