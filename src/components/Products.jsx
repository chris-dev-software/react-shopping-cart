import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { cart, deleteProductFromCart, addProductToCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <section>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {
        products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li className='' key={product.id}>
              <img className='w-full aspect-square object-contain' src={product.image} alt={product.title} />
              <div className='p-5'>
                <h2 className='text-lg text-center'>{product.title}</h2>
                <div className='flex items-center justify-between'>
                  <p>{product.price}</p>
                  {
                    isProductInCart
                      ? <button onClick={() => deleteProductFromCart(product)} className='bg-red-500 text-white px-4 py-1 rounded-md'>Eliminar</button>
                      : <button onClick={() => addProductToCart(product)} className='bg-green-500 text-white px-4 py-1 rounded-md'>Agregar</button>
                  }
                </div>
              </div>
            </li>
          )
        })
        }
      </ul>
    </section>
  )
}
