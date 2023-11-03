import BigNumber from 'bignumber.js'
import { operatorsEnum } from './enums'
import { isFirstOperator, isSecondOperator } from './operators'

const calculateFirstOperation = (elements) => {
  try {
    const result = elements.reduce((result, element, index) => {
      if (isFirstOperator(element) || !result) {
        return result
      }

      const operator = elements[index - 1]

      if (operator === operatorsEnum.times) {
        return BigNumber(result).times(element).toNumber()
      } else if (operator === operatorsEnum.divide) {
        const quotient = BigNumber(result).dividedBy(element).toNumber()
        return quotient !== Infinity ? quotient : undefined
      }

      return result
    })

    return result ? result.toString() : undefined
  } catch {
    return undefined
  }
}

const calculateSecondOperation = (elements) => {
  try {
    const result = elements.reduce((result, element, index) => {
      if (isSecondOperator(element) || !result) {
        return result
      }

      const operator = elements[index - 1]

      if (operator === operatorsEnum.plus) {
        return BigNumber(result).plus(element).toNumber()
      } else if (operator === operatorsEnum.minus) {
        return BigNumber(result).minus(element).toNumber()
      }

      return result
    })

    return result ? result.toString() : undefined
  } catch {
    return undefined
  }
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
