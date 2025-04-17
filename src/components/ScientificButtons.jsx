import { scientificButtons } from '../helpers/buttons'
import { CalculatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function ScientificButtons() {
  const { calculator } = useCalculator()

  if (calculator !== CalculatorsEnum.SCIENTIFIC) {
    return <></>
  }

  return (
    <div className='grid grid-cols-4 gap-1 w-full'>
      {scientificButtons
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map(({ id, type, icon, label }) => (
          <Button
            key={id}
            type={type}
            icon={icon}
            label={label}
          />
        ))}
    </div>
  )
}

export default ScientificButtons
