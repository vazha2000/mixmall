import React, { useContext, useState } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { SWishlist, SWishlistEmpty, SWishlistEmptyContainer } from "./Wishlist.styled";
import { Card } from "../../components/Card/Card";

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  console.log(wishlist)

  const [hoverStates, setHoverStates] = useState(
    wishlist.map(() => false)
  );

  const handleHover = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <SWishlist quantity={wishlist.length === 0}>
      {wishlist.length === 0 && (
          <SWishlistEmpty>შენი სურვილების სია ცარიელია</SWishlistEmpty>
      )}
      {wishlist.map((item, index) => (
        <Card
          key={index}
          productImage={item.productImage}
          productName={item.productName}
          id={item.id}
          currentPrice={item.currentPrice}
          oldPrice={item.oldPrice}
          discountRate={item.discountRate}
          isDiscount={item.isDiscount}
          path={item.path}
          isHovered={hoverStates[index]}
                handleHover={() => handleHover(index)}
          />
      ))}
    </SWishlist>
  );
};
