import { useCalculator } from '../hooks/useCalculator'

function Display() {
  const { operation, hasResult, elements, lastElement } = useCalculator()

  return (
    <div className='flex flex-col gap-1 justify-end items-end content-end overflow-hidden whitespace-nowrap border bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white min-h-[4rem] h-16 p-2'>
      <span className='text-sm leading-none'>{operation}</span>
      <span className='text-2xl leading-none'>
        {hasResult && !lastElement ? 'Invalid Operation' : elements.join(' ')}
      </span>
    </div>
  )
}

export default Display
