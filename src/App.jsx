import { useEffect, useState } from 'react'

function App () {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  const filterProducts = (products) => {
    return products.filter(product => (
      product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
    ))
  }

  const filteredProducts = filterProducts(products)

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }

    const getCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = await response.json()
      setCategories(data)
    }

    getProducts()
    getCategories()
  }, [])

  const handleChangeMinPrince = (event) => {
    const newValue = Number(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: newValue
    }))
  }

  const handleChangeCategory = (event) => {
    const newValue = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: newValue
    }))
  }

  return (
    <div className='max-w-7xl mx-auto px-10'>
      <header>
        <h1 className='text-center'>Tienda Online</h1>
        <section className='flex items-center justify-between py-10'>
          <div className='flex items-center gap-10'>
            <label htmlFor='price'>Precio minimo:</label>
            <input onChange={handleChangeMinPrince} type='range' id='price' min={0} max={1000} />
            <span>S/. {filters.minPrice}</span>
          </div>

          <div className='flex items-center gap-10'>
            <label htmlFor='category'>Categoria:</label>
            <select onChange={handleChangeCategory} id='category'>
              <option value='all'>Todos</option>
              {
                categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))
              }
            </select>

          </div>
        </section>
      </header>
      <main>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {
          filteredProducts.map(product => (
            <li className='' key={product.id}>
              <img className='w-full aspect-square object-contain' src={product.image} alt={product.title} />
              <div className='p-5'>
                <h2 className='text-lg text-center'>{product.title}</h2>
                <div className='flex items-center justify-between'>
                  <p>{product.price}</p>
                  <button className='bg-green-500 text-white px-4 py-1 rounded-md'>Agregar</button>
                </div>
              </div>
            </li>
          ))
        }
        </ul>
      </main>
    </div>
  )
}

export default App
