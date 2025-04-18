import { useCalculator } from '../hooks/useCalculator'
import Button from './Button'

function StandardButtons() {
  const { buttons } = useCalculator()

  return (
    <div className='grid grid-cols-4 gap-1 w-full'>
      {buttons.map(({ id, icon, label, value, style, action }) => (
        <Button
          key={id}
          icon={icon}
          label={label}
          value={value}
          style={style}
          action={action}
        />
      ))}
    </div>
  )
}

export default StandardButtons
