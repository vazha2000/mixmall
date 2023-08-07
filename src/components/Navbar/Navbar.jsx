import React, { useContext, useState } from "react";
import {
  SCartIcon,
  SCartIconContainer,
  SCartQuantity,
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
import { WishlistContext } from "../../context/WishlistContext";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { CheckoutContext } from "../../context/CheckoutContext";
import { CartInfo } from "../CartInfo";
import { AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  const { wishlist } = useContext(WishlistContext);
  const { cart } = useContext(CheckoutContext);

  return (
    <SNavbar>
      <Link to="/">
        <SLogo
          src="../assets/images/LogoNoBackground.png"
          alt="logo"
          width={180}
        />
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
          <SStyledLink to="/wishlist">
            <SWishlistContainer>
              <SWishlistIcon
                src="../assets/svg/wishlist.svg"
                alt="wishlist icon"
              />
              <SWishlistQuantity>{wishlist.length}</SWishlistQuantity>
            </SWishlistContainer>
          </SStyledLink>
          <SCartIconContainer>
            <SCartIcon
              onClick={() => setIsCartClicked(!isCartClicked)}
              src="../assets/svg/cart.svg"
              alt="cart icon"
            />
            <SCartQuantity>{cart.length}</SCartQuantity>
            <AnimatePresence>
              {isCartClicked && <CartInfo cart={cart} />}
            </AnimatePresence>
          </SCartIconContainer>
        </SWishlistCartContainer>
      </SNavActions>
    </SNavbar>
  );
};
