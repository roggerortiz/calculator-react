import ScientificButtons from './ScientificButtons'
import StandardButtons from './StandardButtons'

function Keyboard() {
  return (
    <div className='flex flex-col gap-1 items-center justify-start h-full overflow-auto light-scrollbars'>
      <ScientificButtons />
      <StandardButtons />
    </div>
  )
}

export default Keyboard
