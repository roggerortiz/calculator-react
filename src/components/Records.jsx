import { useCalculator } from '../hooks/useCalculator'
import Record from './Record'

function Records() {
  const { records } = useCalculator()

  if (!records.length) {
    return (
      <div className='border-2 border-transparent px-0.5'>
        <>&nbsp;</>
      </div>
    )
  }

  return (
    <>
      {records.map((record, index) => (
        <Record
          key={index}
          index={index}
          record={record}
        />
      ))}
    </>
  )
}

export default Records
