import { createContext, useState } from "react";


const CheckoutContext = createContext();

const CheckoutProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const removeFromCart = (item) => {
    setCart(prev => prev.filter((cartItem) => cartItem.id !== item.id))
  }

  return (
    <CheckoutContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </CheckoutContext.Provider>
  )
}

export { CheckoutProvider, CheckoutContext}