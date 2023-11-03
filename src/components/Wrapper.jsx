import PropTypes from 'prop-types'

function Wrapper({ children }) {
  return (
    <div className='flex flex-col gap-2 w-full max-h-full md:w-1/3 overflow-hidden border rounded-lg bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white text-sm p-2'>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Wrapper
