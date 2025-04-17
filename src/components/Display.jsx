import Elements from './Elements'
import Records from './Records'

function Display() {
  return (
    <div className='flex flex-col items-end content-end justify-end gap-1 p-2 border rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white'>
      <Records />
      <Elements />
    </div>
  )
}

export default Display
