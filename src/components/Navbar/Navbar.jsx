import React from "react";
import {
  SCartIcon,
  SLogo,
  SNavActions,
  SNavInputContainer,
  SNavItem,
  SNavMenu,
  SNavbar,
  SWishlistCartContainer,
  SWishlistContainer,
  SWishlistIcon,
  SWishlistQuantity,
} from "./Navbar.styled";
import { SearchInput } from "../SearchInput";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <SNavbar>
      <Link to="/">
        <SLogo src="../assets/images/LogoNoBackground.png" alt="logo" width={180}/>
      </Link>
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
          <SWishlistContainer>
            <SWishlistIcon src="../assets/svg/wishlist.svg" alt="wishlist icon"/>
            <SWishlistQuantity>9+</SWishlistQuantity>
          </SWishlistContainer>
          <SCartIcon src="../assets/svg/cart.svg" alt="cart icon"/>
        </SWishlistCartContainer>
      </SNavActions>
    </SNavbar>
  );
};
