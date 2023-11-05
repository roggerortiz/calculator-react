import { useCalculator } from '../hooks/useCalculator'
import Record from './Record'
import Result from './Result'

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

      <Result />
    </>
  )
}

export default Records
