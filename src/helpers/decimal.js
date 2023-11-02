export default class Decimal {
  static hasInvalid(...numbers) {
    return numbers.some((number) => isNaN(Number(number)))
  }

  static hasDecimal(...numbers) {
    return numbers.some((number) => {
      return !Decimal.hasInvalid(number) && number.toString().includes('.')
    })
  }

  static getFactor(...numbers) {
    if (Decimal.hasInvalid(...numbers) || !Decimal.hasDecimal(...numbers)) {
      return 1
    }

    const zeros = numbers
      .filter((number) => number.toString().includes('.'))
      .reduce((zeros, number) => {
        const currentZeros = number.toString().split('.')[1].length
        return currentZeros > zeros ? currentZeros : zeros
      }, 1)

    return Math.pow(10, zeros)
  }

  static getCustomNumbers(...numbers) {
    if (Decimal.hasInvalid(...numbers)) {
      return undefined
    }

    const factor = Decimal.getFactor(...numbers)
    const customNumbers = numbers.map((number) => Number(number) * factor)

    return { factor, customNumbers }
  }

  static getFinalResult(result, factor) {
    return factor > 1 ? result / factor : result
  }

  static getMultiplyFinalResult(result, factor, numbersCount) {
    return factor > 1 ? result / Math.pow(factor, numbersCount) : result
  }

  static plus(...numbers) {
    const { factor, customNumbers } = Decimal.getCustomNumbers(...numbers)
    const result = customNumbers.reduce((result, number) => result + number)
    return Decimal.getFinalResult(result, factor)
  }

  static minus(...numbers) {
    const { factor, customNumbers } = Decimal.getCustomNumbers(...numbers)
    const result = customNumbers.reduce((result, number) => result - number)
    return Decimal.getFinalResult(result, factor)
  }

  static times(...numbers) {
    const { factor, customNumbers } = Decimal.getCustomNumbers(...numbers)
    const result = customNumbers.reduce((result, number) => result * number)
    return Decimal.getMultiplyFinalResult(result, factor, numbers.length)
  }

  static divideBy(...numbers) {
    const { factor, customNumbers } = Decimal.getCustomNumbers(...numbers)
    const result = customNumbers.reduce((result, number, index) => {
      if (!result || !number) {
        return undefined
      }

      if (index === 0) {
        return number
      }

      return result && number ? result / number : undefined
    })

    return Decimal.getFinalResult(result, factor)
  }
}
