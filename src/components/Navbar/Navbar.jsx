import React from "react";
import {
  SBurgerMenuIcon,
  SCartIcon,
  SLogo,
  SNavActions,
  SNavInput,
  SNavInputContainer,
  SNavItem,
  SNavMenu,
  SNavbar,
  SSearchIcon,
  SWishlistCartContainer,
  SWishlistIcon,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <SNavbar>
      <SLogo src="public/assets/images/LogoNoBackground.png" alt="logo" width={180}/>
      <SNavMenu>
        <SNavItem>მთავარი</SNavItem>
        <SNavItem>Online განვადება</SNavItem>
        <SNavItem>კონტაქტი</SNavItem>
      </SNavMenu>
      <SNavActions>
        <SNavInputContainer>
          <SNavInput placeholder="რას ეძებ?" />
          <SSearchIcon src="assets/svg/search.svg" alt="search icon" />
        </SNavInputContainer>
        <SWishlistCartContainer>
          <SWishlistIcon src="assets/svg/wishlist.svg" alt="wishlist icon"/>
          <SCartIcon src="assets/svg/cart.svg" alt="cart icon"/>
        </SWishlistCartContainer>
      </SNavActions>
      <SBurgerMenuIcon src="assets/svg/burgerMenu.svg" alt="menu"/>
    </SNavbar>
  );
};
