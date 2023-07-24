import React from 'react'
import { SBestSellingProducts, SBestSellingProductsLabel, SBestSellingProductsLabelText } from './BestSellingProducts.styled'

export const BestSellingProducts = () => {
  return (
    <SBestSellingProducts>
      <SBestSellingProductsLabel>
        <img src="assets/svg/labelIcon.svg" alt="label icon" />
        <SBestSellingProductsLabelText>ამ თვეში</SBestSellingProductsLabelText>
      </SBestSellingProductsLabel>

    </SBestSellingProducts>
  )
}
