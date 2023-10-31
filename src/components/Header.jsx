import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { setDocumentTheme } from '../helpers/utils'
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
    <div className='-mx-4 -mt-4 p-4 border-b flex justify-between'>
      <h1 className='text-base font-semibold'>Calculator</h1>

      <button
        className='h-6 w-6 transition duration-200'
        onClick={handleToggleDark}
      >
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  )
}

export default Header
