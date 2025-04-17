import { standardButtons } from '../helpers/buttons'
import Button from './Button'

function StandardButtons() {
  return (
    <div className='grid grid-cols-4 gap-1 w-full'>
      {standardButtons
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

export default StandardButtons
