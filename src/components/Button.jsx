import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { buttonColors, isDisabledButton } from '../helpers/buttons'
import { ButtonActionsEnum, LabelsEnum } from '../helpers/enums'
import { isEdition } from '../helpers/expression'
import { useCalculator } from '../hooks/useCalculator'

function Button({ icon, label, value, style, action }) {
  const {
    degrees,
    allClear,
    editionIndex,
    setCalculator,
    setDegrees,
    setElement,
    clear,
    backspace,
    percent,
    equals,
    edited
  } = useCalculator()

  const isEquals = action === ButtonActionsEnum.EQUALS
  const isEdited = action === ButtonActionsEnum.EDITED

  const isEditing = isEdition(editionIndex)
  const isDisabled = isDisabledButton(label, action, editionIndex)

  const handleFunctions = {
    setCalculator,
    setDegrees,
    setElement,
    clear,
    backspace,
    percent,
    equals,
    edited
  }

  const renderLabel = () => {
    if (action === ButtonActionsEnum.CLEAR) {
      return <>{allClear ? LabelsEnum.ALL_CLEAR : LabelsEnum.CLEAR}</>
    }

    if (action === ButtonActionsEnum.DEGREES) {
      return <>{degrees ? LabelsEnum.DEGREES : LabelsEnum.RADIANS}</>
    }

    if (value === LabelsEnum.CARET) {
      return (
        <>
          x<sup>y</sup>
        </>
      )
    }

    if (label && !icon) {
      return <>{label}</>
    }

    if (icon) {
      return (
        <FontAwesomeIcon
          size='xs'
          icon={icon}
        />
      )
    }

    return <></>
  }

  const handleClick = (event) => {
    event.preventDefault()

    if (!isDisabled && handleFunctions[action]) {
      handleFunctions[action](value ? value : label)
    }
  }

  if ((isEquals && isEditing) || (isEdited && !isEditing)) {
    return <></>
  }

  return (
    <button
      className={clsx(
        `flex items-center justify-center border rounded h-10 text-base font-semibold ${buttonColors[style]}`,
        { 'opacity-60': isDisabled }
      )}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <span>{renderLabel()}</span>
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
}

export default Button
