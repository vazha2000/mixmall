import React, { useContext, useEffect, useState } from "react";
import {
  SAddToCardButton,
  SCard,
  SCardContentWrapper,
  SCardImage,
  SCardImageContainer,
  SCardImageWrapper,
  SCardInfo,
  SCardOldPrice,
  SCardOldPriceWrapper,
  SCardPrice,
  SCardPriceContainer,
  SCardProductName,
  SCardSaleDiscount,
  SCardWishlist,
  SCartPriceWrapper,
} from "./Card.styled";
import { AnimatePresence } from "framer-motion";
import { WishlistContext } from "../../context/WishlistContext";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { CheckoutContext } from "../../context/CheckoutContext";
import { NotificationPopup } from "../NotificationPopup";
import { SWishlistIcon } from "../Navbar/Navbar.styled";

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
  const { cart, addToCart, removeFromCart } = useContext(CheckoutContext);
  const productQuantity = 1;

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
      productQuantity,
    });
    setIsInCart(true);
    setShowCartPopup(true);
    setTimeout(() => {
      setShowCartPopup(false);
    }, 1500);
  };

  const formatNumber = (number) => {
    const parts = number.toFixed(2).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  const formattedPrice = formatNumber(currentPrice);
  const formattedOldPrice = formatNumber(oldPrice);
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
      {isDiscount && (
        <SCardSaleDiscount
          isHovered={isHovered}
          discountRate={discountRate}
        ></SCardSaleDiscount>
      )}
      <SCardContentWrapper isHovered={isHovered}>
        <SStyledLink to={path}>
          <SCardImageContainer onClick={() => window.scrollTo({top: 0, left: 0})}>
            <SCardImageWrapper>
              <SCardImage src={productImage[0]} alt="image" />
            </SCardImageWrapper>
          </SCardImageContainer>
        </SStyledLink>

        <SCardInfo>
          <SStyledLink to={path}>
            <SCardProductName onClick={() => window.scrollTo({top: 0, left: 0})}>{productName}</SCardProductName>
          </SStyledLink>
        </SCardInfo>
        <SCardPriceContainer isHovered={isHovered}>
          {isDiscount && (
            <SCardOldPriceWrapper>
              <div>
                <img src="assets/svg/lari.svg" alt="lari icon" width={15} />
              </div>
              <SCardOldPrice>{formattedOldPrice}</SCardOldPrice>
              <hr />
            </SCardOldPriceWrapper>
          )}
          <SCartPriceWrapper>
            <div>
              <img src="assets/svg/lari.svg" alt="lari icon" width={15} />
            </div>
            <SCardPrice>{formattedPrice}</SCardPrice>
          </SCartPriceWrapper>
        </SCardPriceContainer>
        <SAddToCardButton isInCart={isInCart} onClick={handleCartClick}>
          {isInCart ? (
            <span>REMOVE</span>
          ) : (
            <span>ADD TO CART</span>
          )}
        </SAddToCardButton>
      </SCardContentWrapper>
      <SCardWishlist
        isInWishlist={isInWishlist}
        onClick={handleWishlistClick}
        isHovered={isHovered}
      >
        <SWishlistIcon
          isInWishlist={isInWishlist}
          src="../assets/svg/wishlist.svg"
          alt="wishlist icon"
        />
      </SCardWishlist>
    </SCard>
  );
};
