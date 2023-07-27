import React, { useState } from "react";
import { SSearchIcon, SSearchInput, SSearchInputContainer } from "./SearchInput.styled";

export const SearchInput = () => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }
  return (
    <SSearchInputContainer isFocused={isFocused}>
      <SSearchInput  onFocus={handleFocus} onBlur={handleBlur}/>
      <SSearchIcon src="../assets/svg/search.svg" alt="search icon" />
    </SSearchInputContainer>
  );
};
