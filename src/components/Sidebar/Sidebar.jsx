import React, { useRef, useState } from "react";
import {
  SSideBarCategories,
  SSideBarCategoriesList,
  SSideBarCategoriesListWrapper,
  SSidebarContainer,
} from "./Sidebar.styled";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownMenu } from "../DropdownMenu";
import { categoriesListItems } from "../../data/data";

export const Sidebar = ({width}) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const sidebarRef = useRef(null);

  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
  };

  const handleCategoryUnhover = () => {
    setHoveredCategory(null);
  };
  return (
    <SSidebarContainer width={width} ref={sidebarRef}>
      <SSideBarCategories>
        {categoriesListItems.map((item, index) => {
          return (
            <SSideBarCategoriesListWrapper
              key={index}
              onMouseLeave={handleCategoryUnhover}
              onMouseEnter={(event) => handleCategoryHover(item, event)}
            >
              <SSideBarCategoriesList>
                <span>{item.name}</span>
                <img src="../assets/svg/vectorRight.svg" alt="vectorRight" />
              </SSideBarCategoriesList>
              <AnimatePresence>
                {hoveredCategory === item && (
                  <DropdownMenu
                    item={item}
                  />
                )}
              </AnimatePresence>
            </SSideBarCategoriesListWrapper>
          );
        })}
      </SSideBarCategories>
    </SSidebarContainer>
  );
};
