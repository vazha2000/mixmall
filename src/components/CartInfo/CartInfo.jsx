import React from "react";
import {
  SCartCardTable,
  SCartCardTableBody,
  SCartCardTableBox,
  SCartCardTableBoxImageContent,
  SCartCardTableBoxNameContent,
  SCartCardTableBoxQuantityContent,
  SCartCardTableBoxTotalContent,
  SCartCardTablleRemove,
  SCartInfo,
} from "./CartInfo.styled";

export const CartInfo = ({ cart, removeFromCart }) => {
  console.log(cart)

  const handleRemoveClick = (item) => {
    removeFromCart(item);
  };
  return (
    <SCartInfo
      initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 1 }}
      animate={{
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        transition: { duration: 0.3, delay: 0.2 },
      }}
      exit={{
        clipPath: "inset(0% 0% 100% 0%)",
        opacity: 1,
        transition: { delay: 0.1, duration: 0.3 },
      }}
      transition={{ type: "tween", duration: 0.4, delay: 0.1 }}
    >
      {cart.length === 0 ? (
        <div>კალათა ცარიელია</div>
      ) : (
        <SCartCardTable>
          <SCartCardTableBody>
            {cart.map((item, index) => (
              <SCartCardTableBox key={index}>
                <SCartCardTableBoxImageContent>
                  <img src={item.productImage} height={"100%"} alt="" />
                </SCartCardTableBoxImageContent>
                <SCartCardTableBoxNameContent>
                  {item.productName}
                </SCartCardTableBoxNameContent>
                <SCartCardTableBoxQuantityContent>
                  22 ცალი
                </SCartCardTableBoxQuantityContent>
                <SCartCardTableBoxTotalContent>
                  {item.currentPrice}00 ლარი
                </SCartCardTableBoxTotalContent>
                <SCartCardTablleRemove onClick={() => handleRemoveClick(item)}>X</SCartCardTablleRemove>
              </SCartCardTableBox>
            ))}
          </SCartCardTableBody>
        </SCartCardTable>
      )}
    </SCartInfo>
  );
};
