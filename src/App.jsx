import { useEffect } from 'react'
import { Products } from './components/Products'
import { Filters } from './components/Filters'
import { useFilters } from './hooks/useFilters'
import { useCategories } from './hooks/useCategories'
import { useProducts } from './hooks/useProducts'

function App () {
  const { products, getProducts } = useProducts()
  const { categories, getCategories } = useCategories()
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  return (
    <div className='max-w-7xl mx-auto px-10'>
      <header>
        <h1 className='text-center'>Tienda Online</h1>
        <Filters categories={categories} />
      </header>
      <main>
        <Products filteredProducts={filteredProducts} />
      </main>
    </div>
  )
}

export default App
