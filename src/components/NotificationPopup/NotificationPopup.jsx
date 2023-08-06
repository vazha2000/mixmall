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
    <AnimatePresence>
      {(showCartPopup ||
        showCartRemovePopup ||
        showWishlistPopup ||
        showWishlistRemovePopup) && (
        <SCenteredContainer>
          <SProductAddedToWishlist
            initial={{ y: 0 }}
            animate={{ y: 30 }}
            exit={{ y: -40, opacity: 0, transition: { duration: 0.3 } }}
          >
            პროდუქტი {productName}{" "}
            {(showCartPopup || showWishlistPopup) && "დაემატა"}{" "}
            {(showWishlistRemovePopup || showCartRemovePopup) && "წაიშალა"}{" "}
            {showCartPopup && "კალათაში"} {showCartRemovePopup && "კალათიდან"}
            {showWishlistPopup && "სურვილების სიაში"} {showWishlistRemovePopup && "სურვილების სიიდან"}
          </SProductAddedToWishlist>
        </SCenteredContainer>
      )}
    </AnimatePresence>
  );
};
