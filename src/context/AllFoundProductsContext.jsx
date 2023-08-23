import React, { createContext, useState } from "react";

const AllFoundProductsContext = createContext();

const AllFoundProductsProvider = ({ children }) => {
  const [allFoundProducts, setAllFoundProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allFoundProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  
  return (
    <AllFoundProductsContext.Provider
      value={{
      allFoundProducts,
      currentProducts,
      setAllFoundProducts,
      currentPage,
      setCurrentPage,
      productsPerPage,
    }}
    >
      {children}
    </AllFoundProductsContext.Provider>
  );
};

export { AllFoundProductsContext, AllFoundProductsProvider };
