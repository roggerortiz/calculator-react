import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { buttons } from '../helpers/buttons'
import { calculate } from '../helpers/calculator'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'

function Touchpad() {
  const {
    cleanLabel,
    hasResult,
    elements,
    lastElement,
    resetCleanLabel,
    setOperation,
    setHasResult,
    setElements,
    resetElements,
    addElement,
    updateLastElement,
    removeLastElement
  } = useCalculator()

  const percent = () => {
    if (hasResult && !lastElement) {
      return
    }

    const lastNumber = Number(lastElement)
    const newLastElement = lastNumber ? Number(lastElement) / 100 : 0
    updateLastElement(newLastElement)
  }

  const clean = () => {
    if (cleanLabel === 'c') {
      resetCleanLabel()
      resetElements()
    } else if (cleanLabel === 'ac') {
      setOperation('')
    }
  }

  const backspace = () => {
    if (
      !elements.length ||
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

  const addNumber = (number) => {
    if (hasResult) {
      setHasResult(false)
      setElements([number])
      return
    }

    if (!elements.length) {
      setElements([number])
      return
    }

    if (isOperator(lastElement)) {
      addElement(number)
      return
    }

    const canConcat = lastElement !== '0'
    const newLastElement = canConcat ? `${lastElement}${number}` : number

    updateLastElement(newLastElement)
  }

  const addOperator = (operator) => {
    if (hasResult && !lastElement) {
      return
    }

    if (isOperator(lastElement)) {
      updateLastElement(operator)
    } else {
      addElement(operator)
    }
  }

  const addDecimal = () => {
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

  const toggleNegative = () => {
    if (
      isOperator(lastElement) ||
      (hasResult && !lastElement) ||
      (elements.length === 1 && lastElement === '0')
    ) {
      return
    }

    const isNegative = lastElement.startsWith('-')
    const newLastElement = isNegative ? lastElement.slice(1) : `-${lastElement}`

    updateLastElement(newLastElement)
  }

  const equals = () => {
    if (hasResult) {
      return
    }

    const result = calculate(elements)
    const operation = [elements.join(' '), result ?? ''].join(' = ')

    setOperation(operation)
    setElements([result])
    setHasResult(true)
  }

  const handleClick = (label, action) => (e) => {
    e.preventDefault()

    if (!action) {
      return
    }

    const actions = {
      percent,
      clean,
      backspace,
      addNumber,
      addOperator,
      addDecimal,
      toggleNegative,
      equals
    }

    actions[action](label)
  }

  return (
    <div className='grid grid-cols-4 gap-1 overflow-auto light-scrollbars'>
      {buttons.map(({ id, label, icon, operator, action }) => (
        <button
          key={id}
          className={clsx(
            'flex justify-center items-center border rounded font-semibold text-lg h-12',
            { 'bg-zinc-200': !operator },
            { 'text-zinc-800': !operator },
            { 'dark:bg-zinc-700': !operator },
            { 'dark:text-white': !operator },
            { 'bg-cyan-400': operator },
            { 'dark:bg-cyan-600': operator },
            { 'text-zinc-800': operator }
          )}
          onClick={handleClick(label, action)}
        >
          {Boolean(icon) && (
            <FontAwesomeIcon
              icon={icon}
              size='xs'
            />
          )}

          {Boolean(!icon && label && label !== 'c') && <span>{label}</span>}

          {Boolean(label === 'c') && <span>{cleanLabel.toUpperCase()}</span>}
        </button>
      ))}
    </div>
  )
}

export default Touchpad
