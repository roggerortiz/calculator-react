import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { isDocumentDarkTheme, setDocumentTheme } from './helpers/theme'
import { useCalculator } from './hooks/useCalculator'
import { themesEnum } from './helpers/enums'

function Layout({ children }) {
  const { setTheme } = useCalculator()

  useEffect(() => {
    const theme = isDocumentDarkTheme() ? themesEnum.dark : themesEnum.light
    setDocumentTheme(theme)
    setTheme(theme)
  }, [])

  return (
    <main className='flex items-center justify-center w-full h-full p-2 overflow-auto bg-zinc-300 dark:bg-zinc-900 light-scrollbars'>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Layout
