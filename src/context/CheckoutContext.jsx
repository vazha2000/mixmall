import { createContext, useState } from "react";


const CheckoutContext = createContext();

const CheckoutProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const removeFromCart = (item) => {
    setCart(prev => prev.filter((cartItem) => cartItem.id !== item.id))
  }

  const updateProductQuantity = (productId, quantity) => {
    setProductQuantities((prev) => ({
      ...prev, [productId]: quantity
    }))
  }

  return (
    <CheckoutContext.Provider value={{cart, addToCart, removeFromCart, productQuantities, updateProductQuantity}}>
      {children}
    </CheckoutContext.Provider>
  )
}

export { CheckoutProvider, CheckoutContext}