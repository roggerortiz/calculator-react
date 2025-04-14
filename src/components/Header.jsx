import { faCalculator, faFlask, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { calculatorsEnum, themesEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function Header() {
  const { theme, setTheme, calculator } = useCalculator()

  const handleToggleDark = (e) => {
    e.preventDefault()

    if (theme === themesEnum.dark) {
      setTheme(themesEnum.light)
    } else if (theme === themesEnum.light) {
      setTheme(themesEnum.dark)
    }
  }

  return (
    <div className='flex justify-between items-center p-2 -mx-2 -mt-2 border-b text-base font-semibold'>
      <h1 className='flex items-center gap-1 px-2 py-1 leading-none'>
        <span className='w-4 h-4'>
          <FontAwesomeIcon icon={calculator === calculatorsEnum.standar ? faCalculator : faFlask} />
        </span>
        {calculator === calculatorsEnum.standar ? 'Standar' : 'Scientific'} Calculator
      </h1>

      <button
        className='flex items-center justify-center px-2 py-1 leading-none transition duration-200 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700'
        onClick={handleToggleDark}
      >
        <FontAwesomeIcon icon={theme === themesEnum.dark ? faMoon : faSun} />
      </button>
    </div>
  )
}

export default Header
