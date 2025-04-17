import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemesEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function ThemeButton() {
  const { theme, toggleTheme } = useCalculator()

  const handleToggleDark = (e) => {
    e.preventDefault()
    toggleTheme()
  }

  return (
    <button
      className='flex items-center justify-center px-2 py-1 leading-none rounded hover:bg-zinc-200 dark:hover:bg-zinc-700'
      onClick={handleToggleDark}
    >
      <FontAwesomeIcon icon={theme === ThemesEnum.DARK ? faMoon : faSun} />
    </button>
  )
}

export default ThemeButton
