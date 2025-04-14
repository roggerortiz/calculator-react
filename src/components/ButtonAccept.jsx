import { buttonsEnum, buttonStylesEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonAccept() {
  const { setEditing, setEditIndex, setEquals } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    setEditing(false)
    setEditIndex(-1)
    setEquals(true)
  }

  return (
    <Button
      icon={buttonsEnum.accept}
      type={buttonStylesEnum.danger}
      onClick={handleClick}
    />
  )
}

export default ButtonAccept
