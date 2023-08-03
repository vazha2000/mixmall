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
}) => {
  console.log(item);
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

    const leftEllipsis = currentPage - Math.floor(maxPageNumbersToShow / 2);
    const rightEllipsis = currentPage + Math.floor(maxPageNumbersToShow / 2);

    if (leftEllipsis <= 1) {
      return [...pageNumbers.slice(0, maxPageNumbersToShow - 1), "ellipsis", totalPages];
    } else if (rightEllipsis >= totalPages) {
      return [1, "ellipsis", ...pageNumbers.slice(totalPages - maxPageNumbersToShow + 2)];
    } else {
      return [1, "ellipsis", ...pageNumbers.slice(leftEllipsis, rightEllipsis), "ellipsis", totalPages];
    }
  };

  
  return (
    <SSubcategoryPagination>
      <SSubcategoryPaginationList style={{ display: "flex" }}>
        <SCubcategoryPaginationButton>
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
        <SCubcategoryPaginationButton rotate={true}>
          <img src="assets/svg/paginationLeft.svg" alt="left" />
        </SCubcategoryPaginationButton>
      </SSubcategoryPaginationList>
    </SSubcategoryPagination>
  );
};
