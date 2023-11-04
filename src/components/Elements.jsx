import { useCalculator } from '../hooks/useCalculator'
import Element from './Element'
import Result from './Result'

function Elements() {
  const { equals, elements } = useCalculator()

  if (equals) {
    return <Result />
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
