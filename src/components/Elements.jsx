import { useCalculator } from '../hooks/useCalculator'
import Element from './Element'

function Elements() {
  const { hasResult, elements, lastElement } = useCalculator()

  if (hasResult && !lastElement) {
    return (
      <div className='border-2 border-transparent p-0.5 cursor-default'>
        <span>Invalid Operation</span>
      </div>
    )
  }

  return (
    <>
      {elements.map((element, index) => (
        <Element
          key={index}
          index={index}
          element={element}
        />
      ))}
    </>
  )
}

export default Elements
