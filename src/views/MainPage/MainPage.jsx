import React, { useEffect, useState } from "react";
import { SBurgerMenuIcon, SMainPage, SSearchInputHamburger, SSidebarAndSlider } from "./MainPage.styled";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { AdSlider } from "../../components/AdSlider";
import { SearchInput } from "../../components/SearchInput";
import { MobileMenu } from "../../components/MobileMenu";
import { AnimatePresence } from "framer-motion";
import { Overlay } from "../../components/MobileMenu/Overlay/Overlay";
import { BrowseByCategory } from "../../components/BrowseByCategory";

export const MainPage = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleMobileMenuClick = () => {
    setIsClicked(!isClicked)
  }

  const autoCloseMobileMenu = () => {
    if(window.innerWidth > 1024 && isClicked) {
      setIsClicked(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", autoCloseMobileMenu);

    return () => {
      window.removeEventListener("resize", autoCloseMobileMenu)
    }
  }, [isClicked])

  return (
    <SMainPage>
      <Navbar />
      <SSearchInputHamburger>
        <SBurgerMenuIcon onClick={handleMobileMenuClick}  width={40} src="assets/svg/burgerMenu.svg" alt="menu"/>
        <SearchInput />
        <AnimatePresence>
          {isClicked && 
          (<>
          <Overlay isClicked={isClicked} handleMobileMenuClick={handleMobileMenuClick}/>
          <MobileMenu  handleMobileMenuClick={handleMobileMenuClick}/>
          </>)
          }
        </AnimatePresence>
      </SSearchInputHamburger>
      <SSidebarAndSlider>
        <Sidebar />
        <AdSlider />
      </SSidebarAndSlider>
      <BrowseByCategory />
    </SMainPage>
  );
};
