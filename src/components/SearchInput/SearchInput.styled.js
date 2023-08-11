import styled from "styled-components";
import { SCheckoutProduct, SCheckoutProductImg, SCheckoutProductNameQuantity, SCheckoutProductTotal } from "../../views/Checkout/Checkout.styled";

export const SSearchInputContainer = styled.div`
  background-color: red;
  position: relative;
  background-color: #ffffff;
  height: 2.375rem;
  width: 100%;
  display: flex;
  border-radius: 0.5rem;
  
  @media screen and (max-width: 1024px) {
  border-radius: .25rem;
  display: flex;
  overflow: hidden;
  box-shadow: ${({isFocused}) => isFocused ? ("1px 1px 11px 1px rgba(0,0,0,0.15)") : "none"};
  }
  
`

export const SSearchInput = styled.input`
  border: none;
  background-color: inherit;
  color: rgba(0,0,0, 0.8);
  padding-left: 1.25rem;
  width: 90%;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0,0,0, 0.3);
  }
`

export const SSearchIcon = styled.img`
  position: absolute;
  top: .5rem;
  right: .75rem;
  cursor: pointer;
`

export const SSearchedProducts = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  height: 80px;
  z-index: 5;
`

export const SSearchProduct = styled(SCheckoutProduct)`

`

export const SSearchProductImage = styled(SCheckoutProductImg)``

export const SSearchProductNameQuantity = styled(SCheckoutProductNameQuantity)``

export const SSearchProductPrice = styled(SCheckoutProductTotal)``