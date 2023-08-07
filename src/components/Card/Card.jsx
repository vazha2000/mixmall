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
} from "./Card.styled";
import { AnimatePresence } from "framer-motion";
import { WishlistContext } from "../../context/WishlistContext";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { CheckoutContext } from "../../context/CheckoutContext";
import { NotificationPopup } from "../NotificationPopup";

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
    id,
  } = props;

  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { cart, addToCart, removeFromCart, productQuantity, setProductQuantity } = useContext(CheckoutContext);

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const [showWishlistPopup, setShowWishlistPopup] = useState(false);
  const [showWishlistRemovePopup, setShowWishlistRemovePopup] = useState(false);

  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showCartRemovePopup, setShowCartRemovePopup] = useState(false);

  useEffect(() => {
    setIsInWishlist(wishlist.some((item) => item.id === id));
    setIsInCart(cart.some((item) => item.id === id));
  }, [wishlist, id, cart]);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist({ id });
      setIsInWishlist(false);
      setShowWishlistRemovePopup(true);
      setTimeout(() => {
        setShowWishlistRemovePopup(false);
      }, 1500);
      return;
    }
    addToWishlist({
      productName,
      currentPrice,
      oldPrice,
      productImage,
      discountRate,
      isDiscount,
      path,
      id,
    });
    setIsInWishlist(true);
    setShowWishlistPopup(true);
    setTimeout(() => {
      setShowWishlistPopup(false);
    }, 1500);
  };

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart({ id });
      setIsInCart(false);
      setShowCartRemovePopup(true);
      setTimeout(() => {
        setShowCartRemovePopup(false);
      }, 1500);
      return;
    }
    addToCart({
      productName,
      currentPrice,
      oldPrice,
      productImage,
      discountRate,
      isDiscount,
      path,
      id,
      alt,
      productQuantity
    });
    setIsInCart(true);
    setShowCartPopup(true);
    setTimeout(() => {
      setShowCartPopup(false);
    }, 1500);
  };
  return (
    <SCard
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      isHovered={isHovered}
      width={width}
    >
      <NotificationPopup
        showWishlistPopup={showWishlistPopup}
        showWishlistRemovePopup={showWishlistRemovePopup}
        showCartPopup={showCartPopup}
        showCartRemovePopup={showCartRemovePopup}
        productName={productName}
      />

      <SCardImageContainer>
        <SStyledLink to={path} center="true">
          <SCardImage src={productImage} alt={alt} />
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
            onClick={handleCartClick}
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
            {isInCart ? (
              <span>კალათიდან წაშლა</span>
            ) : (
              <span>კალათაში დამატება</span>
            )}
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
