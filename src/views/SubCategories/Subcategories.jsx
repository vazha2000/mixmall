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

  const autoCloseMobileMenu = () => {
    if (window.innerWidth < 1024 && isClicked) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", autoCloseMobileMenu);

    return () => {
      window.removeEventListener("resize", autoCloseMobileMenu);
    };
  }, [isClicked]);

  // const minPrice = item.products.map((item) => item.currentPrice)
  // const maxPrice = item.products.map((Item) => item.currentPrice)
  // console.log(minPrice.map(str => parseInt(str, 10)))

  return (
    <SSubcategories>
      <SSubcategoriesBreadcrumbs>{item.name}</SSubcategoriesBreadcrumbs>
      <SearchInputHamburger />
      <div style={{ display: "flex", marginTop: "30px" }}>
        <SSubcategoriesSidebarContainer>
          <SSubcategoriesCategories whileTap={{scale: 0.98}} onClick={() => setIsClicked(!isClicked)}>კატეგორიები</SSubcategoriesCategories>
          {isClicked && (
            <SSubcategoriesSidebarWrapper>
              <Sidebar width={"115%"}/>
            </SSubcategoriesSidebarWrapper>
          )}
          <ProductsFilter />
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
