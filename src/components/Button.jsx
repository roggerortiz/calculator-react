import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { ButtonActionsEnum, ButtonStylesEnum, LabelsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function Button({ icon, label, value, style, action }) {
  const {
    cleanLabel,
    degreesLabel,
    isEditing,
    isEditingOperator,
    setCalculator,
    setDegrees,
    clean,
    backspace,
    percent,
    setDecimalPoint,
    setNumber,
    setOperator,
    setUnaryOperator,
    setFactorial,
    setConstant,
    equals,
    edited
  } = useCalculator()

  const isDegreesButton = action === ButtonActionsEnum.DEGREES
  const isCleanButton = action === ButtonActionsEnum.CLEAN
  const isDecimalPointButton = action === ButtonActionsEnum.DECIMAL_POINT
  const isNumberButton = action === ButtonActionsEnum.NUMBER
  const isOperatorButton = action === ButtonActionsEnum.OPERATOR
  const isEqualsButton = action === ButtonActionsEnum.EQUALS
  const isEditedButton = action === ButtonActionsEnum.EDITED
  const isExponentiationButton = value === LabelsEnum.CARET

  const isPrimaryStyle = style === ButtonStylesEnum.PRIMARY
  const isSecondaryStyle = style === ButtonStylesEnum.SECONDARY
  const isDangerStyle = style === ButtonStylesEnum.DANGER

  const isDisabled =
    (isEditing && isEditingOperator && (isCleanButton || isNumberButton || isDecimalPointButton)) ||
    (isEditing && !isEditingOperator && (isCleanButton || isOperatorButton))

  const handleFunctions = {
    setDegrees,
    setCalculator,
    setDecimalPoint,
    setNumber,
    setOperator,
    setUnaryOperator,
    setFactorial,
    setConstant,
    clean,
    backspace,
    percent,
    equals,
    edited
  }

  const renderLabel = () => {
    if (isCleanButton) {
      return <>{cleanLabel}</>
    }

    if (isDegreesButton) {
      return <>{degreesLabel}</>
    }

    if (isExponentiationButton) {
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

  if ((isEditing && isEqualsButton) || (!isEditing && isEditedButton)) {
    return <></>
  }

  return (
    <button
      className={clsx(
        'flex items-center justify-center border rounded h-10 text-base font-semibold',
        { 'opacity-60': isDisabled },
        {
          'text-white bg-red-500 hover:bg-red-600': isDangerStyle,
          'dark:text-white dark:bg-red-600 dark:hover:bg-red-500': isDangerStyle
        },
        {
          'text-white bg-cyan-500 hover:bg-cyan-600': isPrimaryStyle,
          'dark:text-white dark:bg-cyan-700 dark:hover:bg-cyan-600': isPrimaryStyle
        },
        {
          'text-zinc-800 bg-zinc-200 hover:bg-zinc-300': isSecondaryStyle,
          'dark:text-white dark:bg-zinc-700 dark:hover:bg-zinc-600': isSecondaryStyle
        }
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
