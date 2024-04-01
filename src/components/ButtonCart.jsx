import { useCart } from '../hooks/useCart'

export function ButtonCart () {
  const { setToggleCart } = useCart()

  return (
    <button onClick={() => setToggleCart(prevState => !prevState)} className='bg-neutral-200 hover:bg-neutral-300 transition-colors size-10 fixed top-5 right-5 text-xl rounded-full'>🛒</button>

  )
}
