import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useCalculator } from '../hooks/useCalculator'
import ButtonIcon from './ButtonIcon'

function ButtonAccept() {
  const { setEditing, setEditIndex, setEditValue } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()
    setEditing(false)
    setEditIndex(-1)
    setEditValue('')
  }

  return (
    <button
      className='flex justify-center items-center border rounded font-semibold text-lg h-12 text-white bg-red-500 dark:bg-red-600'
      onClick={handleClick}
    >
      <ButtonIcon icon={faCheck} />
    </button>
  )
}

export default ButtonAccept
