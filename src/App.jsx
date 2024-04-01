import { useEffect } from 'react'
import { Products } from './components/Products'
import { Filters } from './components/Filters'
import { useFilters } from './hooks/useFilters'
import { useCategories } from './hooks/useCategories'
import { useProducts } from './hooks/useProducts'
import { Cart } from './components/Cart'
import { ButtonCart } from './components/ButtonCart'
import { CartProvider } from './context/cart'

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
    <CartProvider>
      <div className='max-w-7xl mx-auto px-5'>
        <header>
          <h1 className='text-center py-10 text-4xl'>Tienda Online</h1>
          <Filters categories={categories} />
        </header>
        <main>

          <Products products={filteredProducts} />

          <Cart />

          <ButtonCart />
        </main>
      </div>
    </CartProvider>
  )
}

export default App
