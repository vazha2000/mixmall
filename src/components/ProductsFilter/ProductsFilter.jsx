import React from 'react'
import { SPriceFilter, SPriceFilterButton, SPriceFilterInput, SPriceFilterInputsContainer, SPriceFilterRange, SProductsFilter, SProductsFilterHeaderWrapper } from './Products.styled'

export const ProductsFilter = () => {
  return (
    <SProductsFilter>
      <SProductsFilterHeaderWrapper>
        <h2>გაფილტრე</h2>
      </SProductsFilterHeaderWrapper>
      <SPriceFilter>
        <SPriceFilterRange type="range" />
        <SPriceFilterInputsContainer>
          <SPriceFilterInput type='text'/>
          <SPriceFilterInput type='text'/>
          <SPriceFilterButton whileTap={{scale: 0.98}}>გაფილტრე</SPriceFilterButton>

        </SPriceFilterInputsContainer>
      </SPriceFilter>
    </SProductsFilter>
  )
}
