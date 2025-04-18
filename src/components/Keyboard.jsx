import Buttons from './Buttons'

function Keyboard() {
  return (
    <div className='flex flex-col gap-1 items-center justify-start h-full overflow-auto light-scrollbars'>
      <Buttons />
    </div>
  )
}

export default Keyboard
