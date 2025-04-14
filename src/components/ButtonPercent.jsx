import { buttonsEnum, buttonStylesEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonPercent() {
  const { equals, editing, editOperator, lastElement, updateLastElement } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if ((editing && editOperator) || (equals && !lastElement)) {
      return
    }

    const lastNumber = Number(lastElement)
    const newLastElement = lastNumber ? Number(lastElement) / 100 : 0
    updateLastElement(newLastElement)
  }

  return (
    <Button
      icon={buttonsEnum.percent}
      type={buttonStylesEnum.primary}
      onClick={handleClick}
    />
  )
}

export default ButtonPercent
