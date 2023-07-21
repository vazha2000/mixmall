import React from "react";
import {
  SMobileMenu,
  SMobileMenuCategories,
  SMobileMenuCategoriesContainer,
  SMobileMenuCategoriesList,
  SMobileMenuCategoriesListItems,
  SMobileMenuClose,
  SMobileMenuTitle,
  SMobileSubcategoriesList,
  SMobileSubcategoriesListItems,
  STitleCloseButton,
} from "./MobileMenu.styled";
import { useState } from "react";
import { categoriesListItems } from "../../data/data";

export const MobileMenu = ({handleMobileMenuClick}) => {
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);
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
        <SMobileMenuClose onClick={handleMobileMenuClick} src="assets/svg/close.svg" alt="close icon" />
      </STitleCloseButton>
      <SMobileMenuCategories>
        <SMobileMenuCategoriesList
          onClick={() => setIsCategoryClicked(!isCategoryClicked)}
        >
          <span>კატეგორიები</span>
          <img src="assets/svg/vectorDown.svg" alt="vector down" />
        </SMobileMenuCategoriesList>
        {isCategoryClicked && (
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
                        <SMobileSubcategoriesListItems key={subIndex}>
                          {subcategory}
                        </SMobileSubcategoriesListItems>
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
