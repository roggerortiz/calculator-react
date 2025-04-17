import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { ButtonTypesEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function Button({ icon, label, type }) {
  const {
    cleanLabel,
    degreesLabel,
    isEditing,
    editOperator,
    toggleCalculator,
    toggleDegrees,
    clean,
    backspace,
    percent,
    number,
    decimalPoint,
    operator,
    equals,
    edited
  } = useCalculator()

  const isClean = type === ButtonTypesEnum.CLEAN
  const isBackspace = type === ButtonTypesEnum.BACKSPACE
  const isPercent = type === ButtonTypesEnum.PERCENT
  const isCalculator = type === ButtonTypesEnum.CALCULATOR
  const isNumber = type === ButtonTypesEnum.NUMBER
  const isEquals = type === ButtonTypesEnum.EQUALS
  const isEdited = type === ButtonTypesEnum.EDITED
  const isDecimalPoint = type === ButtonTypesEnum.DECIMAL_POINT
  const isStandarOperator = type === ButtonTypesEnum.OPERATOR
  const isScientificOperator = type === ButtonTypesEnum.SCIENTIFIC_OPERATOR
  const isDegrees = type === ButtonTypesEnum.DEGREES

  const isPrimary = isClean || isBackspace || isPercent || isCalculator || isStandarOperator || isEquals
  const isSecondary = isNumber || isDecimalPoint || isDegrees || isScientificOperator

  const isDisabled =
    (isEditing && editOperator && (isClean || isNumber || isDecimalPoint)) ||
    (isEditing && !editOperator && (isClean || isStandarOperator))

  const handleFunctions = {
    calculator: toggleCalculator,
    degrees: toggleDegrees,
    clean,
    backspace,
    percent,
    number,
    decimalPoint,
    operator,
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
