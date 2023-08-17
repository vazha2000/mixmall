import React, { useEffect } from "react";
import {
  SDropDownMenu,
  SDropDownMenuWrapper,
  SMenuGridContainer,
  SMenuItems,
  SMenuItemsDot,
  SStyledLink,
} from "./DropdownMenu.styled";
import { useState } from "react";
import { useRef } from "react";

export const DropdownMenu = ({ item }) => {
  const menuRef = useRef(null);
  const [shouldApplyOverflowY, setShouldApplyOverflowY] = useState(false);

  useEffect(() => {
    if (menuRef.current) {
      const isOverflowing =
        menuRef.current.scrollHeight > menuRef.current.clientHeight;
      setShouldApplyOverflowY(isOverflowing);
    }
  }, []);

  return (
    <SDropDownMenuWrapper>
      <SDropDownMenu
        isOverflowing={shouldApplyOverflowY}
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
        <SMenuGridContainer>
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
    </SDropDownMenuWrapper>
  );
};
