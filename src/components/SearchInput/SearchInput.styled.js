import styled from "styled-components";
import {
  SCheckoutProduct,
  SCheckoutProductImg,
  SCheckoutProductNameQuantity,
  SCheckoutProductTotal,
} from "../../views/Checkout/Checkout.styled";

export const SSearchInputContainer = styled.div`
  background-color: red;
  position: relative;
  background-color: transparent;
  height: 2.8rem;
  width: 100%;
  display: flex;
  border-radius: 0.5rem;
  border: ${({ isFocused }) =>
  isFocused ? "1px solid rgba(0,0,0, 0.7)" : "1px solid rgba(0,0,0, 0.2)"};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    border-radius: 0.25rem;
    display: flex;
    overflow: hidden;
  }
`;

export const SSearchInput = styled.input`
  border: none;
  background-color: inherit;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 1.25rem;
  width: 90%;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
`;

export const SSearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 85%;
  background-color: #df3d41;
  margin-right: 4px;
  border-radius: inherit;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    filter: brightness(110%);

  }
`;

export const SSearchIcon = styled.img`

`;

export const SSearchedProducts = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 600px;
  max-height: 500px;
  overflow-y: auto;
  z-index: 5;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: -1px 22px 47px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 22px 47px 2px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 22px 47px 2px rgba(0, 0, 0, 0.75);
  display: ${({ filteredProducts }) => (filteredProducts ? "none" : "flex")};
  flex-direction: column;
`;

export const SSearchProduct = styled(SCheckoutProduct)``;

export const SSearchProductImage = styled(SCheckoutProductImg)``;

export const SSearchProductNameQuantity = styled(
  SCheckoutProductNameQuantity
)``;

export const SSearchProductPrice = styled(SCheckoutProductTotal)``;
