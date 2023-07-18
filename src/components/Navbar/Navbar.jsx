import React from "react";
import {
  SBurgerMenuIcon,
  SCartIcon,
  SLogo,
  SNavActions,
  SNavInputContainer,
  SNavItem,
  SNavMenu,
  SNavbar,
  SWishlistCartContainer,
  SWishlistIcon,
} from "./Navbar.styled";
import { SearchInput } from "../SearchInput";

export const Navbar = () => {
  return (
    <SNavbar>
      <SLogo src="assets/images/LogoNoBackground.png" alt="logo" width={180}/>
      <SNavMenu>
        <SNavItem>მთავარი</SNavItem>
        <SNavItem>ONLINE განვადება</SNavItem>
        <SNavItem>კონტაქტი</SNavItem>
      </SNavMenu>
      <SNavActions>
        <SNavInputContainer>
          <SearchInput />
        </SNavInputContainer>
        <SWishlistCartContainer>
          <SWishlistIcon src="assets/svg/wishlist.svg" alt="wishlist icon"/>
          <SCartIcon src="assets/svg/cart.svg" alt="cart icon"/>
        </SWishlistCartContainer>
      </SNavActions>
      {/* <SBurgerMenuIcon src="assets/svg/burgerMenu.svg" alt="menu"/> */}
    </SNavbar>
  );
};
