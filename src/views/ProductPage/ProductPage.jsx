import React, { useContext, useEffect, useState } from "react";
import { ProductDescriptions } from "../../components/ProductDescriptions";
import {
  SAddToFavorites,
  SOnlineInstallmentBanks,
  SOnlineInstallmentBanksPayment,
  SPaymentMethods,
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
  SProductWarranty,
} from "./ProductPage.styled";
import { WishlistContext } from "../../context/WishlistContext";
import { useLocation } from "react-router-dom";
import { NotificationPopup } from "../../components/NotificationPopup";
import { CheckoutContext } from "../../context/CheckoutContext";
import { ProductImages } from "../../components/ProductImages";
import { AnimatePresence } from "framer-motion";
import { Overlay } from "./Overlay";

export const ProductPage = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const {
    cart,
    addToCart,
    removeFromCart,
    productQuantities,
    updateProductQuantity,
  } = useContext(CheckoutContext);

  const productId = product.id;
  const productQuantity = productQuantities[productId] || 1;

  const [isImageClicked, setIsImageClicked] = useState(null);

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
    if (productQuantity < 99) {
      updateProductQuantity(productId, productQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (productQuantity > 1) {
      updateProductQuantity(productId, productQuantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const inputQuantity = parseInt(e.target.value, 10);
    if (
      e.target.value.trim() === "" ||
      isNaN(inputQuantity) ||
      inputQuantity < 1
    ) {
      updateProductQuantity(productId, 1);
    } else if (inputQuantity > 99) {
      updateProductQuantity(productId, 99);
    } else {
      updateProductQuantity(productId, inputQuantity);
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
      alt,
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
          <SProductPageMainImage>
            <SProductPageSmallImages>
            {product.productImage.map((item, index) => (
              <SProductPageSmallImage
                onClick={() => setIsImageClicked(index)}
                style={index === 0 ? { display: "none" } : {}}
                key={index}
                src={item}
              />
            ))}
          </SProductPageSmallImages>
            <SProductPageBigImage
              src={product.productImage[0]}
              onClick={() => setIsImageClicked(0)}
            />
          </SProductPageMainImage>
        </SProductPageImages>
        <SProductPageOptions>
          <h2>{product.productName}</h2>
          <SProductPrices>
            <span>{product.currentPrice.toFixed(2)} ₾</span>
            {product.isDiscount && <span>{product.oldPrice.toFixed(2)} ₾</span>}
          </SProductPrices>
          <SProductWarranty>გარანტია: <span>{product.warranty}</span></SProductWarranty>
          <SProductQuantityBuyFavorites>
            <div>
              <SProductQuantity>
                <SProductQuantityMinus whileTap={{scale: "1.07"}} onClick={handleDecrement}>
                  <img src="assets/svg/minus.svg" alt="minus" />
                </SProductQuantityMinus>
                <SProductCurrentQuantity
                  value={productQuantity}
                  onChange={handleQuantityChange}
                  maxLength="2"
                />
                <SProductQuantityPlus whileTap={{scale: "1.07"}} onClick={handleIncrement}>
                  <img src="assets/svg/plus.svg" alt="plus" />
                </SProductQuantityPlus>
              </SProductQuantity>
            </div>
            <div>
              <SAddToFavorites
                onClick={handleWishlistClick}
                isInWishlist={isInWishlist}
              >
                <img src="assets/svg/wishlist.svg" alt="wishlist" />
              </SAddToFavorites>
            </div>

            <SProductButtonsWrapper>
              <SProductBuyNow onClick={handleCartClick} isInCart={isInCart}>
                {isInCart ? "REMOVE FROM CART" : "ADD TO CART"}
              </SProductBuyNow>
              <SAddToFavorites
                onClick={handleWishlistClick}
                isInWishlist={isInWishlist}
              >
                <img src="assets/svg/wishlist.svg" alt="wishlist" />
              </SAddToFavorites>
            </SProductButtonsWrapper>
          </SProductQuantityBuyFavorites>
          <SOnlineInstallmentBanksPayment>
            <SPaymentMethods>
              <h4>PAYMENT METHODS</h4>
              <div>
                <span>TRANSFER TO BANK ACCOUNT</span>
                <span>PAYING BY CASH</span>
              </div>
            </SPaymentMethods>
            <SOnlineInstallmentBanks>
              <h4>INSTALLMENT</h4>
              <div>
                <img
                  src="assets/images/bankLogos/bog.png"
                  alt="Bank of Georgia"
                />
                <img
                  src="assets/images/bankLogos/tbc.png"
                  alt="TBC Bank"
                  width={"20%"}
                />
                <img src="assets/images/bankLogos/credo.png" alt="Credo Bank" />
              </div>
            </SOnlineInstallmentBanks>
          </SOnlineInstallmentBanksPayment>
        </SProductPageOptions>
      </SProductPage>
      <ProductDescriptions product={product} />
      <AnimatePresence>
        {isImageClicked !== null && (
          <>
            <Overlay
              isClicked={isImageClicked}
              setIsClicked={setIsImageClicked}
            />
            <ProductImages
              setIsClicked={setIsImageClicked}
              productImage={product.productImage}
              currentIndex={isImageClicked}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
