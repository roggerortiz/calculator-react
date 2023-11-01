import { useCalculatorStore } from '../store/calculatorStore'

export const useCalculator = () => {
  const props = useCalculatorStore((state) => state)

  if (!props.elements.length) {
    return props
  }

  const lastIndex = props.elements.length - 1
  const lastElement = props.elements[lastIndex]

  return { ...props, lastElement }
}
