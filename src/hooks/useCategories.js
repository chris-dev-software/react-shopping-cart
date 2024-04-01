import { useState } from 'react'

export const useCategories = () => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json()
    setCategories(data)
  }

  return { categories, getCategories }
}
