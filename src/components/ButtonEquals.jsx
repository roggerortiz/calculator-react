import { faEquals } from '@fortawesome/free-solid-svg-icons'
import { calculate } from '../helpers/calculator'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonEquals() {
  const { elements, hasResult, setHistory, setElements, setHasResult } =
    useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (
      hasResult ||
      !elements.length ||
      (elements.length === 1 && elements[0] === '0')
    ) {
      return
    }

    const result = calculate(elements)
    const history = [elements.join(' '), result ?? ''].join(' = ').trim()

    setHistory(history)
    setElements([result])
    setHasResult(true)
  }

  return (
    <button
      className='flex justify-center items-center border rounded font-semibold text-lg h-12 text-white bg-cyan-500 dark:bg-cyan-700'
      onClick={handleClick}
    >
      <ButtonIcon icon={faEquals} />
    </button>
  )
}

export default ButtonEquals
