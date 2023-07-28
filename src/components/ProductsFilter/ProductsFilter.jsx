import React from "react";
import {
  SPriceFilter,
  SPriceFilterButton,
  SPriceFilterInput,
  SPriceFilterInputRangeValue,
  SPriceFilterInputRangeValueContainer,
  SPriceFilterInputsContainer,
  SPriceFilterRange,
  SProductsFilter,
  SProductsFilterHeaderWrapper,
} from "./ProductsFilter.styled";

export const ProductsFilter = () => {
  return (
    <SProductsFilter>
      <SProductsFilterHeaderWrapper>
        <h2>გაფილტრე</h2>
      </SProductsFilterHeaderWrapper>
      <SPriceFilterInputRangeValueContainer>
        <SPriceFilterInputRangeValue>100 - 200</SPriceFilterInputRangeValue>
      </SPriceFilterInputRangeValueContainer>
      <SPriceFilter>
        <SPriceFilterRange type="range" />
        <SPriceFilterInputsContainer>
          <SPriceFilterInput type="text" />
          <SPriceFilterInput type="text" />
          <SPriceFilterButton whileTap={{ scale: 0.98 }}>
            გაფილტრე
          </SPriceFilterButton>
        </SPriceFilterInputsContainer>
      </SPriceFilter>
    </SProductsFilter>
  );
};
