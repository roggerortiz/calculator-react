import PropTypes from 'prop-types'
import { buttonTypesEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import ButtonAccept from './ButtonAccept'
import ButtonBackspace from './ButtonBackspace'
import ButtonClean from './ButtonClean'
import ButtonDecimalPoint from './ButtonDecimalPoint'
import ButtonEquals from './ButtonEquals'
import ButtonNumber from './ButtonNumber'
import ButtonOperator from './ButtonOperator'
import ButtonPercent from './ButtonPercent'
import ButtonPlusMinus from './ButtonPlusMinus'

function Button({ label, type }) {
  const { editing } = useCalculator()

  if (type === buttonTypesEnum.clean) {
    return <ButtonClean />
  }

  if (type === buttonTypesEnum.backspace) {
    return <ButtonBackspace />
  }

  if (type === buttonTypesEnum.percent) {
    return <ButtonPercent />
  }

  if (type === buttonTypesEnum.plusMinus) {
    return <ButtonPlusMinus />
  }

  if (type === buttonTypesEnum.operator) {
    return <ButtonOperator label={label} />
  }

  if (type === buttonTypesEnum.number) {
    return <ButtonNumber label={label} />
  }

  if (type === buttonTypesEnum.decimalPoint) {
    return <ButtonDecimalPoint />
  }

  if (type === buttonTypesEnum.equals) {
    return !editing ? <ButtonEquals /> : <ButtonAccept />
  }

  return <></>
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired
}

export default Button
