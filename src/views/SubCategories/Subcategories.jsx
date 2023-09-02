import React, { useEffect, useState } from "react";
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
import { ProductsFilter } from "../../components/ProductsFilter";
import { SubcategoryPagination } from "../../components/SubcategoryPagination";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "../../components/Breadcrumb";

export const Subcategories = ({ item }) => {
  const productPrices = item.products.map((item) => item.currentPrice);
  const maxPrice = Math.max(...productPrices);
  const minPrice = Math.min(...productPrices);

  const [hoverStates, setHoverStates] = useState(testProducts.map(() => false));
  const [filteredProducts, setFilteredProducts] = useState(item.products);

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
    setHoverStates(testProducts.map(() => false));
    setFilteredProducts(item.products);
    setCurrentPage(1);
  }, [item]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const paginatedList = filteredProducts.slice(firstIndex, lastIndex);

  const handleFilterChange = (newFilteredProducts) => {
    setFilteredProducts(newFilteredProducts);
    setCurrentPage(1);
  };

  return (
    <SSubcategories>
      {/* <SSubcategoriesBreadcrumbs>{item.name}</SSubcategoriesBreadcrumbs> */}
      {/* <Breadcrumb /> */}
      <div style={{ display: "flex", marginTop: "30px" }}>
        <SSubcategoriesSidebarContainer>
          <ProductsFilter
            maxPrice={maxPrice}
            minPrice={minPrice}
            products={item.products}
            onFilterChange={handleFilterChange}
          />
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
        item={filteredProducts}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </SSubcategories>
  );
};

