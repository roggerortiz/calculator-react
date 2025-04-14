import { scientificButtons, standardButtons } from '../helpers/buttons'
import { calculatorsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'
import ButtonType from './ButtonType'

function Keyboard() {
  const { calculator } = useCalculator()

  return (
    <div className='flex flex-col gap-1 items-center justify-center light-scrollbars'>
      {calculator === calculatorsEnum.scientific && (
        <div className='grid grid-cols-4 gap-1 overflow-auto w-full h-full'>
          {scientificButtons
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map(({ id, label, type }) => (
              <ButtonType
                key={id}
                type={type}
                label={label}
              />
            ))}
        </div>
      )}

      <div className='grid grid-cols-4 gap-1 overflow-auto w-full h-full'>
        {standardButtons
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map(({ id, label, type }) => (
            <ButtonType
              key={id}
              type={type}
              label={label}
            />
          ))}
      </div>
    </div>
  )
}

export default Keyboard
