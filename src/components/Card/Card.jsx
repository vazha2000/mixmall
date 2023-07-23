import React from "react";
import {
  SCard,
  SCardImage,
  SCardImageContainer,
  SCardInfo,
  SCardOldPrice,
  SCardPrice,
  SCardPriceContainer,
  SCardProductName,
  SCardSaleDiscount,
  SCardWishlist,
} from "./Card.styled";

export const Card = (props) => {
  const {
    handleHover,
    isHovered,
    productImage,
    productName,
    currentPrice,
    oldPrice,
    alt,
    discountRate,
    isDiscount,
  } = props;

  return (
    <SCard
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      isHovered={isHovered}
    >
      <SCardImageContainer>
        <SCardImage src={productImage} alt={alt} isHovered={isHovered} />
        <SCardWishlist src="assets/svg/wishlist.svg" alt="favorites icon" />
        {isDiscount && <SCardSaleDiscount>{discountRate}</SCardSaleDiscount>}
      </SCardImageContainer>
      <SCardInfo>
        <SCardProductName>{productName}</SCardProductName>
        <SCardPriceContainer>
          <SCardPrice>{currentPrice}</SCardPrice>
          {isDiscount && <SCardOldPrice>{oldPrice}</SCardOldPrice>}
        </SCardPriceContainer>
      </SCardInfo>
    </SCard>
  );
};
