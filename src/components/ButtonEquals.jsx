import { buttonStylesEnum, operatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonEquals() {
  const { result, setEquals, setElements, updateLastElement } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    updateLastElement(`${result}`)
    setElements([`${result}`])
    setEquals(true)
  }

  return (
    <Button
      icon={operatorsEnum.equals}
      type={buttonStylesEnum.primary}
      onClick={handleClick}
    />
  )
}

export default ButtonEquals
