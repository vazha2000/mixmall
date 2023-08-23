import React, { createContext, useEffect, useState } from "react";

const AllFoundProductsContext = createContext();

const AllFoundProductsProvider = ({ children }) => {
  const [allFoundProducts, setAllFoundProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;


  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allFoundProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    setCurrentProducts(currentProducts);
  }, [allFoundProducts, currentPage]);

  const [currentProducts, setCurrentProducts] = useState([]);

  const totalPages = Math.ceil(allFoundProducts.length / productsPerPage);
  
  
  return (
    <AllFoundProductsContext.Provider
      value={{
      allFoundProducts,
      currentProducts,
      setAllFoundProducts,
      currentPage,
      setCurrentPage,
      productsPerPage,
      totalPages
    }}
    >
      {children}
    </AllFoundProductsContext.Provider>
  );
};

export { AllFoundProductsContext, AllFoundProductsProvider };
