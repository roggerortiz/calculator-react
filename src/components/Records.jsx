import { operatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Record from './Record'

function Records() {
  const { equals, records, lastElement } = useCalculator()

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

      {equals && (
        <Record
          index={records.length}
          record={operatorsEnum.equals}
        />
      )}
    </>
  )
}

export default Records
