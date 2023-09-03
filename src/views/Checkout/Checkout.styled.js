import styled from "styled-components";
import {
  SCartCardTable,
  SCartCardTableBody,
  SCartCardTableBox,
  SCartCardTableBoxImageContent,
  SCartCardTableBoxNameContent,
} from "../../components/CartInfo/CartInfo.styled";
import { Link } from "react-router-dom";

export const SCheckoutCartEmpty = styled.div`
  > h2 {
    margin-bottom: 10px;
  }
  text-align: center;
`
export const SCheckoutStyledLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;

  &:hover {
      color: #df3d41;
      transition: 0.1s ease;
    }
`

export const SCheckout = styled.div`
  display: flex;
  margin-top: 50px;
  box-sizing: border-box;
  padding: 0 10px;
  gap: 50px;

  @media screen and (max-width: 950px){
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const SCheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SCheckoutInputs = styled.div`
  width: 50%;

  @media screen and (max-width: 950px){
    width: 100%;
  }
`;

const InputBase = styled.input`
  padding: 0 20px;
  font-family: inherit;
  font-size: 13px;
  outline: none;
  border-radius: 4px;
  border: ${({ isError }) => (isError ? "1px solid red" : "1px solid #d3d3d3")};
  height: 40px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
`;

export const SCheckoutInputsLabel = styled.label`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const SFirstLastnameContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const SFirstnameInput = styled(InputBase)`
  width: 50%;
`;

export const SLastnameInput = styled(InputBase)`
  width: 50%;
`;

export const SCompanyNameInput = styled(InputBase)``;

export const SCountrySelect = styled.select`
  height: 40px;
  font-family: inherit;
  padding: 0 18px;
  border: ${({ isError }) => (isError ? "1px solid red" : "1px solid #d3d3d3")};
`;

export const SRegionSelect = styled(SCountrySelect)``;

export const SPaymentSelect = styled(SCountrySelect)`

`

export const SDistrictInput = styled(InputBase)``;

export const SPopulatedAreaInput = styled(InputBase)``;

export const SStreetAddress = styled(InputBase)``;

export const SPostalCodeInput = styled(InputBase)``;
export const SPhoneInput = styled(InputBase)``;

export const SMailInput = styled(InputBase)``;

export const SFormSubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SFormSubmitButton = styled.button`
  height: 40px;
  background-color: #df3d41;

  color: #fff;
  padding: 0 5px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    background-color: ${({ disabled }) => (disabled ? "gray" : "#ff494e")};
  }
`;

export const SCheckoutInfo = styled.div`
  > div:nth-child(1) {
    border: 1px solid rgba(0,0,0, 0.4);
    border-radius: 10px;
  }
  width: 50%;

  @media screen and (max-width: 950px){
    width: 100%;
  }
`;

export const SCheckoutProduct = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  margin: 5px 0;
`;

export const SCheckoutProductImg = styled.img`
  width: 80px;
`;

export const SCheckoutProductNameQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  flex: 1;
`;

export const SCheckoutProductTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
`;

export const SCheckoutPricing = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
`;

export const SCheckoutProductTable = styled(SCartCardTable)``;

export const SCheckoutProductTableBody = styled(SCartCardTableBody)`
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  padding: 10px;

  @media screen and (max-width: 465px){
    padding: 0;
  }

`;

export const SCheckoutProductTableBox = styled(SCartCardTableBox)`
  width: 100%;
  @media screen and (max-width: 465px){
      height: 100px;
      padding: 0;
  }
  margin-top: ${({isFirst}) => (isFirst ? "20px" : "0")};
  margin-bottom: ${({isLast}) => (isLast ? "20px" : "0")};
`;

export const SCheckoutProductTableBoxImageContent = styled(SCartCardTableBoxImageContent)`
  @media screen and (max-width: 465px){
      height: 70%;
  }
  
`;

export const SCheckoutProductTableBoxNameContent = styled(SCartCardTableBoxNameContent)`
  justify-content: space-between;
  padding: 12px 15px;

  @media screen and (max-width: 465px){
    > img {
      display: none;
    }
  }
`;

export const SCheckoutProductButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SCheckoutProductQuantity = styled.span`
  margin-top: 4px;
`;

const SCheckoutProductButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 30%;
  border: 1px solid #d4d4d4;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    img {
      filter: brightness(0) invert(1);
    }
    background-color: #df3d41;
    cursor: pointer;
    transition: 0.3s ease;
  }
`;

export const SCheckoutProductLeftButton = styled(SCheckoutProductButton)``;
export const SCheckoutProductRightButton = styled(SCheckoutProductButton)``;

export const SCheckoutProductTablePrice = styled.td`
  > img {
    display: none;
  }
  > hr {
    width: 95%;
    height: 2px;
    background-color: #1f1f1f;
    border: none;
    position: absolute;
    top: 6px;
    right: 8px;
  }
  
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  font-size: 16px;
  gap: 20px;

  @media screen and (max-width: 465px){
      > img {
        display: flex;
      }
      > hr {
        width: 90%;
        transform: rotate(155deg);
      }
      > span {
        ::after {
          font-size: 12px;
        }
      }
      font-size: 14px;
      gap: 10px;
  }
`;

export const SCheckoutPricingRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: none;
  background-color: #f2f2f2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 0;
`;

export const SCheckoutPricingRow = styled.div`
  > span:nth-child(1) {
    color: #707070;
    font-size: 14px;
    margin-top: 4px;
  }
  > span:nth-child(2) {
    text-align: start;
    width: 100px;
    white-space: nowrap;
    margin-top: 4px;
    font-size: 14px;
  }
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0, 0.2);
`;

export const SCheckoutPricingRowTotal = styled(SCheckoutPricingRow)`
  > span:nth-child(1) {
    font-size: 24px;
    color: #1f1f1f;
    font-weight: bold;
  }
  > span:nth-child(2) {
    height: max-content;
  }
  align-items: center;
  border-bottom: none;
`
