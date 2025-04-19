import { LabelsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Record from './Record'

function Records() {
  const { hasResult, records } = useCalculator()

  return (
    <div className='flex gap-0.5 justify-end items-center whitespace-nowrap overflow-hidden w-full text-sm leading-none min-h-[22px]'>
      {records.map((record, index) => (
        <Record
          key={index}
          index={index}
          record={record}
        />
      ))}

      {hasResult && <span className='leading-none p-0.5'>{LabelsEnum.EQUALS}</span>}
    </div>
  )
}

export default Records
