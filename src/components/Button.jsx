import {
  faArrowLeft,
  faCheck,
  faDivide,
  faEquals,
  faMinus,
  faPercent,
  faPlus,
  faRepeat,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { buttonsEnum, buttonStylesEnum, operatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function Button({ label, icon, type, onClick }) {
  const { editing, editOperator } = useCalculator()

  const icons = {
    [operatorsEnum.plus]: faPlus,
    [operatorsEnum.minus]: faMinus,
    [[operatorsEnum.times]]: faXmark,
    [operatorsEnum.divide]: faDivide,
    [operatorsEnum.equals]: faEquals,
    [buttonsEnum.accept]: faCheck,
    [buttonsEnum.percent]: faPercent,
    [buttonsEnum.backspace]: faArrowLeft,
    [buttonsEnum.calculator]: faRepeat
  }

  return (
    <button
      className={clsx(
        'flex items-center justify-center border rounded h-8 text-base font-semibold',
        { 'text-white': type === buttonStylesEnum.primary || type === buttonStylesEnum.danger },
        { 'bg-cyan-500': type === buttonStylesEnum.primary },
        { 'dark:bg-cyan-700': type === buttonStylesEnum.primary },
        { 'bg-red-500': type === buttonStylesEnum.danger },
        { 'dark:bg-red-600': type === buttonStylesEnum.danger },
        { 'text-zinc-800': type === buttonStylesEnum.secondary },
        { 'bg-zinc-200': type === buttonStylesEnum.secondary },
        { 'dark:text-white': type === buttonStylesEnum.secondary },
        { 'dark:bg-zinc-700': type === buttonStylesEnum.secondary },
        { 'opacity-60': editing && editOperator }
      )}
      onClick={onClick}
    >
      {label && <span>{label}</span>}

      {icon && icons[icon] && (
        <FontAwesomeIcon
          size='xs'
          icon={icons[icon]}
        />
      )}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
