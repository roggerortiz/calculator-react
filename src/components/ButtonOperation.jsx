import PropTypes from 'prop-types'
import { buttonStylesEnum } from '../helpers/enums'
import Button from './Button'

function ButtonOperation({ label }) {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <Button
      label={label}
      type={buttonStylesEnum.primary}
      onClick={handleClick}
    />
  )
}

ButtonOperation.propTypes = {
  label: PropTypes.string.isRequired
}

export default ButtonOperation
