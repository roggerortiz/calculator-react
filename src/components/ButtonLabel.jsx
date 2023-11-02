import PropTypes from 'prop-types'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonLabel({ label, clean, icon }) {
  const { cleanLabel } = useCalculator()

  if (icon) {
    return <ButtonIcon icon={icon} />
  }

  if (clean) {
    return <span>{cleanLabel}</span>
  }

  return <span>{label}</span>
}

ButtonLabel.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  clean: PropTypes.bool
}

export default ButtonLabel
