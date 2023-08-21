import React, { useState } from 'react'
import { SCloseProductImages, SNextArrow, SPrevArrow, SProductImage, SProductImageContainer, SProductImages } from './ProductImages.styled'

export const ProductImages = ({productImage, currentIndex, setIsClicked}) => {
  const [imageIndex, setImageIndex] = useState(currentIndex);

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
        <SPrevArrow onClick={handlePrev}>
          <img src="assets/svg/arrowRight.svg" alt="left arrow" />
        </SPrevArrow>
        <SNextArrow onClick={handleNext}>
          <img src="assets/svg/arrowRight.svg" alt="right arrow" />
        </SNextArrow>
      </SProductImageContainer>
      <SCloseProductImages onClick={() => setIsClicked(null)}>
        <img src="assets/svg/close.svg" alt="close icon" />
      </SCloseProductImages>
    </SProductImages>
  )
}
