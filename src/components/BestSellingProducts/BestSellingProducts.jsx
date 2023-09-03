import React, { useState } from 'react'
import { SBestSellingProducts, SBestSellingProductsButton, SBestSellingProductsButtonWrapper, SBestSellingProductsHeader, SBestSellingProductsItems, SBestSellingProductsLabel, SBestSellingProductsLabelText } from './BestSellingProducts.styled'
import { bestSellingProducts } from '../../data/data'
import { Card } from '../Card'

export const BestSellingProducts = () => {

  const [hoverStates, setHoverStates] = useState(bestSellingProducts.map(() => false));

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
        <SBestSellingProductsLabelText>საუკეთესოდ გაყიდვადი პროდუქცია</SBestSellingProductsLabelText>
      </SBestSellingProductsLabel>
      <SBestSellingProductsItems>
      {bestSellingProducts.map((item, index) => {
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
          path={`${item.categoryName}/${item.subcategoryName}/${item.productName}`}
        />
        })}
      </SBestSellingProductsItems>
      <SBestSellingProductsButtonWrapper>
      <SBestSellingProductsButton>ყველას ნახვა</SBestSellingProductsButton>

      </SBestSellingProductsButtonWrapper>
    </SBestSellingProducts>
  )
}
