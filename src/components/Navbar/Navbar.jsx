import React from "react";
import {
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
      <SLogo>MixMall</SLogo>
      <SNavMenu>
        <SNavItem>მთავარი</SNavItem>
        <SNavItem>კონტაქტი</SNavItem>
        <SNavItem>შესახებ</SNavItem>
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
    </SNavbar>
  );
};
