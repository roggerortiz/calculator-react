import { useCalculator } from '../hooks/useCalculator'

function History() {
  const { history } = useCalculator()

  return (
    <div className='flex justify-end items-center whitespace-nowrap overflow-auto light-scrollbars w-full text-sm leading-none px-1.5 pt-2 pb-0.5'>
      <div className='border-2 border-transparent px-0.5'>
        {history ? history : <>&nbsp;</>}
      </div>
    </div>
  )
}

export default History
