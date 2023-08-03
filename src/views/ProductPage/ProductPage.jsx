import React, { useState } from "react";
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

export const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    if (quantity < 99) {
      setQuantity((prev) => prev + 1);
    }
  }

  const handleDecrement = () => {
    if(quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleQuantityChange = (e) => {
    const inputQuantity = parseInt(e.target.value, 10);
    if (e.target.value.trim() === "" || isNaN(inputQuantity) || inputQuantity < 1) {
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
              <SProductCurrentQuantity value={quantity} onChange={handleQuantityChange} maxLength="2"/>
              <SProductQuantityPlus onClick={handleIncrement}>
                <img src="assets/svg/plus.svg" alt="plus" />
              </SProductQuantityPlus>
            </SProductQuantity>
            <SProductBuyNow>შეძენა</SProductBuyNow>
            <SAddToFavorites>
              <img src="assets/svg/wishlist.svg" alt="wishlist" />
            </SAddToFavorites>
          </SProductQuantityBuyFavorites>
        </SProductPageOptions>
      </SProductPage>
      <ProductDescriptions product={product} />
    </>
  );
};
