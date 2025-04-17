import { useCalculatorStore } from '../store/calculatorStore'

export const useCalculator = () => {
  return useCalculatorStore((state) => state)
}
