import { faCalculator, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setDocumentTheme } from '../helpers/theme'
import { useCalculator } from '../hooks/useCalculator'

function Header() {
  const { theme, setTheme } = useCalculator()

  const handleToggleDark = (e) => {
    e.preventDefault()

    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setDocumentTheme(newTheme)
    setTheme(newTheme)
  }

  return (
    <div className='-mx-2 -mt-2 p-2 border-b flex justify-between'>
      <h1 className='text-sm font-semibold flex gap-2 items-center'>
        <FontAwesomeIcon icon={faCalculator} />
        Calculator
      </h1>

      <button
        className='h-4 w-4 px-2 transition duration-200 flex justify-center items-center'
        onClick={handleToggleDark}
      >
        <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
      </button>
    </div>
  )
}

export default Header
