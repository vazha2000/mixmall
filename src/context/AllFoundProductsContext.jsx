import React, { createContext, useState } from 'react'

export const AllFoundProductsContext = createContext();

export const AllFoundProductsProvider = ({children}) => {
  const [allFoundProducts, setAllFoundProducts] = useState([]);

  return (
    <AllFoundProductsContext.Provider value={{allFoundProducts, setAllFoundProducts}}>
      {children}
    </AllFoundProductsContext.Provider>
  )
}

export {AllFoundProductsContext, AllFoundProductsProvider}