const operators = ['+', '-', 'x', '÷']

const firstOperators = ['x', '÷']

const secondOperators = ['+', '-']

export const isOperator = (value) => {
  return operators.includes(value)
}

export const isFirstOperator = (value) => {
  return firstOperators.includes(value)
}

export const isSecondOperator = (value) => {
  return secondOperators.includes(value)
}
