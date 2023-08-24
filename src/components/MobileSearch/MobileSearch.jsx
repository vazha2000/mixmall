import React, { useEffect } from "react";
import {
  SMobileSearch,
  SMobileSearchClose,
  SmobileSearchHeaderContainer,
} from "./MobileSearch.styled";
import { SearchInput } from "../SearchInput";

export const MobileSearch = ({
  isMobileSearchClicked,
  setIsMobileSearchClicked,
  windowWidth,
}) => {
  useEffect(() => {
    if (windowWidth > 576) {
      setIsMobileSearchClicked(false);
    }
  }, [windowWidth, setIsMobileSearchClicked]);
  return (
    <SMobileSearch
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.4, delay: 0.1 }}
    >
      <SMobileSearchClose>
        <img src="assets/svg/close.svg" alt="close" width={30} onClick={() => setIsMobileSearchClicked(false)}/>
      </SMobileSearchClose>
      <SmobileSearchHeaderContainer>
        <SearchInput
          isMobileSearchClicked={isMobileSearchClicked}
          setIsMobileSearchClicked={setIsMobileSearchClicked}
          windowWidth={windowWidth}
          height={"30%"}
        />
      </SmobileSearchHeaderContainer>
    </SMobileSearch>
  );
};
