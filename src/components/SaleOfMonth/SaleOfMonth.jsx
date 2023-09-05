import React, { useState } from "react";
import {
  SCountingDownLabel,
  SSAleOfMonthButtonContainer,
  SSaleOfMonth,
  SSaleOfMonthButton,
  SSaleOfMonthHeaderCountingDown,
  SSaleOfMonthItems,
  SSaleOfMonthLabel,
  SSaleOfMonthLabelText,
} from "./SaleOfMonth.styled";
import { Card } from "../Card";
import { saleProducts } from "../../data/data";
import { CountingDown } from "./CountingDown/CountingDown";

export const SaleOfMonth = () => {
  const [hoverStates, setHoverStates] = useState(saleProducts.map(() => false));

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  const visibleProducts = saleProducts.slice(0, 4);

  return (
    <SSaleOfMonth>
      <SSaleOfMonthLabel>
        <img src="assets/svg/labelIcon.svg" alt="label icon" />
        <SSaleOfMonthLabelText>SALE OF THE MONTH</SSaleOfMonthLabelText>
        <SCountingDownLabel>
          <CountingDown />
        </SCountingDownLabel>
      </SSaleOfMonthLabel>
      <SSaleOfMonthHeaderCountingDown>
        <CountingDown />
      </SSaleOfMonthHeaderCountingDown>
      <SSaleOfMonthItems>
        {visibleProducts.map((item, index) => {
          return (
            <Card
              key={index}
              index={index}
              productImage={item.productImage}
              discountRate={item.discountRate}
              isDiscount={item.isDiscount}
              productName={item.productName}
              currentPrice={item.currentPrice}
              oldPrice={item.oldPrice}
              alt={item.alt}
              handleHover={() => handleHover(index)}
              isHovered={hoverStates[index]}
              path={`${item.categoryName}/${item.subcategoryName}/${item.productName}`}
              id={item.id}
            />
          );
        })}
      </SSaleOfMonthItems>
      <SSAleOfMonthButtonContainer>
        <SSaleOfMonthButton>VIEW ALL</SSaleOfMonthButton>
      </SSAleOfMonthButtonContainer>
    </SSaleOfMonth>
  );
};
