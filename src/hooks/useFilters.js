import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export const useFilters = () => {
  const context = useContext(FiltersContext)

  if (context === undefined) {
    throw new Error('useFilters tiene que estar envuelto en un Provider')
  }

  return context
}
