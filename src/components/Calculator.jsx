import Mexp from 'math-expression-evaluator'
import { useEffect } from 'react'
import { operatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Display from './Display'
import Header from './Header'
import Keyboard from './Keyboard'
import Wrapper from './Wrapper'

function Calculator() {
  const { equals, elements, recalculate, setResult, setRecords } = useCalculator()

  const calculateResult = () => {
    if (equals || !elements.length || (elements.length === 1 && elements[0] === '0')) {
      return
    }

    setRecords([...elements])

    try {
      const expresion = elements
        .join('')
        .split(operatorsEnum.times)
        .join(operatorsEnum.asterisk)
        .split(operatorsEnum.divide)
        .join(operatorsEnum.slash)

      const mexp = new Mexp()
      const result = mexp.eval(expresion)

      setResult(result)
    } catch {}
  }

  useEffect(() => {
    calculateResult()
  }, [recalculate])

  return (
    <Wrapper>
      <Header />
      <Display />
      <Keyboard />
    </Wrapper>
  )
}

export default Calculator
