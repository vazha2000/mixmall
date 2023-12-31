import React, { useContext, useEffect, useState } from "react";
import { AllFoundProductsContext } from "../../context/AllFoundProductsContext";
import {
  SSearchedProductsContainer,
  SSearchedProductsNoData,
  SSearchedProductsPagination,
  SSearchedProductsPaginationButton,
  SSearchedProductsPaginationList,
  SSearchedProductsPaginationListItems,
} from "./SearchedProducts.styled";
import { Card } from "../../components/Card";
import { SPaginationEllipsis } from "../../components/SubcategoryPagination/SubcategoryPagination.styled";
export const SearchedProducts = () => {
  const { currentPage, currentProducts, setCurrentPage, totalPages } =
    useContext(AllFoundProductsContext);

  const [hoverStates, setHoverStates] = useState(
    currentProducts.map(() => false)
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxPageNumbersToShow = windowWidth < 450 ? 3 : 5;

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const getPageNumbersWithEllipsis = () => {
    if (totalPages <= 3) {
      return pageNumbers;
    }

    const leftEllipsis = currentPage - Math.floor(maxPageNumbersToShow / 3);
    const rightEllipsis = currentPage + Math.floor(maxPageNumbersToShow / 3);

    if (leftEllipsis <= 1) {
      return [
        ...pageNumbers.slice(0, maxPageNumbersToShow - 1),
        "ellipsis",
        totalPages,
      ];
    } else if (rightEllipsis >= totalPages) {
      return [
        1,
        "ellipsis",
        ...pageNumbers.slice(totalPages - maxPageNumbersToShow + 2),
      ];
    } else {
      return [
        1,
        "ellipsis",
        ...pageNumbers.slice(leftEllipsis, rightEllipsis),
        "ellipsis",
        totalPages,
      ];
    }
  };

  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <SSearchedProductsContainer>
        {currentProducts.map(
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
              alt,
              id,
            ],
            index
          ) => (
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
                id={id}
              />
          )
        )}
      </SSearchedProductsContainer>
      {currentProducts.length == 0 ? (
        <SSearchedProductsNoData>
          <h1>PRODUCT LIST IS EMPTY</h1>
        </SSearchedProductsNoData>
      ) : (
        <SSearchedProductsPagination>
          <SSearchedProductsPaginationList>
            <SSearchedProductsPaginationButton firstPage={currentPage === 1} onClick={handlePrevPage}>
              <img src="assets/svg/paginationLeft.svg" alt="left" />
            </SSearchedProductsPaginationButton>
            {getPageNumbersWithEllipsis().map((page, index) => (
              <React.Fragment key={index}>
                {page === "ellipsis" ? (
                  <SPaginationEllipsis>
                    <img src="assets/svg/ellipsis.svg" alt="ellipsis" />
                  </SPaginationEllipsis>
                ) : (
                  <SSearchedProductsPaginationListItems
                    onClick={() => handlePageChange(page)}
                    isActive={currentPage === page}
                  >
                    <span>{page}</span>
                  </SSearchedProductsPaginationListItems>
                )}
              </React.Fragment>
            ))}
            <SSearchedProductsPaginationButton
              onClick={handleNextPage}
              rotate="true"
              lastPage={currentPage === totalPages}
            >
              <img src="assets/svg/paginationLeft.svg" alt="right" />
            </SSearchedProductsPaginationButton>
          </SSearchedProductsPaginationList>
        </SSearchedProductsPagination>
      )}
    </div>
  );
};
