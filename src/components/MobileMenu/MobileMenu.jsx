import React from "react";
import {
  SMobileMenu,
  SMobileMenuCategories,
  SMobileMenuCategoriesContainer,
  SMobileMenuCategoriesList,
  SMobileMenuCategoriesListItems,
  SMobileMenuTitle,
  SMobileSubcategoriesList,
  STitleCloseButton,
} from "./MobileMenu.styled";
import { useState } from "react";
import { categoriesListItems } from "../../data/data";

export const MobileMenu = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [openSubcategories, setOpenSubcategories] = useState(
    Array(categoriesListItems.length).fill(false)
  );

  const handleCategoryClick = (index) => {
    const newOpenSubcategories = [...openSubcategories];
    newOpenSubcategories[index] = !newOpenSubcategories[index];
    setOpenSubcategories(newOpenSubcategories)
  };

  return (
    <SMobileMenu>
      <STitleCloseButton>
        <SMobileMenuTitle>კატეგორიები</SMobileMenuTitle>
        <img src="assets/svg/close.svg" alt="close icon" />
      </STitleCloseButton>
      <SMobileMenuCategories>
        <SMobileMenuCategoriesList
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          <span>კატეგორიები</span>
          <img src="assets/svg/vectorDown.svg" alt="vector down" />
        </SMobileMenuCategoriesList>
        {isMenuClicked && (
          <SMobileMenuCategoriesContainer>
            {categoriesListItems.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <SMobileMenuCategoriesListItems
                    onClick={() => handleCategoryClick(index)}
                  >
                    <span>{item.name}</span>
                    <img
                      src="assets/svg/vectorDown.svg"
                      width={25}
                      alt="vector down"
                    />
                  </SMobileMenuCategoriesListItems>
                  {openSubcategories[index] && (
                    <SMobileSubcategoriesList>
                      {item.subcategories.map((subcategory, subIndex) => (
                        <SMobileMenuCategoriesListItems key={subIndex}>
                          {subcategory}
                        </SMobileMenuCategoriesListItems>
                      ))}
                    </SMobileSubcategoriesList>
                  )}
                </React.Fragment>
              );
            })}
          </SMobileMenuCategoriesContainer>
        )}
        <SMobileMenuCategoriesList>მთავარი</SMobileMenuCategoriesList>
        <SMobileMenuCategoriesList>ONLINE განვადება</SMobileMenuCategoriesList>
        <SMobileMenuCategoriesList>კონტაქტი</SMobileMenuCategoriesList>
      </SMobileMenuCategories>
    </SMobileMenu>
  );
};
