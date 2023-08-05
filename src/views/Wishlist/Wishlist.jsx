import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { SWishlist, SWishlistEmpty } from "./Wishlist.styled";
import { Card } from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    if(product.path) {
      const productPath = product.subcategoryPath + product.path;
      navigate(productPath);
    } else {
      navigate(product.subcategoryPath)
    }
  };

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
          currentPrice={item.currentPrice}
          oldPrice={item.oldPrice}
          discountRate={item.discountRate}
          isDiscount={item.isDiscount}
          onClick={() => handleProductClick(item)}
          />
      ))}
    </SWishlist>
  );
};
