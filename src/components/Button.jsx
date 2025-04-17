import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { ButtonsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function Button({ icon, label, type }) {
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
    equals,
    edited
  } = useCalculator()

  const isClean = type === ButtonsEnum.CLEAN
  const isBackspace = type === ButtonsEnum.BACKSPACE
  const isPercent = type === ButtonsEnum.PERCENT
  const isCalculator = type === ButtonsEnum.CALCULATOR
  const isNumber = type === ButtonsEnum.NUMBER
  const isEquals = type === ButtonsEnum.EQUALS
  const isEdited = type === ButtonsEnum.EDITED
  const isDecimalPoint = type === ButtonsEnum.DECIMAL_POINT
  const isStandarOperator = type === ButtonsEnum.OPERATOR
  const isScientificOperator = type === ButtonsEnum.SCIENTIFIC_OPERATOR
  const isDegrees = type === ButtonsEnum.DEGREES

  const isPrimary = isClean || isBackspace || isPercent || isCalculator || isStandarOperator || isEquals
  const isSecondary = isNumber || isDecimalPoint || isDegrees || isScientificOperator

  const isDisabled =
    (isEditing && isEditingOperator && (isClean || isNumber || isDecimalPoint)) ||
    (isEditing && !isEditingOperator && (isClean || isStandarOperator))

  const handleFunctions = {
    calculator: setCalculator,
    degrees: setDegrees,
    decimalPoint: setDecimalPoint,
    number: setNumber,
    operator: setOperator,
    clean,
    backspace,
    percent,
    equals,
    edited
  }

  const renderLabel = () => {
    if (isClean) {
      return <>{cleanLabel}</>
    }

    if (isDegrees) {
      return <>{degreesLabel}</>
    }

    if (label) {
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

    if (!isDisabled && handleFunctions[type]) {
      handleFunctions[type](label)
    }
  }

  if ((isEditing && isEquals) || (!isEditing && isEdited)) {
    return <></>
  }

  return (
    <button
      className={clsx(
        'flex items-center justify-center border rounded h-10 text-base font-semibold',
        { 'opacity-60': isDisabled },
        {
          'text-white bg-red-500 hover:bg-red-600': isEdited,
          'dark:text-white dark:bg-red-600 dark:hover:bg-red-500': isEdited
        },
        {
          'text-white bg-cyan-500 hover:bg-cyan-600': isPrimary,
          'dark:text-white dark:bg-cyan-700 dark:hover:bg-cyan-600': isPrimary
        },
        {
          'text-zinc-800 bg-zinc-200 hover:bg-zinc-300': isSecondary,
          'dark:text-white dark:bg-zinc-700 dark:hover:bg-zinc-600': isSecondary
        }
      )}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {renderLabel()}
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string.isRequired
}

export default Button
