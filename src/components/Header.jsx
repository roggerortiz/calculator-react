import Theme from './Theme'
import Title from './Title'

function Header() {
  return (
    <div className='flex justify-between items-center p-2 -mx-2 -mt-2 border-b text-base font-semibold'>
      <Title />
      <Theme />
    </div>
  )
}

export default Header
