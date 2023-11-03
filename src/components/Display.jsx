import History from './History'
import Operation from './Operation'

function Display() {
  return (
    <div className='flex flex-col justify-end items-end content-end border rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white'>
      <History />
      <Operation />
    </div>
  )
}

export default Display
