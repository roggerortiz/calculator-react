import PropTypes from 'prop-types'
import { buttonsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import ButtonAccept from './ButtonAccept'
import ButtonBackspace from './ButtonBackspace'
import ButtonCalculator from './ButtonCalculator'
import ButtonClean from './ButtonClean'
import ButtonDecimalPoint from './ButtonDecimalPoint'
import ButtonEquals from './ButtonEquals'
import ButtonNumber from './ButtonNumber'
import ButtonOperation from './ButtonOperation'
import ButtonOperator from './ButtonOperator'
import ButtonPercent from './ButtonPercent'

function ButtonType({ label, type }) {
  const { editing } = useCalculator()

  if (type === buttonsEnum.clean) {
    return <ButtonClean />
  }

  if (type === buttonsEnum.backspace) {
    return <ButtonBackspace />
  }

  if (type === buttonsEnum.percent) {
    return <ButtonPercent />
  }

  if (type === buttonsEnum.calculator) {
    return <ButtonCalculator />
  }

  if (type === buttonsEnum.operator) {
    return <ButtonOperator label={label} />
  }

  if (type === buttonsEnum.operation) {
    return <ButtonOperation label={label} />
  }

  if (type === buttonsEnum.number) {
    return <ButtonNumber label={label} />
  }

  if (type === buttonsEnum.decimalPoint) {
    return <ButtonDecimalPoint />
  }

  if (type === buttonsEnum.equals) {
    return !editing ? <ButtonEquals /> : <ButtonAccept />
  }

  return <></>
}

ButtonType.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired
}

export default ButtonType
