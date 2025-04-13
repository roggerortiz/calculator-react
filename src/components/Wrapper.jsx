import PropTypes from 'prop-types'

function Wrapper({ children }) {
  return (
    <div className='flex flex-col w-full max-w-xl max-h-full gap-2 p-2 overflow-hidden text-sm border rounded-lg bg-zinc-100 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 dark:bg-zinc-800 text-zinc-800 dark:text-white'>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Wrapper
