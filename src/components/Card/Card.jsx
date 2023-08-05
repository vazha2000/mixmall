import React, { useContext, useEffect, useState } from "react";
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
  SCenteredContainer,
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
    path,
    subcategoryPath,
    onClick,
    id
  } = props;

  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const [isInWishlist, setIsInWishlist] = useState(false); 

  const [showWishlistPopup, setShowWishlistPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);

  
  useEffect(() => {
    setIsInWishlist(wishlist.some((item) => item.id === id));
  }, [wishlist, id]);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist({ id });
      setIsInWishlist(false);
      return;
    }
    addToWishlist({
      productName,
      currentPrice,
      oldPrice,
      productImage,
      discountRate,
      isDiscount,
      subcategoryPath,
      path,
      id
    });
    setIsInWishlist(true);
    setShowWishlistPopup(true);
    setTimeout(() => {
      setShowWishlistPopup(false);
    }, 1500);
  };
  return (
    <SCard
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      isHovered={isHovered}
      width={width}
    >
      <AnimatePresence>
        {showWishlistPopup && (
          <SCenteredContainer>
            <SProductAddedToWishlist
              initial={{ y: 0 }}
              animate={{ y: 30 }}
              exit={{ y: -40, opacity: 0, transition: { duration: 0.3 } }}
            >
              პროდუქტი {productName} დაემატა სურვილების სიას
            </SProductAddedToWishlist>
          </SCenteredContainer>
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
        {showRemovePopup && (
          <SCenteredContainer>
            <SProductAddedToWishlist
              initial={{ y: 0 }}
              animate={{ y: 30 }}
              exit={{ y: -40, opacity: 0, transition: { duration: 0.3 } }}
            >
              პროდუქტი {productName} წაიშალა სურვილების სიიდან
            </SProductAddedToWishlist>
          </SCenteredContainer>
        )}
      </AnimatePresence> */}
      <SCardImageContainer onClick={onClick}>
        <SStyledLink to={path} center="true">
          <SCardImage src={productImage} alt={alt}/>
        </SStyledLink>
        <SCardWishlist
          src="../assets/svg/wishlist.svg"
          alt="favorites icon"
          isInWishlist={isInWishlist}
          onClick={handleWishlistClick}
        />
        {isDiscount && <SCardSaleDiscount>{discountRate}</SCardSaleDiscount>}
        <AnimatePresence>
          <SAddToCardButton
            initial={{ y: "100%", opacity: 1 }}
            animate={
              isHovered
                ? {
                    y: 0,
                    opacity: 1,
                    transition: { stiffness: 0, duration: 0.2 },
                  }
                : {
                    y: "100%",
                    opacity: 1,
                    transition: { stiffness: 0, duration: 0.2 },
                  }
            }
          >
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
