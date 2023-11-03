import clsx from 'clsx'
import { isOperator } from '../helpers/operators'
import { useCalculator } from '../hooks/useCalculator'

function Elements() {
  const {
    hasResult,
    elements,
    lastElement,
    editIndex,
    editValue,
    setEditing,
    setEditIndex,
    setEditValue,
    setEditReplace,
    setEditOperator
  } = useCalculator()

  const handleClick = (element, index) => (e) => {
    e.preventDefault()

    if (hasResult) {
      return
    }

    setEditing(true)
    setEditIndex(index)
    setEditValue(element)
    setEditReplace(!isOperator(element))
    setEditOperator(isOperator(element))
  }

  if (hasResult && !lastElement) {
    return (
      <div className='border-2 border-transparent p-0.5'>
        <span>Invalid Operation</span>
      </div>
    )
  }

  return (
    <>
      {elements.map((element, index) => (
        <div
          key={index}
          className={clsx(
            'border-2 rounded p-0.5',
            { 'border-cyan-400': index === editIndex },
            { 'dark:border-cyan-600': index === editIndex },
            { 'border-transparent': index !== editIndex },
            { 'cursor-default': index === editIndex || hasResult },
            { 'cursor-pointer': index !== editIndex && !hasResult }
          )}
          onClick={handleClick(element, index)}
        >
          <span>{editIndex === index ? editValue : element}</span>
        </div>
      ))}
    </>
  )
}

export default Elements
