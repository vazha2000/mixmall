import React from "react";
import {
  SCubcategoryPaginationButton,
  SPaginationEllipsis,
  SSubcategoryPagination,
  SSubcategoryPaginationList,
  SSubcategoryPaginationListItems,
} from "./SubcategoryPagination.styled";
import { useState } from "react";
import { useEffect } from "react";

export const SubcategoryPagination = ({
  item,
  onPageChange,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(item.products.length / itemsPerPage);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <SSubcategoryPagination>
      <SSubcategoryPaginationList style={{ display: "flex" }}>
        <SCubcategoryPaginationButton
          onClick={handlePrevPage}
          firstPage={currentPage === 1}
        >
          <img src="assets/svg/paginationLeft.svg" alt="left" />
        </SCubcategoryPaginationButton>
        {getPageNumbersWithEllipsis().map((page, index) => (
          <React.Fragment key={index}>
            {page === "ellipsis" ? (
              <SPaginationEllipsis>
                <img src="assets/svg/ellipsis.svg" alt="ellipsis" />
              </SPaginationEllipsis>
            ) : (
              <SSubcategoryPaginationListItems
                onClick={() => onPageChange(page)}
                isActive={currentPage === page}
              >
                <span>{page}</span>
              </SSubcategoryPaginationListItems>
            )}
          </React.Fragment>
        ))}
        <SCubcategoryPaginationButton
          onClick={handleNextPage}
          rotate="true"
          lastPage={currentPage === totalPages}
        >
          <img src="assets/svg/paginationLeft.svg" alt="right" />
        </SCubcategoryPaginationButton>
      </SSubcategoryPaginationList>
    </SSubcategoryPagination>
  );
};
