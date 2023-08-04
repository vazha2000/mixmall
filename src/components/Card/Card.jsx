import React, { useContext } from "react";
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
  SProductAddedToWishlist,
} from "./Card.styled";
import { AnimatePresence } from "framer-motion";
import { WishlistContext } from "../../context/WishlistContext";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";

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
    width,
    index,
    path
  } = props;
  
  const {wishlist, addToWishlist} = useContext(WishlistContext)

  const isProductInWishlist = wishlist.includes(productName);

  const handleWishlistClick = () => {
    if (isProductInWishlist) {
      console.log("Product is already in the wishlist!");
    } else {
      addToWishlist(productName);
    }
  };
  return (
    <SCard
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      isHovered={isHovered}
      width={width}
    >
      {isProductInWishlist && 
      <AnimatePresence>
        <SProductAddedToWishlist>პროდუქტი {productName} დაემატა სურვილების სიას</SProductAddedToWishlist>
      </AnimatePresence>
      }
      <SCardImageContainer>
        <SStyledLink to={path}>
          <SCardImage src={productImage} alt={alt} />
        </SStyledLink>
        <SCardWishlist src="../assets/svg/wishlist.svg" alt="favorites icon" onClick={handleWishlistClick}/>
        {isDiscount && <SCardSaleDiscount>{discountRate}</SCardSaleDiscount>}
        <AnimatePresence>
          <SAddToCardButton initial={{y: "100%", opacity: 1}} animate={isHovered ? {y: 0, opacity: 1, transition: {stiffness: 0, duration: 0.2}} : {y: "100%", opacity: 1, transition: {stiffness: 0, duration: 0.2}}}>
            <span>კალათაში დამატება</span>
          </SAddToCardButton>
        </AnimatePresence>
      </SCardImageContainer>
      <SCardInfo>
        <SStyledLink to={path}>
          <SCardProductName>{productName}</SCardProductName>
        </SStyledLink>
        <SCardPriceContainer>
          <SCardPrice>{currentPrice}</SCardPrice>
          {isDiscount && <SCardOldPrice>{oldPrice}</SCardOldPrice>}
        </SCardPriceContainer>
      </SCardInfo>
    </SCard>
  );
};
