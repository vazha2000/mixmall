import React, { useState } from "react";
import {
  SSaleOfMonth,
  SSaleOfMonthButton,
  SSaleOfMonthHeader,
  SSaleOfMonthHeaderButton,
  SSaleOfMonthHeaderCountingDown,
  SSaleOfMonthItems,
  SSaleOfMonthLabel,
  SSaleOfMonthLabelText,
} from "./SaleOfMonth.styled";
import { Card } from "../Card";
import { testProducts } from "../../data/data";
import { CountingDown } from "./CountingDown/CountingDown";
import { SLine } from "../BrowseByCategory/BrowseByCategory.styled";

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
        <SSaleOfMonthHeaderCountingDown>
          <SSaleOfMonthHeader>თვის აქცია</SSaleOfMonthHeader>
          <CountingDown />
        </SSaleOfMonthHeaderCountingDown>
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
      <SLine />
    </SSaleOfMonth>
  );
};
