export function Products ({ filteredProducts }) {
  return (
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
  )
}
