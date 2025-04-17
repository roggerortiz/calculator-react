import Mexp from 'math-expression-evaluator'
import { OperatorsEnum } from './enums'

export const getResult = (elements) => {
  try {
    const expression = elements
      .join('')
      .split(OperatorsEnum.TIMES)
      .join(OperatorsEnum.ASTERISK)
      .split(OperatorsEnum.DIVIDE)
      .join(OperatorsEnum.SLASH)

    const mexp = new Mexp()
    const result = mexp.eval(expression).toString()

    return result
  } catch {
    return ''
  }
}
