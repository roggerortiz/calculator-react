import { useCalculator } from '../hooks/useCalculator'
import Element from './Element'

function Elements() {
  const { elements } = useCalculator()

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
