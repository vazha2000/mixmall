import React, { useEffect } from "react";
import {
  SMobileMenu,
  SMobileMenuCategories,
  SMobileMenuCategoriesContainer,
  SMobileMenuCategoriesList,
  SMobileMenuCategoriesListItems,
  SMobileMenuClose,
  SMobileMenuNameIcon,
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

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  const [openSubcategories, setOpenSubcategories] = useState(
    Array(categoriesListItems.length).fill(false)
  );

  const handleCategoryClick = (index) => {
    const newOpenSubcategories = [...openSubcategories];
    newOpenSubcategories[index] = !newOpenSubcategories[index];
    setOpenSubcategories(newOpenSubcategories);
  };

  const mobileMenuVariants = {
    close: {
      x: "100%",
      transition: { stiffness: 0, duration: 0.4 },
    },
    open: {
      x: 0,
      transition: { stiffness: 0, duration: 0.4 },
    },
  };
  const dropdownVariants = {
    hidden: { opacity: 1, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
  };

  const hiddenVariant = {
    hidden: { opacity: 1, height: 0 },
  };

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <SMobileMenu
      variants={mobileMenuVariants}
      initial="close"
      animate="open"
      exit="close"
    >
      <STitleCloseButton>
        <SMobileMenuTitle>კატეგორიები</SMobileMenuTitle>
        <SMobileMenuClose
          onClick={() => setIsOpen(false)}
          src="assets/svg/close.svg"
          alt="close icon"
          width={20}
        />
      </STitleCloseButton>
      <SMobileMenuCategories>
        <SMobileMenuCategoriesContainer>
          {categoriesListItems.map((item, index) => {
            return (
              <motion.div key={index}>
                <SMobileMenuCategoriesListItems
                  onClick={() => handleCategoryClick(index)}
                >
                  <SMobileMenuNameIcon>
                    <img src={item.svg} alt="" width={20} />
                    <span>{item.name}</span>
                  </SMobileMenuNameIcon>
                  <motion.img
                    animate={
                      openSubcategories[index]
                        ? { rotateX: 180 }
                        : { rotateX: 0 }
                    }
                    src="assets/svg/vectorDown.svg"
                    width={25}
                    alt="vector down"
                  />
                </SMobileMenuCategoriesListItems>
                <AnimatePresence>
                  {openSubcategories[index] && (
                    <SMobileSubcategoriesList
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {item.subcategories.map((subcategory, subIndex) => (
                        <SStyledLink
                          to={`/${item.categoryName}/${subcategory.subcategoryName}`}
                          key={uuidv4()}
                        >
                          <SMobileSubcategoriesListItems
                            onClick={() => setIsOpen(false)}
                            key={subIndex}
                          >
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
        <SMobileMenuCategoriesList>განვადება</SMobileMenuCategoriesList>
        <SMobileMenuCategoriesList>კონტაქტი</SMobileMenuCategoriesList>
      </SMobileMenuCategories>
    </SMobileMenu>
  );
};
