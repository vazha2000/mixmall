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
  return (
    <SCard
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      isHovered={isHovered}
      width={width}
    >
      <SCardContentWrapper isHovered={isHovered}>
        <SStyledLink to={path}>
          <SCardImageContainer>
            <SCardImageWrapper>
              <SCardImage src={productImage} alt="" />
            </SCardImageWrapper>
          </SCardImageContainer>
        </SStyledLink>

        <SCardInfo>
          <SStyledLink to={path}>
            <SCardProductName>{productName}</SCardProductName>
          </SStyledLink>
        </SCardInfo>
        <SCardPriceContainer isHovered={isHovered}>
          {isDiscount && (
            <SCardOldPriceWrapper>
              <SCardOldPrice>{oldPrice}.</SCardOldPrice>
              <hr />
              <div>
                <img src="assets/svg/lari.svg" alt="lari icon" />
              </div>
            </SCardOldPriceWrapper>
          )}
          <SCartPriceWrapper>
            <SCardPrice>{currentPrice}.</SCardPrice>
            <div>
              <img src="assets/svg/lari.svg" alt="lari icon" />
            </div>
          </SCartPriceWrapper>
        </SCardPriceContainer>
        <SAddToCardButton isInCart={isInCart} onClick={handleCartClick}>
          {isInCart ? <span>წაშლა</span> : <span>დამატება</span>}
        </SAddToCardButton>
      </SCardContentWrapper>
      <SCardWishlist
        isInWishlist={isInWishlist}
        onClick={handleWishlistClick}
        initial={{ x: 100 }}
        animate={isHovered ? { x: 0 } : { x: 100 }}
        transition={{ duration: 0.1 }}
      >
        <SWishlistIcon
          isInWishlist={isInWishlist}
          src="../assets/svg/wishlist.svg"
          alt="wishlist icon"
        />
      </SCardWishlist>
    </SCard>
    // <SCard
    //   onMouseEnter={handleHover}
    //   onMouseLeave={handleHover}
    //   isHovered={isHovered}
    //   width={width}
    // >
    //   <NotificationPopup
    //     showWishlistPopup={showWishlistPopup}
    //     showWishlistRemovePopup={showWishlistRemovePopup}
    //     showCartPopup={showCartPopup}
    //     showCartRemovePopup={showCartRemovePopup}
    //     productName={productName}
    //   />

    //   <SCardImageContainer>
    //     <SStyledLink to={path} center="true">
    //       <SCardImage src={productImage} alt={alt} />
    //     </SStyledLink>
    //     <SCardWishlist
    //       src="../assets/svg/wishlist.svg"
    //       alt="favorites icon"
    //       isInWishlist={isInWishlist}
    //       onClick={handleWishlistClick}
    //     />
    //     {isDiscount && <SCardSaleDiscount>{discountRate}</SCardSaleDiscount>}
    //     <AnimatePresence>
    //       <SAddToCardButton
    //         onClick={handleCartClick}
    //         initial={{ y: "100%", opacity: 1 }}
    //         animate={
    //           isHovered
    //             ? {
    //                 y: 0,
    //                 opacity: 1,
    //                 transition: { stiffness: 0, duration: 0.2 },
    //               }
    //             : {
    //                 y: "100%",
    //                 opacity: 1,
    //                 transition: { stiffness: 0, duration: 0.2 },
    //               }
    //         }
    //       >
    //         {isInCart ? (
    //           <span>კალათიდან წაშლა</span>
    //         ) : (
    //           <span>კალათაში დამატება</span>
    //         )}
    //       </SAddToCardButton>
    //     </AnimatePresence>
    //   </SCardImageContainer>
    //   <SCardInfo>
    //     <SStyledLink to={path}>
    //       <SCardProductName>{productName}</SCardProductName>
    //     </SStyledLink>
    //     <SCardPriceContainer>
    //       <SCardPrice>{currentPrice}</SCardPrice>
    //       {isDiscount && <SCardOldPrice>{oldPrice}</SCardOldPrice>}
    //     </SCardPriceContainer>
    //   </SCardInfo>
    // </SCard>
  );
};
