import History from './History'
import Operation from './Operation'

function Display() {
  return (
    <div className='flex flex-col items-end content-end justify-end gap-1 p-2 border rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white'>
      <History />
      <Operation />
    </div>
  )
}

export default Display
