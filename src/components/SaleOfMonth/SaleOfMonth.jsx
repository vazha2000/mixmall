import React from "react";
import {
  SSaleOfMonth,
  SSaleOfMonthButton,
  SSaleOfMonthHeader,
  SSaleOfMonthHeaderButton,
  SSaleOfMonthItems,
  SSaleOfMonthItemsCard,
  SSaleOfMonthItemsCardImage,
  SSaleOfMonthItemsCardImageContainer,
  SSaleOfMonthItemsCardInfo,
  SSaleOfMonthItemsCardName,
  SSaleOfMonthItemsCardOldPrice,
  SSaleOfMonthItemsCardPrice,
  SSaleOfMonthItemsCardPriceContainer,
  SSaleOfMonthLabel,
  SSaleOfMonthLabelText,
  SSaleOfMonthWishlist,
} from "./SaleOfMonth.styled";

export const SaleOfMonth = () => {
  return (
    <SSaleOfMonth>
      <SSaleOfMonthLabel>
        <img src="assets/svg/labelIcon.svg" alt="label icon" />
        <SSaleOfMonthLabelText>ამ თვეში</SSaleOfMonthLabelText>
      </SSaleOfMonthLabel>
      <SSaleOfMonthHeaderButton>
        <SSaleOfMonthHeader>თვის აქცია</SSaleOfMonthHeader>
        <SSaleOfMonthButton>ყველას ნახვა</SSaleOfMonthButton>
      </SSaleOfMonthHeaderButton>
      <SSaleOfMonthItems>
        <SSaleOfMonthItemsCard>
          <SSaleOfMonthItemsCardImageContainer>
            <SSaleOfMonthItemsCardImage src="assets/images/testImage.png" alt="" />
              <SSaleOfMonthWishlist src="assets/svg/wishlist.svg"/>
          </SSaleOfMonthItemsCardImageContainer>
          <SSaleOfMonthItemsCardInfo>
            <SSaleOfMonthItemsCardName>
              რამე ტექსტი 
            </SSaleOfMonthItemsCardName>
            <SSaleOfMonthItemsCardPriceContainer>
              <SSaleOfMonthItemsCardPrice>$220</SSaleOfMonthItemsCardPrice>
              <SSaleOfMonthItemsCardOldPrice>$260</SSaleOfMonthItemsCardOldPrice>
            </SSaleOfMonthItemsCardPriceContainer>
          </SSaleOfMonthItemsCardInfo>
        </SSaleOfMonthItemsCard>
      </SSaleOfMonthItems>
    </SSaleOfMonth>
  );
};
