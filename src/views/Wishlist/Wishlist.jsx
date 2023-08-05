import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { SWishlist, SWishlistEmpty } from "./Wishlist.styled";
import { Card } from "../../components/Card/Card";

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <SWishlist quantity={wishlist.length % 4 !== 2}>
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
          path={item.subcategoryPath + item.path}
          />
      ))}
    </SWishlist>
  );
};
