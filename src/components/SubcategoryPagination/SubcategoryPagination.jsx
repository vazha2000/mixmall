import React from "react";
import {
  SCubcategoryPaginationButton,
  SSubcategoryPagination,
  SSubcategoryPaginationList,
  SSubcategoryPaginationListItems,
} from "./SubcategoryPagination.styled";

export const SubcategoryPagination = ({
  item,
  onPageChange,
  currentPage,
  itemsPerPage,
  setCurrentPage
}) => {
  const totalPages = Math.ceil(item.products.length / itemsPerPage);
  const maxPageNumbersToShow = 5;
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
      return [...pageNumbers.slice(0, maxPageNumbersToShow - 1), "ellipsis", totalPages];
    } else if (rightEllipsis >= totalPages) {
      return [1, "ellipsis", ...pageNumbers.slice(totalPages - maxPageNumbersToShow + 2)];
    } else {
      return [1, "ellipsis", ...pageNumbers.slice(leftEllipsis, rightEllipsis), "ellipsis", totalPages];
    }
  };

  const handleNextPage = () => {
    if(currentPage !== totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if(currentPage !== 1) {
      setCurrentPage(prev => prev - 1)
    }
  }


  return (
    <SSubcategoryPagination>
      <SSubcategoryPaginationList style={{ display: "flex" }}>
        <SCubcategoryPaginationButton onClick={handlePrevPage} firstPage={currentPage === 1}>
          <img src="assets/svg/paginationLeft.svg" alt="left" />
        </SCubcategoryPaginationButton>
        {getPageNumbersWithEllipsis().map((page, index) => (
          <React.Fragment key={index}>
            {page === "ellipsis" ? (
              <span>...</span>
            ) : (
              <SSubcategoryPaginationListItems
                onClick={() => onPageChange(page)}
                isActive={currentPage === page}
              >
                {page}
              </SSubcategoryPaginationListItems>
            )}
          </React.Fragment>
        ))}
        <SCubcategoryPaginationButton onClick={handleNextPage} rotate="true" lastPage={currentPage === totalPages}>
          <img src="assets/svg/paginationLeft.svg" alt="right" />
        </SCubcategoryPaginationButton>
      </SSubcategoryPaginationList>
    </SSubcategoryPagination>
  );
};
