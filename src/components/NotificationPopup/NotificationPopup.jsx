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
            პროდუქტი {productName} დაემატა კალათაში
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
            პროდუქტი {productName} წაიშალა კალათიდან
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
            პროდუქტი {productName} დაემატა სურვილების სიაში
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
            პროდუქტი {productName} წაიშალა სურვილების სიიდან
          </SProductAddedToWishlist>
        </SCenteredContainer>
      )}
    </AnimatePresence>
    </>
  );
};
