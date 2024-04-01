import { useState } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }

  return { products, getProducts }
}
