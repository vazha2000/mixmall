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

export const Card = ({ productImage, productName, currentPrice, oldPrice, alt, discountRate, isDiscount }) => {
  return (
    <SCard>
      <SCardImageContainer>
        <SCardImage src={productImage} alt="" />
        <SCardWishlist src="assets/svg/wishlist.svg" alt="" />
        {isDiscount && <SCardSaleDiscount>{discountRate}</SCardSaleDiscount> }
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
