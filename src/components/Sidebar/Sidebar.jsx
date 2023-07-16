import React, { useState } from "react";
import {
  SSideBarCategories,
  SSideBarCategoriesList,
  SSideBarCategoriesListWrapper,
  SSidebarContainer,
} from "./Sidebar.styled";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownMenu } from "../DropdownMenu";

const categoriesListItems = [
  {
    id: 1,
    name: "კომპიუტერული ტექნიკა",
    subcategories: ["subcategory 1", "subcategory 2", "subcategory 3"],
  },
  {
    id: 2,
    name: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategories: ["subcategory 4", "subcategory 5", "subcategory 6"],
  },
  {
    id: 3,
    name: "წვრილი საყოფაცხოვრებო ტექნიკა",
    subcategories: ["subcategory 7", "subcategory 8", "subcategory 9"],
  },
  {
    id: 4,
    name: "ხელსაწყო ინსტრუმენტები",
    subcategories: ["subcategory 10", "subcategory 11", "subcategory 12"],
  },
  {
    id: 5,
    name: "მობილური ტელეფონები",
    subcategories: ["subcategory 13", "subcategory 14", "subcategory 15"],
  },
  {
    id: 6,
    name: "თავის მოვლის საშუალებები",
    subcategories: ["subcategory 16", "subcategory 17", "subcategory 18"],
  },
  {
    id: 7,
    name: "სპორტი და გართობა",
    subcategories: ["subcategory 19", "subcategory 20", "subcategory 21"],
  },
  {
    id: 8,
    name: "გათბობა და გაგრილება",
    subcategories: ["subcategory 22", "subcategory 23", "subcategory 24"],
  },
  {
    id: 9,
    name: "საბავშვო ინვენტარი",
    subcategories: ["subcategory 25", "subcategory 26", "subcategory 27"],
  },
  {
    id: 10,
    name: "სამზარეულოს ტექნიკა",
    subcategories: ["subcategory 28", "subcategory 29", "subcategory 30"],
  },
  {
    id: 11,
    name: "ინტერიერი და ავეჯი",
    subcategories: ["subcategory 31", "subcategory 32", "subcategory 33"],
  },
  {
    id: 12,
    name: "სამშენებლო მასალები",
    subcategories: ["subcategory 34", "subcategory 35", "subcategory 36"],
  },
  {
    id: 13,
    name: "ავტომობილების განყოფილება",
    subcategories: ["subcategory 37", "subcategory 38", "subcategory 39"],
  },
];

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
