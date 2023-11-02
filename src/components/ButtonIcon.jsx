import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function ButtonIcon({ icon }) {
  if (!icon) {
    return <></>
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      size='xs'
    />
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.any
}

export default ButtonIcon
