import { buttons } from '../helpers/buttons'
import Button from './Button'

function Keyboard() {
  return (
    <div className='grid grid-cols-4 gap-1 overflow-auto light-scrollbars'>
      {buttons
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map(({ id, label, type }) => (
          <Button
            key={id}
            type={type}
            label={label}
          />
        ))}
    </div>
  )
}

export default Keyboard
