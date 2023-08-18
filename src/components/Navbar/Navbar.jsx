import React, { useContext, useState } from "react";
import {
  SCartIcon,
  SCartIconContainer,
  SCartQuantity,
  SLogo,
  SNavActions,
  SNavContactContainer,
  SNavContactIconContainer,
  SNavInputContainer,
  SNavMenu,
  SNavMenuCategories,
  SNavMenuCategoriesWrapper,
  SNavMenuDiscount,
  SNavMenuItems,
  SNavMenuItemsContainer,
  SNavSidebarWrapper,
  // SNavItem,
  // SNavMenu,
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
import { SSubcategoriesSidebarWrapper } from "../../views/SubCategories/Subcategories.styled";
import { Sidebar } from "../Sidebar";

export const Navbar = () => {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isCategoriesActive, setIsCategoriesActive] = useState(false);
  const [menuItemsHover, setMenuItemsHover] = useState({
    main: false,
    onlineInstallment: false,
    contact: false
  });

  const { wishlist } = useContext(WishlistContext);
  const { cart, removeFromCart } = useContext(CheckoutContext);

  return (
    <>
      <SNavbar>
        <Link to="/">
          <SLogo
            src="../assets/images/LogoNoBackground.png"
            alt="logo"
            width={180}
          />
        </Link>

        <SNavActions>
          <SNavInputContainer>
            <SearchInput />
          </SNavInputContainer>
          <SNavContactContainer>
            <SNavContactIconContainer>
              <img src="assets/svg/phone.svg" alt="phone icon" />
            </SNavContactIconContainer>
            <span>+995 579 33 33 11</span>
          </SNavContactContainer>
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
            <SCartIconContainer
              onClick={() => setIsCartClicked(!isCartClicked)}
            >
              <SCartIcon src="../assets/svg/cart.svg" alt="cart icon" />
              <SCartQuantity>{cart.length}</SCartQuantity>
            </SCartIconContainer>
          </SWishlistCartContainer>
        </SNavActions>
        <AnimatePresence>
          {isCartClicked && (
            <CartInfo
              isCartClicked={isCartClicked}
              setIsCartClicked={setIsCartClicked}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        </AnimatePresence>
      </SNavbar>
      <SNavMenu>
        <SNavMenuCategoriesWrapper
          onMouseEnter={() => setIsCategoriesActive(true)}
          onMouseLeave={() => setIsCategoriesActive(false)}
        >
          <SNavMenuCategories>
            <span>კატეგორიები</span>
          </SNavMenuCategories>
          {isCategoriesActive && (
            <SNavSidebarWrapper>
              <Sidebar width={"400px"} />
            </SNavSidebarWrapper>
          )}
        </SNavMenuCategoriesWrapper>

        <SNavMenuItemsContainer
          isMenuHovered={menuItemsHover.main}
          onMouseEnter={() => setMenuItemsHover((prev) => ({
            ...prev, main: true
          }))}
          onMouseLeave={() => setMenuItemsHover((prev) => ({
            ...prev, main: false
          }))}
        >
          <SNavMenuItems>მთავარი</SNavMenuItems>
        </SNavMenuItemsContainer>
        <SNavMenuItemsContainer
          isMenuHovered={menuItemsHover.onlineInstallment}
          onMouseEnter={() => setMenuItemsHover((prev) => ({
            ...prev, onlineInstallment: true
          }))}
          onMouseLeave={() => setMenuItemsHover((prev) => ({
            ...prev, onlineInstallment: false
          }))}
          >
          <SNavMenuItems>ONLINE განვადება</SNavMenuItems>
        </SNavMenuItemsContainer>
        <SNavMenuItemsContainer
         isMenuHovered={menuItemsHover.contact}
         onMouseEnter={() => setMenuItemsHover((prev) => ({
           ...prev, contact: true
         }))}
         onMouseLeave={() => setMenuItemsHover((prev) => ({
           ...prev, contact: false
         }))}
          >
          <SNavMenuItems>კონტაქტი</SNavMenuItems>
        </SNavMenuItemsContainer>
        <SNavMenuDiscount></SNavMenuDiscount>
      </SNavMenu>
    </>
  );
};
