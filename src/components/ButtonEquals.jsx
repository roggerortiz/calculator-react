import { faEquals } from '@fortawesome/free-solid-svg-icons'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonEquals() {
  const { result, setEquals, setElements, updateLastElement } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    updateLastElement(`${result}`)
    setElements([`${result}`])
    setEquals(true)
  }

  return (
    <button
      className='flex items-center justify-center h-12 text-lg font-semibold text-white border rounded bg-cyan-500 dark:bg-cyan-700'
      onClick={handleClick}
    >
      <ButtonIcon icon={faEquals} />
    </button>
  )
}

export default ButtonEquals
