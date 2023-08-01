import React from "react";
import {
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
  console.log(product);
  return (
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
              <img src="assets/svg/minus.svg" alt="" />
            </SProductQuantityMinus>
            <SProductCurrentQuantity>
              1
            </SProductCurrentQuantity>
            <SProductQuantityPlus>
            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M12 6V18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </SProductQuantityPlus>
          </SProductQuantity>
        </SProductQuantityBuyFavorites>
      </SProductPageOptions>
    </SProductPage>
  );
};
