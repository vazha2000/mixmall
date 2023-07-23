import React, { useState } from "react";
import {
  SCountingDown,
  SCountingDownTimeContainer,
  SSaleOfMonth,
  SSaleOfMonthButton,
  SSaleOfMonthHeader,
  SSaleOfMonthHeaderButton,
  SSaleOfMonthItems,
  SSaleOfMonthLabel,
  SSaleOfMonthLabelText,
} from "./SaleOfMonth.styled";
import { Card } from "../Card";
import { testProducts } from "../../data/data";

export const SaleOfMonth = () => {

  const [hoverStates, setHoverStates] = useState(testProducts.map(() => false));

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates
    })
  }

  return (
    <SSaleOfMonth>
      <SSaleOfMonthLabel>
        <img src="assets/svg/labelIcon.svg" alt="label icon" />
        <SSaleOfMonthLabelText>ამ თვეში</SSaleOfMonthLabelText>
      </SSaleOfMonthLabel>
      <SSaleOfMonthHeaderButton>
        <div style={{display: "flex", gap: "87px", alignItems: "flex-end"}}>
          <SSaleOfMonthHeader>თვის აქცია</SSaleOfMonthHeader>
          <SCountingDown>
            <SCountingDownTimeContainer>
              <span>დღე</span>
              <h2>04</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>საათი</span>
              <h2>11</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>წუთი</span>
              <h2>30</h2>
            </SCountingDownTimeContainer>
            <img src="assets/svg/colon.svg" alt="colon" />
            <SCountingDownTimeContainer>
              <span>წამი</span>
              <h2>20</h2>
            </SCountingDownTimeContainer>
          </SCountingDown>
        </div>
        <SSaleOfMonthButton>ყველას ნახვა</SSaleOfMonthButton>
      </SSaleOfMonthHeaderButton>
      <SSaleOfMonthItems>
        {testProducts.map((item, index) => {
          return <Card
          key={index}
          productImage={item.productImage}
          discountRate={item.discountRate}
          isDiscount={item.isDiscount}
          productName={item.productName}
          currentPrice={item.currentPrice}
          oldPrice={item.oldPrice}
          alt={item.alt}
          handleHover={() => handleHover(index)}
          isHovered={hoverStates[index]}
        />
        })} 
      </SSaleOfMonthItems>
    </SSaleOfMonth>
  );
};
