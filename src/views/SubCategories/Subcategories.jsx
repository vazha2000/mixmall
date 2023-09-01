import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import {
  SSubcategories,
  SSubcategoriesBreadcrumbs,
  SSubcategoriesCategories,
  SSubcategoriesProducts,
  SSubcategoriesSidebarContainer,
  SSubcategoriesSidebarWrapper,
} from "./Subcategories.styled";
import { Card } from "../../components/Card";
import { testProducts } from "../../data/data";
import { SearchInputHamburger } from "../../components/SearchInputHamburger";
import { ProductsFilter } from "../../components/ProductsFilter";
import { SubcategoryPagination } from "../../components/SubcategoryPagination";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "../../components/Breadcrumb";

export const Subcategories = ({ item }) => {

  const [hoverStates, setHoverStates] = useState(testProducts.map(() => false));

  const { pathname } = useLocation();  
  const subcategoryPath = pathname + "/";

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setCurrentPage(1);
  }, [item]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const paginatedList = item.products.slice(firstIndex, lastIndex);
  return (
    <SSubcategories>
      {/* <SSubcategoriesBreadcrumbs>{item.name}</SSubcategoriesBreadcrumbs> */}
      {/* <Breadcrumb /> */}
      <div style={{ display: "flex", marginTop: "30px" }}>
        <SSubcategoriesSidebarContainer>
          <ProductsFilter />
        </SSubcategoriesSidebarContainer>
        <SSubcategoriesProducts>
          {paginatedList.map((card, index) => {
            return (
              <Card
                key={index}
                index={index}
                width={"200px"}
                productImage={card.productImage}
                discountRate={card.discountRate}
                isDiscount={card.isDiscount}
                productName={card.productName}
                currentPrice={card.currentPrice}
                oldPrice={card.oldPrice}
                alt={card.alt}
                handleHover={() => handleHover(index)}
                isHovered={hoverStates[index]}
                path={subcategoryPath + card.productName}
                id={card.id}
              />
            );
          })}
        </SSubcategoriesProducts>
      </div>
      <SubcategoryPagination
        item={item}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </SSubcategories>
  );
};
