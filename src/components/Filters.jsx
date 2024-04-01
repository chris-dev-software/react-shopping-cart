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
    <section className='flex flex-col sm:flex-row justify-between py-10 gap-3'>
      <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
        <label htmlFor='price'>Precio minimo:</label>
        <div className='flex gap-2'>
          <input className='w-full' onChange={handleChangeMinPrince} type='range' id='price' min={0} max={1000} />
          <p className='min-w-fit'>S/. {filters.minPrice}</p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
        <label htmlFor='category'>Categoria:</label>
        <select className='border px-2' onChange={handleChangeCategory} id='category'>
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
