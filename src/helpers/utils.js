import Mexp from 'math-expression-evaluator'
import { LabelsEnum } from './enums'

export const getResult = (elements) => {
  try {
    const expression = elements
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
