import { faEquals } from '@fortawesome/free-solid-svg-icons'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonEquals() {
  const { setEquals } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    setEquals(true)
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
