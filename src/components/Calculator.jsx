import Display from './Display'
import Header from './Header'
import Keyboard from './Keyboard'
import Wrapper from './Wrapper'

function Calculator() {
  return (
    <Wrapper>
      <Header />
      <Display />
      <Keyboard />
    </Wrapper>
  )
}

export default Calculator
