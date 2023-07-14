import React from "react";
import {
  SSideBarCategories,
  SSideBarCategoriesList,
  SSidebarContainer,
} from "./Sidebar.styled";

const categoriesListItems = [
  {
    name: "კომპიუტერული ტექნიკა",
    subcategories: ["subcategory 1", "subcategory 2", "subcategory 3"],
  },
  {
    name: "მსხვილი საყოფაცხოვრებო ტექნიკა",
    subcategories: ["subcategory 4", "subcategory 5", "subcategory 6"],
  },
  {
    name: "წვრილი საყოფაცხოვრებო ტექნიკა",
    subcategories: ["subcategory 7", "subcategory 8", "subcategory 9"],
  },
  {
    name: "ხელსაწყო ინსტრუმენტები",
    subcategories: ["subcategory 10", "subcategory 11", "subcategory 12"],
  },
  {
    name: "მობილური ტელეფონები",

    subcategories: ["subcategory 13", "subcategory 14", "subcategory 15"],
  },
  {
    name: "თავის მოვლის საშუალებები",
    subcategories: ["subcategory 16", "subcategory 17", "subcategory 18"],
  },
  {
    name: "სპორტი და გართობა",
    subcategories: ["subcategory 19", "subcategory 20", "subcategory 21"],
  },
  {
    name: "გათბობა და გაგრილება",
    subcategories: ["subcategory 22", "subcategory 23", "subcategory 24"],
  },
  {
    name: "საბავშვო ინვენტარი",
    subcategories: ["subcategory 25", "subcategory 26", "subcategory 27"],
  },
  {
    name: "სამზარეულოს ტექნიკა",
    subcategories: ["subcategory 28", "subcategory 29", "subcategory 30"],
  },
  {
    name: "ინტერიერი და ავეჯი",
    subcategories: ["subcategory 31", "subcategory 32", "subcategory 33"],
  },
  {
    name: "სამშენებლო მასალები",
    subcategories: ["subcategory 34", "subcategory 35", "subcategory 36"],
  },
  {
    name: "ავტომობილების განყოფილება",
    subcategories: ["subcategory 37", "subcategory 38", "subcategory 39"],
  },
];

console.log(categoriesListItems)

export const Sidebar = () => {
  return (
    <SSidebarContainer>
      <SSideBarCategories>
        {categoriesListItems.map((item, index) => {
          return (
            <SSideBarCategoriesList key={index}>
              <span>{item.name}</span>
              <img src="assets/svg/vectorRight.svg" alt="vectorRight" />
            </SSideBarCategoriesList>
          );
        })}
      </SSideBarCategories>
    </SSidebarContainer>
  );
};
