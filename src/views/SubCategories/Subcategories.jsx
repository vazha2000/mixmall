import React, { useState } from "react";
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
import { categoriesListItems, testProducts } from "../../data/data";
import { SearchInputHamburger } from "../../components/SearchInputHamburger";

export const Subcategories = ({ item }) => {
  const [hoverStates, setHoverStates] = useState(testProducts.map(() => false));
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <SSubcategories>
      <SSubcategoriesBreadcrumbs>{item.name}</SSubcategoriesBreadcrumbs>
      <SearchInputHamburger />
      <div style={{ display: "flex", marginTop: "30px" }}>
        <SSubcategoriesSidebarContainer>
          <SSubcategoriesCategories whileTap={{scale: 0.98}} onClick={() => setIsClicked(!isClicked)}>კატეგორიები</SSubcategoriesCategories>
          {isClicked && (
            <SSubcategoriesSidebarWrapper>
              <Sidebar />
            </SSubcategoriesSidebarWrapper>
          )}
        </SSubcategoriesSidebarContainer>
        <SSubcategoriesProducts>
          {item.products.map((card, index) => {
            return (
              <Card
                key={index}
                productImage={card.productImage}
                discountRate={card.discountRate}
                isDiscount={card.isDiscount}
                productName={card.productName}
                currentPrice={card.currentPrice}
                oldPrice={card.oldPrice}
                alt={card.alt}
                handleHover={() => handleHover(index)}
                isHovered={hoverStates[index]}
              />
            );
          })}
        </SSubcategoriesProducts>
      </div>
    </SSubcategories>
  );
};
