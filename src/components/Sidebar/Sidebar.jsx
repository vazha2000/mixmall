import React from "react";
import {
  SSideBarCategories,
  SSideBarCategoriesList,
  SSidebarContainer,
} from "./Sidebar.styled";

const categoriesListItems = [
  "კომპიუტერული ტექნიკა",
  "მსხვილი საყოფაცხოვრებო ტექნიკა",
  "წვრილი საყოფაცხოვრებო ტექნიკა",
  "ხელსაწყო ინსტრუმენტები",
  "მობილური ტელეფონები",
  "თავის მოვლის საშუალებები",
  "სპორტი და გართობა",
  "გათბობა და გაგრილება",
  "საბავშვო ინვენტარი",
  "სამზარეულოს ტექნიკა",
  "ინტერიერი და ავეჯი",
  "სამშენებლო მასალები",
  "ავტომობილების განყოფილება",
];
export const Sidebar = () => {
  return (
    <SSidebarContainer>
      <SSideBarCategories>
        {categoriesListItems.map((item, index) => {
          return (
            <SSideBarCategoriesList key={index}>
              <span>{item}</span>
              <img src="assets/svg/vectorRight.svg" alt="vectorRight" />
            </SSideBarCategoriesList>
          );
        })}
      </SSideBarCategories>
    </SSidebarContainer>
  );
};
