import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext(null)


function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('cart'))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}


export default function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart)

  
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart))
    } catch {
      
    }
  }, [cart])

  function addToCart(product) {
    const found = cart.find((item) => item.id === product.id)
    if (found) {
     
      setCart(cart.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item)))
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
    toast.success(`${product.name} added to your bag`)
  }

  function changeQty(id, newQty) {
    if (newQty < 1) {
      setCart(cart.filter((item) => item.id !== id)) 
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: newQty } : item)))
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  const cartCount = cart.reduce((total, item) => total + item.qty, 0)
  const cartTotal = cart.reduce((total, item) => total + item.price * item.qty, 0)

  const value = { cart, cartCount, cartTotal, addToCart, changeQty, removeFromCart, clearCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const cartContext = useContext(CartContext)
  if (!cartContext) throw new Error('useCart must be used inside <CartProvider>')
  return cartContext
}
