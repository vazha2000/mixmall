import React, { useEffect } from "react";
import {
  SCartCardTable,
  SCartCardTableBody,
  SCartCardTableBox,
  SCartCardTableBoxImageContent,
  SCartCardTableBoxNameContent,
  SCartCardTableContainer,
  SCartCardTableTotal,
  SCartCardTablleRemove,
  SCartEmpty,
  SCartInfo,
  SCartInfoHeaderClose,
  SCartInfoHeaderContainer,
  SCartInfoHeaderIconContent,
  SCartInfoWrapper,
  SCartinfoCheckoutButton,
} from "./CartInfo.styled";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { CartInfoOverlay } from "./CartInfoOverlay/CartInfoOverlay";

export const CartInfo = ({
  cart,
  removeFromCart,
  setIsCartClicked,
  isCartClicked,
}) => {
  const totalPrice = cart.reduce((sum, item) => {
    const productPrice = item.productQuantity * item.currentPrice;
    return sum + productPrice;
  }, 0);

  const handleRemoveClick = (item) => {
    removeFromCart(item);
  };
  const handleCartClick = () => {
    setIsCartClicked(!isCartClicked);
  };
  useEffect(() => {
    if (isCartClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartClicked]);
  return (
    <>
      <SCartInfo
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.4, delay: 0.1 }}
      >
        <SCartInfoWrapper>
          <SCartInfoHeaderContainer>
            <SCartInfoHeaderIconContent>
              <img src="assets/svg/cart.svg" alt="cart icon" />
              <h3>კალათა</h3>
            </SCartInfoHeaderIconContent>
            <SCartInfoHeaderClose>
              <img
                src="assets/svg/close.svg"
                alt="close icon"
                onClick={() => setIsCartClicked(false)}
              />
            </SCartInfoHeaderClose>
          </SCartInfoHeaderContainer>
          {cart.length === 0 ? (
            <SCartEmpty>
              <img src="assets/svg/cart.svg" alt="cart icon" />
              <h1>თქვენი კალათა ცარიელია</h1>
            </SCartEmpty>
          ) : (
            <>
              <SCartCardTableContainer quantity={cart.length > 3}>
                <SCartCardTable>
                  <SCartCardTableBody>
                    {cart.map((item, index) => (
                      <SCartCardTableBox key={index}>
                        <SCartCardTableBoxImageContent>
                          <img
                            src={item.productImage}
                            height={"100%"}
                            alt={item.alt}
                          />
                        </SCartCardTableBoxImageContent>
                        <SCartCardTableBoxNameContent>
                          <div>{item.productName}</div>
                          <div>
                            {item.productQuantity} x{" "}
                            <span>
                              {item.currentPrice}
                              <img src="assets/svg/lari.svg" alt="lari icon" />
                            </span>
                          </div>
                        </SCartCardTableBoxNameContent>
                        <SCartCardTablleRemove
                          onClick={() => handleRemoveClick(item)}
                        >
                          <img src="assets/svg/trash.svg" alt="remove" />
                        </SCartCardTablleRemove>
                      </SCartCardTableBox>
                    ))}
                  </SCartCardTableBody>
                </SCartCardTable>
              </SCartCardTableContainer>
              <SCartCardTableTotal>
                <span>
                  ჯამი: {totalPrice}
                  <img src="assets/svg/lari.svg" alt="lari icon" />
                </span>
              </SCartCardTableTotal>
            </>
          )}
        </SCartInfoWrapper>
        <SStyledLink to="/checkout" quantity={cart.length === 0}>
          <SCartinfoCheckoutButton
            onClick={() => {
              setIsCartClicked(false);
            }}
          >
            <span>კალათის ნახვა</span>
          </SCartinfoCheckoutButton>
        </SStyledLink>
      </SCartInfo>
      {isCartClicked && (
        <>
          <CartInfoOverlay
            isCartClicked={isCartClicked}
            handleCartClick={handleCartClick}
          />
        </>
      )}
    </>
  );
};
