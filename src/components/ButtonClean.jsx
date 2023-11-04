import clsx from 'clsx'
import { cleanLabelsEnum } from '../helpers/enums'
import { useCalculator } from '../hooks/useCalculator'

function ButtonClean() {
  const {
    cleanLabel,
    editing,
    editOperator,
    setRecords,
    resetCleanLabel,
    resetElements
  } = useCalculator()

  const handleClick = (e) => {
    e.preventDefault()

    if (editing && editOperator) {
      return
    }

    if (cleanLabel === cleanLabelsEnum.c) {
      resetCleanLabel()
      resetElements()
    } else if (cleanLabel === cleanLabelsEnum.ac) {
      setRecords([])
    }
  }

  return (
    <button
      className={clsx(
        'flex justify-center items-center border rounded font-semibold text-lg h-12 bg-cyan-500 dark:bg-cyan-700 text-white',
        { 'opacity-60': editing && editOperator }
      )}
      disabled={editing && editOperator}
      onClick={handleClick}
    >
      <span>{cleanLabel}</span>
    </button>
  )
}

export default ButtonClean
