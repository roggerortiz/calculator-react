import Mexp from 'math-expression-evaluator'
import { LabelsEnum } from './enums'
import { isEmptyElements } from './expression'
import { fixUnaryOperators } from './utils'

export const getResult = (elements, degrees) => {
  try {
    if (!elements.length || isEmptyElements(elements)) {
      return ''
    }

    const expression = elements
      .map(fixUnaryOperators(degrees))
      .join('')
      .split(LabelsEnum.X_MARK)
      .join(LabelsEnum.ASTERISK)
      .split(LabelsEnum.DIVIDE)
      .join(LabelsEnum.SLASH)
      .split(LabelsEnum.LOGARITHM)
      .join(LabelsEnum.LOGARITHM_NAME)
      .split(LabelsEnum.PI_SYMBOL)
      .join(LabelsEnum.PI_NAME)
    console.log({ expression })

    const mexp = new Mexp()
    const result = mexp.eval(expression).toString()

    return result
  } catch {
    return LabelsEnum.ERROR
  }
}
