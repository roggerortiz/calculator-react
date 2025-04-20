export const ThemesEnum = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark'
})

export const CalculatorsEnum = Object.freeze({
  STANDARD: 'standard',
  SCIENTIFIC: 'scientific'
})

export const LabelsEnum = Object.freeze({
  ERROR: 'Error',
  INFINITY: 'Infinity',
  DEGREES: 'deg',
  RADIANS: 'rad',
  CLEAN_C: 'C',
  CLEAN_AC: 'AC',
  ONE: '1',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  ZERO: '0',
  DECIMAL_POINT: '.',
  EQUALS: '=',
  DIVIDE: '÷',
  X_MARK: 'x',
  SLASH: '/',
  ASTERISK: '*',
  MINUS: '-',
  PLUS: '+',
  CARET: '^',
  SINE: 'sin',
  COSINE: 'cos',
  TANGENT: 'tan',
  LOGARITHM: 'lg',
  NATURAL_LOGARITHM: 'ln',
  LEFT_PARENTHESIS: '(',
  RIGHT_PARENTHESIS: ')',
  SQUARE_ROOT_NAME: 'root',
  SQUARE_ROOT: '√x',
  RADICAL: '√',
  FACTORIAL: 'x!',
  EXCLAMATION_POINT: '!',
  PI_SYMBOL: 'π',
  PI_NAME: 'pi'
})

export const UnaryOperatorKeys = Object.freeze({
  SINE: 's',
  COSINE: 'c',
  TANGENT: 't',
  LOGARITHM: 'g',
  NATURAL_LOGARITHM: 'n',
  SQUARE_ROOT: '√'
})

export const ButtonStylesEnum = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger'
})

export const ButtonActionsEnum = Object.freeze({
  DEGREES: 'setDegrees',
  CALCULATOR: 'setCalculator',
  DECIMAL_POINT: 'setDecimalPoint',
  LEFT_PARENTHESIS: 'setLeftParenthesis',
  RIGHT_PARENTHESIS: 'setRightParenthesis',
  NUMBER: 'setNumber',
  OPERATOR: 'setOperator',
  UNARY_OPERATOR: 'setUnaryOperator',
  FACTORIAL: 'setFactorial',
  CONSTANT: 'setConstant',
  CLEAN: 'clean',
  BACKSPACE: 'backspace',
  PERCENT: 'percent',
  EQUALS: 'equals',
  EDITED: 'edited'
})
