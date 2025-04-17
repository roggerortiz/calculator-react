import { useCalculator } from '../hooks/useCalculator'
import Element from './Element'

function Elements() {
  const { elements } = useCalculator()

  return (
    <div className='flex justify-end items-center whitespace-nowrap overflow-hidden w-full text-2xl leading-none'>
      {elements.map((element, index) => (
        <Element
          key={index}
          index={index}
          element={element}
        />
      ))}
    </div>
  )
}

export default Elements
