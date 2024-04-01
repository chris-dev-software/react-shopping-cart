import { useCart } from '../hooks/useCart'

export function Cart () {
  const { toggleCart, addProductToCart, removeProductFromCart, cart, clearCart } = useCart()

  return (
    <section className={`fixed ${toggleCart ? 'translate-x-0' : 'translate-x-full'} transition-transform top-0 right-0 bg-white w-[300px] h-screen p-5`}>
      <ul className='flex flex-col h-full overflow-y-auto no-scrollbar gap-10'>
        {
          cart.map(product => (
            <li className='' key={product.id}>
              <img className='w-full aspect-square max-w-[120px] mx-auto object-contain' src={product.image} alt={product.title} />
              <div className='p-2'>
                <h2 className='text-sm text-center mb-2'>{product.title}</h2>
                <div className='flex items-center justify-between'>
                  <p>S/. {product.price}</p>
                  <div className='flex gap-1'>
                    <button onClick={() => addProductToCart(product)} className='size-8 bg-black text-white rounded-md flex items-center justify-center'>➕</button>
                    <input value={product.quantity} className='size-8 text-center border rounded-md' type='text' readOnly id='quantity' />
                    <button onClick={() => removeProductFromCart(product)} className='size-8 bg-black text-white rounded-md flex items-center justify-center'>➖</button>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
        {
          cart.length > 0 && <button onClick={() => clearCart()} className='bg-black text-white rounded-md px-4 py-2'>Limpiar Carrito</button>
        }

      </ul>
    </section>
  )
}
