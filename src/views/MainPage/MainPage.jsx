import React from "react";
import {
  SAdSliderContainer,
  SMainPage,
} from "./MainPage.styled";
import { AdSlider } from "../../components/AdSlider";
import { BrowseByCategory } from "../../components/BrowseByCategory";
import { SaleOfMonth } from "../../components/SaleOfMonth";
import { BestSellingProducts } from "../../components/BestSellingProducts"
import { SearchInputHamburger } from "../../components/SearchInputHamburger";
import { GridSubcategories } from "../../components/GridSubcategories";
import { Brands } from "../../components/Brands";

export const MainPage = () => {
  
  return (
    <SMainPage>
      <SearchInputHamburger />
      <SAdSliderContainer>
        <AdSlider />
      </SAdSliderContainer>
      {/* <BrowseByCategory /> */}
      <SaleOfMonth />
      <GridSubcategories />
      <BestSellingProducts />
      <Brands />
    </SMainPage>
  );
};
