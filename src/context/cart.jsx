import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [toggleCart, setToggleCart] = useState(false)

  const addProductToCart = (product) => {
    const indexProduct = cart.findIndex(item => item.id === product.id)

    const newCart = structuredClone(cart)

    if (indexProduct === -1) {
      const newProduct = {
        ...product,
        quantity: 1
      }
      newCart.push(newProduct)
      setCart(newCart)
      return
    }

    newCart[indexProduct].quantity += 1
    setCart(newCart)
  }

  const removeProductFromCart = (product) => {
    const newCart = structuredClone(cart).map(item => {
      if (item.id === product.id) {
        item.quantity -= 1
      }
      return item
    }).filter(item => item.quantity > 0)

    setCart(newCart)
  }

  const deleteProductFromCart = (product) => {
    const newCart = structuredClone(cart).filter(item => item.id !== product.id)
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{
      addProductToCart,
      cart,
      toggleCart,
      setToggleCart,
      removeProductFromCart,
      deleteProductFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
