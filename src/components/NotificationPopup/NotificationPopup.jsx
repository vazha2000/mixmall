import { AnimatePresence } from "framer-motion";
import React from "react";
import {
  SCenteredContainer,
  SProductAddedToWishlist,
} from "./NotificationPopup.styled";

export const NotificationPopup = ({
  showWishlistPopup,
  showWishlistRemovePopup,
  showCartPopup,
  showCartRemovePopup,
  productName,
}) => {
  return (
    <>
      <AnimatePresence>
        {showCartPopup && (
          <SCenteredContainer>
            <SProductAddedToWishlist
              initial={{ y: 0 }}
              animate={{ y: 30 }}
              exit={{ y: -40, opacity: 0, transition: { duration: 0.3 } }}
            >
              <img src="assets/svg/cart.svg" alt="cart icon" />
              <span>PRODUCT {productName} HAS BEEN ADDED TO THE CART</span>
            </SProductAddedToWishlist>
          </SCenteredContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCartRemovePopup && (
          <SCenteredContainer>
            <SProductAddedToWishlist
              initial={{ y: 0 }}
              animate={{ y: 30 }}
              exit={{ y: -40, opacity: 0, transition: { duration: 0.3 } }}
            >
              <img src="assets/svg/cart.svg" alt="cart icon" />
              <span>PRODUCT {productName} HAS BEEN REMOVED FROM CART</span>
            </SProductAddedToWishlist>
          </SCenteredContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showWishlistPopup && (
          <SCenteredContainer>
            <SProductAddedToWishlist
              initial={{ y: 0 }}
              animate={{ y: 30 }}
              exit={{ y: -40, opacity: 0, transition: { duration: 0.3 } }}
            >
              <img src="assets/svg/wishlist.svg" alt="wishlist icon" />
              <span>PRODUCT {productName} HAS BEEN ADDED TO THE WISHLIST</span>
            </SProductAddedToWishlist>
          </SCenteredContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showWishlistRemovePopup && (
          <SCenteredContainer>
            <SProductAddedToWishlist
              initial={{ y: 0 }}
              animate={{ y: 30 }}
              exit={{ y: -40, opacity: 0, transition: { duration: 0.3 } }}
            >
              <img src="assets/svg/wishlist.svg" alt="wishlist icon" />
              <span>PRODUCT {productName} HAS BEEN REMOVED FROM THE WISHLIST</span>
            </SProductAddedToWishlist>
          </SCenteredContainer>
        )}
      </AnimatePresence>
    </>
  );
};
