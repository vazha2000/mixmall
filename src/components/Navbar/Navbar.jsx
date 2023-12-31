import React, { useContext, useEffect, useState } from "react";
import {
  SCartIcon,
  SCartIconContainer,
  SCartQuantity,
  SLogo,
  SNavActions,
  SNavContactContainer,
  SNavContactIconContainer,
  SNavInputContainer,
  SNavInputSearchIcon,
  SNavInputSearchIconContainer,
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
import { MobileMenu } from "../MobileMenu";
import { MobileSearch } from "../MobileSearch/MobileSearch";

export const Navbar = () => {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isCategoriesActive, setIsCategoriesActive] = useState(false);
  const [isCategoriesClicked, setIsCategoriesClicked] = useState(false);
  const [isMobileSearchClicked, setIsMobileSearchClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuItemsHover, setMenuItemsHover] = useState({
    main: false,
    onlineInstallment: false,
    contact: false,
  });

  const { wishlist } = useContext(WishlistContext);
  const { cart, removeFromCart } = useContext(CheckoutContext);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsCategoriesActive(windowWidth < 1024);
  }, [windowWidth]);

  const handleCategoriesClick = () => {
    if (windowWidth < 1024) {
      setIsCategoriesClicked(true);
    }
  };

  return (
    <div>
      <SNavbar>
        <Link to="/">
          <SLogo
            src="../assets/images/LogoNoBackground.png"
            alt="logo"
            width={180}
          />
        </Link>

        <SNavActions>
          {/* <SNavInputContainer>
            <SearchInput />
          </SNavInputContainer> */}
          <SStyledLink to={"tel:+995 555 55 55 55"}>
            <SNavContactContainer>
              <SNavContactIconContainer>
                <img src="assets/svg/phone.svg" alt="phone icon" />
              </SNavContactIconContainer>
              <span>+995 555 55 55 55</span>
            </SNavContactContainer>
          </SStyledLink>

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
          <SNavMenuCategories onClick={handleCategoriesClick}>
            <img src="assets/svg/burgerMenu.svg" alt="burger menu" />
            <span>CATEGORIES</span>
          </SNavMenuCategories>
          {isCategoriesActive && (
            <SNavSidebarWrapper>
              <Sidebar width={"400px"} />
            </SNavSidebarWrapper>
          )}
        </SNavMenuCategoriesWrapper>

        <SNavMenuItemsContainer
          isMenuHovered={menuItemsHover.main}
          onMouseEnter={() =>
            setMenuItemsHover((prev) => ({
              ...prev,
              main: true,
            }))
          }
          onMouseLeave={() =>
            setMenuItemsHover((prev) => ({
              ...prev,
              main: false,
            }))
          }
        >
          <SNavMenuItems>MAIN</SNavMenuItems>
        </SNavMenuItemsContainer>
        <SNavMenuItemsContainer
          isMenuHovered={menuItemsHover.onlineInstallment}
          onMouseEnter={() =>
            setMenuItemsHover((prev) => ({
              ...prev,
              onlineInstallment: true,
            }))
          }
          onMouseLeave={() =>
            setMenuItemsHover((prev) => ({
              ...prev,
              onlineInstallment: false,
            }))
          }
        >
          <SNavMenuItems>INSTALLMENT</SNavMenuItems>
        </SNavMenuItemsContainer>
        <SNavMenuItemsContainer
          isMenuHovered={menuItemsHover.contact}
          onMouseEnter={() =>
            setMenuItemsHover((prev) => ({
              ...prev,
              contact: true,
            }))
          }
          onMouseLeave={() =>
            setMenuItemsHover((prev) => ({
              ...prev,
              contact: false,
            }))
          }
        >
          <SNavMenuItems>CONTACT</SNavMenuItems>
        </SNavMenuItemsContainer>
        <SNavInputContainer>
          <SearchInput />
        </SNavInputContainer>
        <SNavInputSearchIconContainer>
          <SNavInputSearchIcon
            onClick={() => setIsMobileSearchClicked(!isMobileSearchClicked)}
          >
            <img src="assets/svg/search.svg" alt="search icon" />
          </SNavInputSearchIcon>
        </SNavInputSearchIconContainer>
      </SNavMenu>
      <AnimatePresence>
        {isCategoriesClicked && (
          <div>
            <MobileMenu
              isOpen={isCategoriesClicked}
              setIsOpen={setIsCategoriesClicked}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobileSearchClicked && (
          <MobileSearch
            isMobileSearchClicked={isMobileSearchClicked}
            setIsMobileSearchClicked={setIsMobileSearchClicked}
            windowWidth={windowWidth}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
