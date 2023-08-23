import React, { useContext, useState } from "react";
import { AllFoundProductsContext } from "../../context/AllFoundProductsContext";
import { SSearchedProductsContainer } from "./SearchedProducts.styled";
import { Card } from "../../components/Card";
export const SearchedProducts = () => {
  const { allFoundProducts, currentPage, setCurrentPage, productsPerPage } =
    useContext(AllFoundProductsContext);

  const totalPages = Math.ceil(allFoundProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [hoverStates, setHoverStates] = useState(allFoundProducts.map(() => false));


  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  console.log(allFoundProducts)
  return (
    <SSearchedProductsContainer>
      {allFoundProducts.map(
        (
          [
            productName,
            categoryName,
            productId,
            oldPrice,
            currentPrice,
            productImage,
            isDiscount,
            discountRate,
            alt
          ],
          index
        ) => (
          <div key={index}>
            <Card
              key={index}
              index={index}
              width={"200px"}
              productImage={productImage}
              discountRate={discountRate}
              isDiscount={isDiscount}
              productName={productName}
              currentPrice={currentPrice}
              oldPrice={oldPrice}
              alt={alt}
              isHovered={hoverStates[index]}
              handleHover={() => handleHover(index)}
              path={`/${categoryName}/${productId}/${productName}`}
            />
          </div>
        )
      )}
    </SSearchedProductsContainer>
  );
};
