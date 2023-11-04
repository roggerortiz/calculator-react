import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function ButtonIcon({ icon }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      size='xs'
    />
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.any.isRequired
}

export default ButtonIcon
