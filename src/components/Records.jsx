import { useCalculator } from '../hooks/useCalculator'
import Record from './Record'

function Records() {
  const { records, lastElement } = useCalculator()

  if (!records.length || (records.length === 1 && lastElement === '0')) {
    return <></>
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
