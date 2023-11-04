import { operatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function Result() {
  const { result } = useCalculator()

  return (
    <>
      <div className='border-2 border-transparent px-0.5'>
        <span>{operatorsEnum.equals}</span>
      </div>

      <div className='border-2 border-transparent p-0.5 cursor-default'>
        <span>{result ? result : 'Invalid Operation'}</span>
      </div>
    </>
  )
}

export default Result
