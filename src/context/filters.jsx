import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  const filterProducts = (products) => {
    return products.filter(product => (
      product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
    ))
  }

  return (
    <FiltersContext.Provider value={{
      filters,
      filterProducts,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
