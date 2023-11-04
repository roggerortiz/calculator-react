import { useEffect } from 'react'
import { calculate } from '../helpers/calculator'
import { useCalculator } from '../hooks/useCalculator'
import Display from './Display'
import Header from './Header'
import Keyboard from './Keyboard'
import Wrapper from './Wrapper'

function Calculator() {
  const { equals, elements, recalculate, setResult, setRecords } =
    useCalculator()

  const calculateResult = () => {
    if (
      equals ||
      !elements.length ||
      (elements.length === 1 && elements[0] === '0')
    ) {
      return
    }

    const result = calculate(elements)
    setRecords([...elements])
    setResult(result)
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
