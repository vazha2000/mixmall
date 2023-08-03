import React from 'react'
import { SSubcategoryPagination } from './SubcategoryPagination.styled'

export const SubcategoryPagination = ({item, onPageChange, currentPage, itemsPerPage}) => {
  console.log(item)
  const totalPages = Math.ceil(item.products.length / itemsPerPage)

  const pageNumbers = Array.from({length: totalPages}, (_, index) => index + 1)
  console.log(pageNumbers)
  return (
    <SSubcategoryPagination>
      <ul style={{display: "flex"}}>
        {pageNumbers.map((page) => (
          <li 
          key={page}
           onClick={() => onPageChange(page)}
          style={{ cursor: "pointer", fontWeight: currentPage === page ? "bold" : "normal" }}
          >
            {page}
          </li>
        ))}
      </ul>
    </SSubcategoryPagination>
  )
}
