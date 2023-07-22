import React, { useState } from "react";
import {
  SSideBarCategories,
  SSideBarCategoriesList,
  SSideBarCategoriesListWrapper,
  SSidebarContainer,
} from "./Sidebar.styled";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownMenu } from "../DropdownMenu";
import { categoriesListItems } from "../../data/data";

export const Sidebar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const handleCategoryHover = (category, event) => {
    const { top, left } = event.target.getBoundingClientRect();
    setHoveredCategory(category);
    setDropdownPosition({ top, left });
  };

  const handleCategoryUnhover = () => {
    setHoveredCategory(null);
  };
  return (
    <SSidebarContainer>
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
                <img src="assets/svg/vectorRight.svg" alt="vectorRight" />
              </SSideBarCategoriesList>
              <AnimatePresence>
                {hoveredCategory === item && (
                  <DropdownMenu
                    subcategories={item.subcategories}
                    topPosition={dropdownPosition.top}
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
