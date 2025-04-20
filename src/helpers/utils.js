import Mexp from 'math-expression-evaluator'
import { LabelsEnum } from './enums'
import { isEmptyElements } from './expression'
import { verifyUnaryOperators } from './unaryOperator'

export const isNumber = (value) => {
  value = value?.toString()?.trim()

  if (value === '' || value === undefined || value === null) {
    return false
  }

  return !isNaN(value)
}

export const getResult = (elements) => {
  try {
    if (!elements.length || isEmptyElements(elements)) {
      return ''
    }

    const expression = elements
      .map(verifyUnaryOperators)
      .join('')
      .split(LabelsEnum.X_MARK)
      .join(LabelsEnum.ASTERISK)
      .split(LabelsEnum.DIVIDE)
      .join(LabelsEnum.SLASH)
      .split(LabelsEnum.PI_SYMBOL)
      .join(LabelsEnum.PI_NAME)

    const mexp = new Mexp()
    const result = mexp.eval(expression).toString()

    return result
  } catch {
    return LabelsEnum.ERROR
  }
}
