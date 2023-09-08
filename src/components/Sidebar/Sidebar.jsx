import React, { useRef, useState } from "react";
import {
  SSideBarCategories,
  SSideBarCategoriesIconName,
  SSideBarCategoriesList,
  SSideBarCategoriesListWrapper,
  SSidebarContainer,
} from "./Sidebar.styled";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownMenu } from "../DropdownMenu";
import { categoriesListItems } from "../../data/data";

export const Sidebar = ({ width }) => {
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
          const isLastItem = index === categoriesListItems.length - 1;
          return (
            <SSideBarCategoriesListWrapper
              key={index}
              onMouseLeave={handleCategoryUnhover}
              onMouseEnter={(event) => handleCategoryHover(item, event)}
            >
              <SSideBarCategoriesList>
                <SSideBarCategoriesIconName isLast={isLastItem}>
                  <img src={item.svg} alt={item.alt} width={20} />
                  <span>{item.name}</span>
                </SSideBarCategoriesIconName>
                {/* <img src="../assets/svg/vectorRight.svg" alt="vectorRight" /> */}
              </SSideBarCategoriesList>
              <AnimatePresence>
                {hoveredCategory === item && <DropdownMenu item={item} />}
              </AnimatePresence>
            </SSideBarCategoriesListWrapper>
          );
        })}
      </SSideBarCategories>
    </SSidebarContainer>
  );
};
