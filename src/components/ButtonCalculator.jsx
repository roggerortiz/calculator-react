import { buttonsEnum, buttonStylesEnum, calculatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonCalculator() {
  const { calculator, setCalculator } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (calculator === calculatorsEnum.standar) {
      setCalculator(calculatorsEnum.scientific)
    } else if (calculator === calculatorsEnum.scientific) {
      setCalculator(calculatorsEnum.standar)
    }
  }

  return (
    <Button
      icon={buttonsEnum.calculator}
      type={buttonStylesEnum.primary}
      onClick={handleClick}
    />
  )
}

export default ButtonCalculator
