import React, { useState } from 'react'
import { SSellingProducts } from './SellingProducts.styled'
import { bestSellingProducts } from '../../data/data'
import { Card } from '../../components/Card'

export const SellingProducts = () => {

  const [hoverStates, setHoverStates] = useState(
    bestSellingProducts.map(() => false)
  );

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <SSellingProducts>
      {bestSellingProducts.map((item, index) => (
        <Card 
        key={index}
          index={index}
          productImage={item.productImage}
          discountRate={item.discountRate}
          isDiscount={item.isDiscount}
          productName={item.productName}
          currentPrice={item.currentPrice}
          oldPrice={item.oldPrice}
          alt={item.alt}
          handleHover={() => handleHover(index)}
          isHovered={hoverStates[index]}
          path={`/${item.categoryName}/${item.subcategoryName}/${item.productName}`}
          id={item.id}
        />
      ))}
    </SSellingProducts>
  )
}
