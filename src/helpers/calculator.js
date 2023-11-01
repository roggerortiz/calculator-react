import { isFirstOperator, isSecondOperator } from './operators'

const calculateFirstOperation = (elements) => {
  return elements.reduce((result, element, index) => {
    if (isFirstOperator(element)) {
      return result
    }

    const number = Number(element)

    if (result === 0) {
      return number
    }

    const operator = elements[index - 1]

    if (result === null || (number === 0 && operator === '÷')) {
      return null
    }

    return operator === 'x' ? result * number : result / number
  }, 0)
}

const calculateSecondOperation = (elements) => {
  return elements.reduce((result, element, index) => {
    if (isSecondOperator(element)) {
      return result
    }

    const number = Number(element)

    if (result === 0) {
      return number
    }

    if (result === null) {
      return null
    }

    const operator = elements[index - 1]
    return operator === '+' ? result + number : result - number
  }, 0)
}

const extractFirstOperations = (elements) => {
  let enableAddElement = false

  return elements.reduce((operations, element, index) => {
    if (isFirstOperator(element) && !enableAddElement) {
      enableAddElement = true
      operations.push({
        minIndex: index - 1,
        maxIndex: -1,
        elements: [elements[index - 1], element]
      })
      return operations
    }

    if (!enableAddElement) {
      return operations
    }

    const lastIndex = operations.length - 1
    const lastItem = lastIndex >= 0 ? operations[lastIndex] : undefined

    if (isSecondOperator(element)) {
      enableAddElement = false
      operations[lastIndex].maxIndex = index - 1
      return operations
    }

    if (lastItem && index > lastItem.minIndex) {
      operations[lastIndex].elements.push(element)
    }

    return operations
  }, [])
}

const calculateFirstOperations = (operations) => {
  return operations.map((operation) => {
    const { minIndex, maxIndex, elements } = operation
    const result = calculateFirstOperation(elements)
    return { minIndex, maxIndex, result }
  })
}

export const getFirstOperations = (elements) => {
  const operations = extractFirstOperations(elements)
  return calculateFirstOperations(operations)
}

const setFirsOperationResults = (elements) => {
  const operations = getFirstOperations(elements)

  return elements
    .map((element, index) => {
      const operation = operations.find((item) => item.minIndex === index)

      if (operation) {
        return operation.result.toString()
      }

      return element
    })
    .filter((_, index) => {
      return !operations.some(({ minIndex, maxIndex }) => {
        return index > minIndex && index <= maxIndex
      })
    })
}

export const calculate = (elements) => {
  const newElements = setFirsOperationResults(elements)
  return calculateSecondOperation(newElements)
}
