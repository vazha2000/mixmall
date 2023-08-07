import React, { useContext, useEffect, useState } from "react";
import { ProductDescriptions } from "../../components/ProductDescriptions";
import {
  SAddToFavorites,
  SProductButtonsWrapper,
  SProductBuyNow,
  SProductCurrentQuantity,
  SProductPage,
  SProductPageBigImage,
  SProductPageImages,
  SProductPageMainImage,
  SProductPageOptions,
  SProductPageSmallImage,
  SProductPageSmallImages,
  SProductPrices,
  SProductQuantity,
  SProductQuantityBuyFavorites,
  SProductQuantityMinus,
  SProductQuantityPlus,
} from "./ProductPage.styled";
import { WishlistContext } from "../../context/WishlistContext";
import { useLocation } from "react-router-dom";
import { NotificationPopup } from "../../components/NotificationPopup";
import { CheckoutContext } from "../../context/CheckoutContext";

export const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { cart, addToCart, removeFromCart } = useContext(CheckoutContext);

  const [showWishlistPopup, setShowWishlistPopup] = useState(false);
  const [showWishlistRemovePopup, setShowWishlistRemovePopup] = useState(false);

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showCartRemovePopup, setShowCartRemovePopup] = useState(false);

  useEffect(() => {
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
    setIsInCart(cart.some((item) => item.id === product.id));
  }, [wishlist, product.id, cart]);

  const { pathname } = useLocation();

  const path = pathname;

  const handleWishlistClick = () => {
    const {
      productName,
      currentPrice,
      oldPrice,
      productImage,
      discountRate,
      isDiscount,
      id,
    } = product;
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
    setShowWishlistPopup(true);
    setIsInWishlist(true);
    setTimeout(() => {
      setShowWishlistPopup(false);
    }, 1500);
  };
  const handleIncrement = () => {
    if (quantity < 99) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const inputQuantity = parseInt(e.target.value, 10);
    if (
      e.target.value.trim() === "" ||
      isNaN(inputQuantity) ||
      inputQuantity < 1
    ) {
      setQuantity(0);
    } else if (inputQuantity > 99) {
      setQuantity(99);
    } else {
      setQuantity(inputQuantity);
    }
  };

  const handleCartClick = () => {
    const {
      productName,
      currentPrice,
      oldPrice,
      productImage,
      discountRate,
      isDiscount,
      id,
      alt
    } = product;
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
      alt
    });
    setIsInCart(true);
    setShowCartPopup(true);
    setTimeout(() => {
      setShowCartPopup(false);
    }, 1500);
  };

  return (
    <>
      <SProductPage>
        <NotificationPopup
          showWishlistPopup={showWishlistPopup}
          showWishlistRemovePopup={showWishlistRemovePopup}
          showCartPopup={showCartPopup}
          showCartRemovePopup={showCartRemovePopup}
          productName={product.productName}
        />
        <SProductPageImages>
          <SProductPageSmallImages>
            <SProductPageSmallImage src="assets/images/computerTechnic/orange.png" />
            <SProductPageSmallImage src="assets/images/computerTechnic/orange.png" />
            <SProductPageSmallImage src="assets/images/computerTechnic/orange.png" />
            <SProductPageSmallImage src="assets/images/computerTechnic/orange.png" />
          </SProductPageSmallImages>
          <SProductPageMainImage>
            <SProductPageBigImage src="assets/images/computerTechnic/orange.png" />
          </SProductPageMainImage>
        </SProductPageImages>
        <SProductPageOptions>
          <h2>{product.productName}</h2>
          <SProductPrices>
            <span>₾{product.currentPrice}.00</span>
            {product.isDiscount && <span>₾{product.oldPrice}.00</span>}
          </SProductPrices>
          <SProductQuantityBuyFavorites>
            <SProductQuantity>
              <SProductQuantityMinus onClick={handleDecrement}>
                <img src="assets/svg/minus.svg" alt="minus" />
              </SProductQuantityMinus>
              <SProductCurrentQuantity
                value={quantity}
                onChange={handleQuantityChange}
                maxLength="2"
              />
              <SProductQuantityPlus onClick={handleIncrement}>
                <img src="assets/svg/plus.svg" alt="plus" />
              </SProductQuantityPlus>
            </SProductQuantity>
            <SProductButtonsWrapper>
              <SProductBuyNow onClick={handleCartClick} isInCart={isInCart}>
                {isInCart ? "დამატებულია კალათაში" : "კალათაში დამატება"}
              </SProductBuyNow>
              <SAddToFavorites
                onClick={handleWishlistClick}
                isInWishlist={isInWishlist}
              >
                <img src="assets/svg/wishlist.svg" alt="wishlist" />
              </SAddToFavorites>
            </SProductButtonsWrapper>
          </SProductQuantityBuyFavorites>
        </SProductPageOptions>
      </SProductPage>
      <ProductDescriptions product={product} />
    </>
  );
};
