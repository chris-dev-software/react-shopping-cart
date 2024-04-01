import { useFilters } from '../hooks/useFilters'

export function Filters ({ categories }) {
  const { filters, setFilters } = useFilters()

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
  )
}
