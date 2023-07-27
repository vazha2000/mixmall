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
import { AnimatePresence, motion } from "framer-motion";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { v4 as uuidv4 } from "uuid";

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

  const mobileMenuVariants = {
    close: {
      x: "-100%",
      transition: {stiffness: 0, duration: 0.4}
    },
    open: {
      x: 0,
      transition: {stiffness: 0, duration: 0.4}
    }
  }
  const dropdownVariants = {
    hidden: { opacity: 1, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
  };

  const hiddenVariant = {
    hidden: {opacity: 1, height: 0}
  }

  return (
    <SMobileMenu variants={mobileMenuVariants} initial="close" animate="open" exit="close">
      <STitleCloseButton>
        <SMobileMenuTitle>კატეგორიები</SMobileMenuTitle>
        <SMobileMenuClose onClick={handleMobileMenuClick} src="assets/svg/close.svg" alt="close icon" />
      </STitleCloseButton>
      <SMobileMenuCategories>
        <SMobileMenuCategoriesList
          onClick={() => setIsCategoryClicked(!isCategoryClicked)}
        >
          <span>კატეგორიები</span>
          <motion.img animate={isCategoryClicked ? {rotateX: 180} : {rotateX: 0}} src="assets/svg/vectorDown.svg" alt="vector down" />
        </SMobileMenuCategoriesList>
        {/* triggered when isCategoryClicked state changes */}
          <SMobileMenuCategoriesContainer
          variants={isCategoryClicked ? dropdownVariants : hiddenVariant}
          initial={isCategoryClicked ? "hidden" : "hidden"}
          animate="visible"
          >
            {categoriesListItems.map((item, index) => {
              return (
                <motion.div key={index}>
                  <SMobileMenuCategoriesListItems
                    onClick={() => handleCategoryClick(index)}
                  >
                    <span>{item.name}</span>
                    <motion.img
                      animate={openSubcategories[index] ? {rotateX: 180} : {rotateX: 0}}
                      src="assets/svg/vectorDown.svg"
                      width={25}
                      alt="vector down"
                    />
                  </SMobileMenuCategoriesListItems>
                  <AnimatePresence>
                  {openSubcategories[index] && (
                    <SMobileSubcategoriesList variants={dropdownVariants} initial="hidden" animate="visible" exit="hidden">
                      {item.subcategories.map((subcategory, subIndex) => (
                        <SStyledLink to={`/${item.categoryName}/${subcategory.subcategoryName}`}  key={uuidv4()}>
                          <SMobileSubcategoriesListItems onClick={handleMobileMenuClick} key={subIndex}>
                            {subcategory.name}
                          </SMobileSubcategoriesListItems>
                        </SStyledLink>
                      ))}
                    </SMobileSubcategoriesList>
                  )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </SMobileMenuCategoriesContainer>
        <SMobileMenuCategoriesList>მთავარი</SMobileMenuCategoriesList>
        <SMobileMenuCategoriesList>ONLINE განვადება</SMobileMenuCategoriesList>
        <SMobileMenuCategoriesList>კონტაქტი</SMobileMenuCategoriesList>
      </SMobileMenuCategories>
    </SMobileMenu>
  );
};
