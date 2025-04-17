import { OperatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Record from './Record'

function Records() {
  const { hasResult, records } = useCalculator()

  return (
    <div className='flex justify-end items-center whitespace-nowrap overflow-hidden w-full text-sm leading-none min-h-[22px]'>
      {records.map((record, index) => (
        <Record
          key={index}
          index={index}
          record={record}
        />
      ))}

      {hasResult && (
        <Record
          index={records.length}
          record={OperatorsEnum.EQUALS}
        />
      )}
    </div>
  )
}

export default Records
