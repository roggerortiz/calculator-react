import { buttonStylesEnum, numbersEnum } from '../helpers/enums'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonDecimalPoint() {
  const { equals, lastElement, addElement, updateLastElement } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if ((equals && !lastElement) || lastElement.includes(numbersEnum.decimalPoint)) {
      return
    }

    if (isOperator(lastElement)) {
      addElement(`${numbersEnum.zero}${numbersEnum.decimalPoint}`)
      return
    }

    updateLastElement(`${lastElement}${numbersEnum.decimalPoint}`)
  }

  return (
    <Button
      label={numbersEnum.decimalPoint}
      type={buttonStylesEnum.secondary}
      onClick={handleClick}
    />
  )
}

export default ButtonDecimalPoint
