import React, { createContext, useState } from "react";

const AllFoundProductsContext = createContext();

const AllFoundProductsProvider = ({ children }) => {
  const [allFoundProducts, setAllFoundProducts] = useState([]);

  return (
    <AllFoundProductsContext.Provider
      value={{ allFoundProducts, setAllFoundProducts }}
    >
      {children}
    </AllFoundProductsContext.Provider>
  );
};

export { AllFoundProductsContext, AllFoundProductsProvider };
