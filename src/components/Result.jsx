import { operatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function Result() {
  const { result } = useCalculator()

  return (
    <>
      <div className='border-2 border-transparent px-0.5'>
        <span>{operatorsEnum.equals}</span>
      </div>

      {result ? (
        <div className='border-2 border-transparent p-0.5 cursor-default'>
          <span>{result === Infinity ? 'Can not divide by zero' : result}</span>
        </div>
      ) : null}
    </>
  )
}

export default Result
