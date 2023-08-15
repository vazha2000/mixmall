import React from "react";
import {
  SMainPage,
  SSidebarAndSlider,
} from "./MainPage.styled";
import { Sidebar } from "../../components/Sidebar";
import { AdSlider } from "../../components/AdSlider";
import { BrowseByCategory } from "../../components/BrowseByCategory";
import { SaleOfMonth } from "../../components/SaleOfMonth";
import { BestSellingProducts } from "../../components/BestSellingProducts"
import { SearchInputHamburger } from "../../components/SearchInputHamburger";
import { GridSubcategories } from "../../components/GridSubcategories";

export const MainPage = () => {
  
  return (
    <SMainPage>
      <SearchInputHamburger />
      <SSidebarAndSlider>
        <Sidebar />
        <AdSlider />
      </SSidebarAndSlider>
      {/* <BrowseByCategory /> */}
      <SaleOfMonth />
      <GridSubcategories />
      <BestSellingProducts />
    </SMainPage>
  );
};
