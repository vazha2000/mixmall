import { createContext, useState } from "react";


const CheckoutContext = createContext();

const CheckoutProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const removeFromCart = (item) => {
    setCart(prev => prev.filter((cartItem) => cartItem.id !== item.id))
  }

  return (
    <CheckoutContext.Provider value={{cart, addToCart, removeFromCart, productQuantity, setProductQuantity}}>
      {children}
    </CheckoutContext.Provider>
  )
}

export { CheckoutProvider, CheckoutContext}