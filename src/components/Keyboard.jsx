import { buttons } from '../helpers/buttons'
import { calculate } from '../helpers/calculator'
import { actionsEnums, cleanLabelsEnums, operatorsEnum } from '../helpers/enums'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function Keyboard() {
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

  const clean = () => {
    if (cleanLabel === cleanLabelsEnums.c) {
      resetCleanLabel()
      resetElements()
    } else if (cleanLabel === cleanLabelsEnums.ac) {
      setOperation('')
    }
  }

  const percent = () => {
    if (hasResult && !lastElement) {
      return
    }

    const lastNumber = Number(lastElement)
    const newLastElement = lastNumber ? Number(lastElement) / 100 : 0
    updateLastElement(newLastElement)
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

    if (elements.length === 1 && lastElement === '0' && number === '0') {
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

  const addDecimalPoint = () => {
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

    const isNegative = lastElement.startsWith(operatorsEnum.minus)

    const newLastElement = isNegative
      ? lastElement.slice(1)
      : `${operatorsEnum.minus}${lastElement}`

    updateLastElement(newLastElement)
  }

  const calculateResult = () => {
    if (
      hasResult ||
      !elements.length ||
      (elements.length === 1 && elements[0] === '0')
    ) {
      return
    }

    const result = calculate(elements)
    const operation = [elements.join(' '), result ?? ''].join(' = ').trim()

    setOperation(operation)
    setElements([result])
    setHasResult(true)
  }

  const handleClick = (label, action) => (e) => {
    e.preventDefault()

    if (!action) {
      return
    }

    const actionsFn = {
      percent,
      clean,
      backspace,
      addNumber,
      addOperator,
      addDecimalPoint,
      toggleNegative,
      calculateResult
    }

    if (
      action === actionsEnums.addNumber ||
      action === actionsEnums.addOperator
    ) {
      actionsFn[action](label)
    } else {
      actionsFn[action]()
    }
  }

  return (
    <div className='grid grid-cols-4 gap-1 overflow-auto light-scrollbars'>
      {buttons
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map(({ id, ...data }) => (
          <Button
            key={id}
            {...data}
            onClick={handleClick}
          />
        ))}
    </div>
  )
}

export default Keyboard
