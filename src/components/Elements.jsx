import { useCalculator } from '../hooks/useCalculator'
import Element from './Element'

function Elements() {
  const { elements, result, hasResult, hasError } = useCalculator()

  return (
    <div className='flex justify-end items-center whitespace-nowrap overflow-hidden w-full text-2xl'>
      {(!hasResult || !hasError) && (
        <>
          {elements.map((element, index) => (
            <Element
              key={index}
              index={index}
              element={element}
            />
          ))}
        </>
      )}

      {hasResult && hasError && (
        <div className='border-2 border-transparent leading-none p-0.5'>
          <span>{result}</span>
        </div>
      )}
    </div>
  )
}

export default Elements
