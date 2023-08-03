import React from "react";
import { ProductDescriptions } from "../../components/ProductDescriptions";
import {
  SAddToFavorites,
  SProductBuyNow,
  SProductCurrentQuantity,
  SProductCurrentQuantityContainer,
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
              <SProductQuantityMinus>
                <img src="assets/svg/minus.svg" alt="minus" />
              </SProductQuantityMinus>
              <SProductCurrentQuantity />
              <SProductQuantityPlus>
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
