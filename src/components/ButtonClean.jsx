import { buttonStylesEnum, cleanLabelsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ButtonClean() {
  const { cleanLabel, editing, editOperator, resetCleanLabel, resetElements, setRecords } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (editing && editOperator) {
      return
    }

    if (cleanLabel === cleanLabelsEnum.c) {
      resetCleanLabel()
      resetElements()
    } else if (cleanLabel === cleanLabelsEnum.ac) {
      setRecords([])
    }
  }

  return (
    <Button
      label={cleanLabel}
      type={buttonStylesEnum.primary}
      onClick={handleClick}
    />
  )
}

export default ButtonClean
