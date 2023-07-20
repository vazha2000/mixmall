import React from "react";
import { SBurgerMenuIcon, SMainPage, SSearchInputHamburger } from "./MainPage.styled";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { AdSlider } from "../../components/AdSlider";
import { SearchInput } from "../../components/SearchInput";

export const MainPage = () => {
  return (
    <SMainPage>
      <Navbar />
      <SSearchInputHamburger>
        <SBurgerMenuIcon width={40} src="assets/svg/burgerMenu.svg" alt="menu"/>
        <SearchInput />
      </SSearchInputHamburger>
      <div style={{ display: "flex", marginTop: "30px"}}>
        <Sidebar />
        <AdSlider />
      </div>
    </SMainPage>
  );
};
