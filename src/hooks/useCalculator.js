import { useCalculatorStore } from '../store/calculatorStore'

export const useCalculator = () => {
  const props = useCalculatorStore((state) => state)
  return props
}
