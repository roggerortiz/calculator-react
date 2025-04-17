import { useEffect } from 'react'
import { setDocumentTheme } from '../helpers/theme'
import { useCalculator } from '../hooks/useCalculator'
import Display from './Display'
import Header from './Header'
import Keyboard from './Keyboard'

function Calculator() {
  const { theme, reCalculate, calculate } = useCalculator()

  useEffect(() => {
    setDocumentTheme(theme)
  }, [theme])

  useEffect(() => {
    calculate()
  }, [reCalculate])

  return (
    <main className='flex items-center justify-center w-full h-full p-2 overflow-auto bg-zinc-300 dark:bg-zinc-900 light-scrollbars'>
      <div className='flex flex-col gap-2 w-full max-h-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12  p-2 overflow-hidden text-sm border rounded-lg bg-zinc-100  dark:bg-zinc-800 text-zinc-800 dark:text-white'>
        <Header />
        <Display />
        <Keyboard />
      </div>
    </main>
  )
}

export default Calculator
