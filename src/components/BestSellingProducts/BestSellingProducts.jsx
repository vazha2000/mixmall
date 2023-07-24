import React, { useState } from 'react'
import { SBestSellingProducts, SBestSellingProductsButton, SBestSellingProductsButtonWrapper, SBestSellingProductsHeader, SBestSellingProductsItems, SBestSellingProductsLabel, SBestSellingProductsLabelText } from './BestSellingProducts.styled'
import { testProducts } from '../../data/data'
import { Card } from '../Card'

export const BestSellingProducts = () => {

  const [hoverStates, setHoverStates] = useState(testProducts.map(() => false));

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates
    })
  }

  return (
    <SBestSellingProducts>
      <SBestSellingProductsLabel>
        <img src="assets/svg/labelIcon.svg" alt="label icon" />
        <SBestSellingProductsLabelText>ამ თვეში</SBestSellingProductsLabelText>
      </SBestSellingProductsLabel>
      <SBestSellingProductsHeader>საუკეთესოდ გაყიდვადი პროდუქცია</SBestSellingProductsHeader>
      <SBestSellingProductsItems>
      {testProducts.map((item, index) => {
          return <Card
          key={index}
          productImage={item.productImage}
          discountRate={item.discountRate}
          isDiscount={item.isDiscount}
          productName={item.productName}
          currentPrice={item.currentPrice}
          oldPrice={item.oldPrice}
          alt={item.alt}
          handleHover={() => handleHover(index)}
          isHovered={hoverStates[index]}
        />
        })}
      </SBestSellingProductsItems>
      <SBestSellingProductsButtonWrapper>
      <SBestSellingProductsButton>ყველას ნახვა</SBestSellingProductsButton>

      </SBestSellingProductsButtonWrapper>
    </SBestSellingProducts>
  )
}
