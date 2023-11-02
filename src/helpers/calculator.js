import Decimal from './decimal'
import { operatorsEnum } from './enums'
import { isFirstOperator, isSecondOperator } from './operators'

const calculateFirstOperation = (elements) => {
  const result = elements.reduce((result, element, index) => {
    if (isFirstOperator(element) || !result) {
      return result
    }

    const operator = elements[index - 1]

    if (operator === operatorsEnum.times) {
      return Decimal.times(result, element)
    } else if (operator === operatorsEnum.divideBy) {
      return Decimal.divideBy(result, element)
    }

    return result
  })

  return result.toString()
}

const calculateSecondOperation = (elements) => {
  const result = elements.reduce((result, element, index) => {
    if (isSecondOperator(element) || !result) {
      return result
    }

    const operator = elements[index - 1]

    if (operator === operatorsEnum.plus) {
      return Decimal.plus(result, element)
    } else if (operator === operatorsEnum.minus) {
      return Decimal.minus(result, element)
    }

    return result
  })

  return result.toString()
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
        return operation.result?.toString()
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
  const hasFirsOperators = elements.some((element) => {
    return isFirstOperator(element)
  })

  const hasSecondOperators = elements.some((element) => {
    return isSecondOperator(element)
  })

  if (hasFirsOperators && !hasSecondOperators) {
    return calculateFirstOperation(elements)
  }

  if (!hasFirsOperators && hasSecondOperators) {
    return calculateSecondOperation(elements)
  }

  const newElements = setFirsOperationResults(elements)
  return calculateSecondOperation(newElements)
}
