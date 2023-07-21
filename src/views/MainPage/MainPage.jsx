import React, { useState } from "react";
import { SBurgerMenuIcon, SMainPage, SSearchInputHamburger } from "./MainPage.styled";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { AdSlider } from "../../components/AdSlider";
import { SearchInput } from "../../components/SearchInput";
import { MobileMenu } from "../../components/MobileMenu";

export const MainPage = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleMobileMenuClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <SMainPage>
      <Navbar />
      <SSearchInputHamburger>
        <SBurgerMenuIcon onClick={handleMobileMenuClick}  width={40} src="assets/svg/burgerMenu.svg" alt="menu"/>
        <SearchInput />
        {isClicked && <MobileMenu handleMobileMenuClick={handleMobileMenuClick}/>}
      </SSearchInputHamburger>
      <div style={{ display: "flex", marginTop: "30px"}}>
        <Sidebar />
        <AdSlider />
      </div>
    </SMainPage>
  );
};
