import React from 'react'
import { useEffect, useState } from 'react';
import { Overlay } from "../../components/MobileMenu/Overlay/Overlay";
import { SBurgerMenuIcon, SSearchInputHamburger } from './SearchInputHamburger.styled';
import { AnimatePresence } from 'framer-motion';
import { SearchInput } from '../SearchInput/SearchInput';
import { MobileMenu } from '../MobileMenu';

export const SearchInputHamburger = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMobileMenuClick = () => {
    setIsClicked(!isClicked);
  };

  const autoCloseMobileMenu = () => {
    if (window.innerWidth > 1024 && isClicked) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", autoCloseMobileMenu);

    return () => {
      window.removeEventListener("resize", autoCloseMobileMenu);
    };
  }, [isClicked]);
  return (
    <SSearchInputHamburger>
        <SBurgerMenuIcon
          onClick={handleMobileMenuClick}
          width={40}
          src="assets/svg/burgerMenu.svg"
          alt="menu"
        />
        <SearchInput />
        <AnimatePresence>
          {isClicked && (
            <>
              <Overlay
                isClicked={isClicked}
                handleMobileMenuClick={handleMobileMenuClick}
              />
              <MobileMenu handleMobileMenuClick={handleMobileMenuClick} />
            </>
          )}
        </AnimatePresence>
      </SSearchInputHamburger>
  )
}
