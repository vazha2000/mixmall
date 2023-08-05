import React, { useContext, useEffect, useState } from "react";
import { ProductDescriptions } from "../../components/ProductDescriptions";
import {
  SAddToFavorites,
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
import {
  SCenteredContainer,
  SProductAddedToWishlist,
} from "../../components/Card/Card.styled";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const [showWishlistPopup, setShowWishlistPopup] = useState(false);

  const [isInWishlist, setIsInWishlist] = useState(false); 

  useEffect(() => {
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
  }, [wishlist, product.id]);


  const { pathname } = useLocation();  
  
  const subcategoryPath = pathname + "/";

  const handleWishlistClick = () => {
    const {
      productName,
      currentPrice,
      oldPrice,
      productImage,
      discountRate,
      isDiscount,
      id
    } = product;
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
      id
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

  return (
    <>
      <SProductPage>
        <AnimatePresence>
          {showWishlistPopup && (
            <SCenteredContainer>
              <SProductAddedToWishlist
                initial={{ y: 0 }}
                animate={{ y: 30 }}
                exit={{ y: -40, opacity: 0, transition: { duration: 0.3 } }}
              >
                პროდუქტი {product.productName} დაემატა სურვილების სიას
              </SProductAddedToWishlist>
            </SCenteredContainer>
          )}
        </AnimatePresence>

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
            <SProductBuyNow>შეძენა</SProductBuyNow>
            <SAddToFavorites onClick={handleWishlistClick} isInWishlist={isInWishlist}>
              <img src="assets/svg/wishlist.svg" alt="wishlist" />
            </SAddToFavorites>
          </SProductQuantityBuyFavorites>
        </SProductPageOptions>
      </SProductPage>
      <ProductDescriptions product={product} />
    </>
  );
};
