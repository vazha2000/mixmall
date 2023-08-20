import React, { useState } from 'react'
import { SNextArrow, SPrevArrow, SProductImage, SProductImageContainer, SProductImages } from './ProductImages.styled'

export const ProductImages = ({productImage}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % productImage.length);
  };

  const handlePrev = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + productImage.length) % productImage.length);
  };
  
  return (
    <SProductImages>
      <SProductImageContainer>
        <SProductImage src={productImage[imageIndex]}/>
        <SPrevArrow onClick={handlePrev}>-</SPrevArrow>
        <SNextArrow onClick={handleNext}>+</SNextArrow>
      </SProductImageContainer>
    </SProductImages>
  )
}
