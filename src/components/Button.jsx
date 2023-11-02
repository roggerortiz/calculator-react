import clsx from 'clsx'
import PropTypes from 'prop-types'
import ButtonLabel from './ButtonLabel'

function Button({ label, clean, icon, operator, action, onClick }) {
  return (
    <button
      className={clsx(
        'flex justify-center items-center border rounded font-semibold text-lg h-12',
        { 'bg-zinc-200': !operator },
        { 'text-zinc-800': !operator },
        { 'dark:bg-zinc-700': !operator },
        { 'dark:text-white': !operator },
        { 'bg-cyan-400': operator },
        { 'dark:bg-cyan-600': operator },
        { 'text-zinc-800': operator }
      )}
      onClick={onClick(label, action)}
    >
      <ButtonLabel
        label={label}
        clean={clean}
        icon={icon}
      />
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  clean: PropTypes.bool,
  operator: PropTypes.bool,
  action: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
