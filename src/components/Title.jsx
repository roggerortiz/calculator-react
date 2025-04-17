import { faCalculator, faFlask } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CalculatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function Title() {
  const { calculator } = useCalculator()

  return (
    <h1 className='flex items-center gap-1 px-2 py-1 leading-none'>
      <span className='w-4 h-4'>
        <FontAwesomeIcon icon={calculator === CalculatorsEnum.STANDARD ? faCalculator : faFlask} />
      </span>
      <span className='capitalize'>{calculator} Calculator</span>
    </h1>
  )
}

export default Title
