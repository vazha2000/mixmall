import React from "react";
import {
  SDropDownMenu,
  SMenuGridContainer,
  SMenuItems,
  SMenuItemsDot,
  SStyledLink,
} from "./DropdownMenu.styled";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const DropdownMenu = ({ item }) => {
  const menuRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (menuRef.current) {
        const { right } = menuRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        setIsOverflowing(right > windowWidth);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SDropDownMenu
      initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 1 }}
      animate={{
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        transition: { duration: 0.3, delay: 0.2 },
      }}
      exit={{
        clipPath: "inset(0% 100% 0% 0%)",
        opacity: 1,
        transition: { delay: 0.1, duration: 0.3 },
      }}
      transition={{ type: "tween", duration: 0.4, delay: 0.1 }}
      ref={menuRef}
    >
      <SMenuGridContainer isOverflowing={isOverflowing}>
        {item.subcategories.map((subcategory, index) => (
          <SStyledLink
            to={`/${item.categoryName}/${subcategory.subcategoryName}`}
            key={index}
          >
            <SMenuItemsDot>
              <img src="assets/svg/dot.svg" />
              <SMenuItems>{subcategory.name}</SMenuItems>
            </SMenuItemsDot>
          </SStyledLink>
        ))}
      </SMenuGridContainer>
    </SDropDownMenu>
  );
};
