import React from "react";
import {
  SAddToCardButton,
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
import { AnimatePresence } from "framer-motion";

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
        <SCardImage src={productImage} alt={alt} />
        <SCardWishlist src="../assets/svg/wishlist.svg" alt="favorites icon" />
        {isDiscount && <SCardSaleDiscount>{discountRate}</SCardSaleDiscount>}
        <AnimatePresence>
          <SAddToCardButton initial={{y: "100%", opacity: 1}} animate={isHovered ? {y: 0, opacity: 1, transition: {stiffness: 0, duration: 0.2}} : {y: "100%", opacity: 1, transition: {stiffness: 0, duration: 0.2}}}>
            <span>კალათაში დამატება</span>
          </SAddToCardButton>
        </AnimatePresence>
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
