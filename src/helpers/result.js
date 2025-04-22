import Mexp from 'math-expression-evaluator'
import { LabelsEnum } from './enums'
import { isEmptyElements } from './expression'
import { checkFunctions } from './function'

export const getResult = (elements, degrees) => {
  try {
    if (!elements.length || isEmptyElements(elements)) {
      return ''
    }

    const expression = elements
      .map(checkFunctions(degrees))
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
