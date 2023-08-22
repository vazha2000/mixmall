import { motion } from "framer-motion";
import styled from "styled-components";

export const SProductPage = styled.div`
  display: flex;
  margin: 3rem 0;
  padding: 0 15px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SProductPageImages = styled.div`
  flex: 3;
  display: flex;
  height: max-content;

  @media screen and (max-width: 1400px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }
`;

export const SProductPageSmallImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1400px) {
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const SProductPageSmallImage = styled.img`
  width: 80%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.4);
    transition: 0.3s ease;
  }

  @media screen and (max-width: 1400px) {
    width: 20%;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const SProductPageMainImage = styled.div`
  flex: 4;
`;

export const SProductPageBigImage = styled.img`
  width: 90%;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1400px) {
    width: 96%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.4);
    transition: 0.3s ease;
  }
`;

export const SProductPageOptions = styled.div`
  flex: 3;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  padding: 10px;

  > h2 {
    color: #1f1f1f;
    font-size: 18px;
  }
`;

export const SProductPrices = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  > span {
    color: #df3d41;
    font-size: 30px;
  }
  > span:nth-child(2) {
    color: #1f1f1f;
    text-decoration: line-through;
    text-decoration-thickness: 3px;
    font-size: 22px;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 400px) {
    > span {
      font-size: 8vw;
    }
  }
  @media screen and (max-width: 320px) {
    > span {
      font-size: 6vw;
    }
  }
`;

export const SProductQuantityBuyFavorites = styled.div`
  > div:nth-child(2) {
    display: none;
  }
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media screen and (max-width: 400px) {
    > div:nth-child(2) {
      display: flex;
    }
    gap: 20px;
  }
`;

export const SProductButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: inherit;

  @media screen and (max-width: 400px) {
    > div:nth-child(2) {
      display: none;
    }
  }
`;

export const SProductQuantity = styled.div`
  display: flex;
  height: 100%;
  background-color: #ededed;
  padding: 4px;
  border-radius: 20px;
`;

export const SProductQuantityMinus = styled(motion.button)`

  > img {
    width: 25px;
  }
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;

  &:hover {
    > img {
      filter: brightness(0) invert(1);
    }
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: #df3d41;
  }
`;
export const SProductCurrentQuantity = styled.input`
  width: 80px;
  height: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  border: none;
  text-align: center;
  background-color: inherit;
`;

export const SProductQuantityPlus = styled(SProductQuantityMinus)`
`;

export const SProductBuyNow = styled.button`
  width: auto;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: inherit;
  background-color: ${({ isInCart }) => (isInCart ? "#df3d41" : "white")};
  border-radius: 5px;
  font-size: 16px;
  color: ${({ isInCart }) => (isInCart ? "#fff" : "#1f1f1f")};
  font-weight: 600;
  padding: 0 10px;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.9);
    filter: ${({ isInCart }) =>
      isInCart ? "brightness(120%)" : "brightness(90%)"};
    transition: all 0.2s ease;
  }

  @media screen and (max-width: 400px) {
    height: 50px;
    white-space: normal;
  }
`;

export const SAddToFavorites = styled.div`
  width: 40px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isInWishlist }) =>
    isInWishlist ? "#df3d41" : "white"};

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.9);
    filter: ${({ isInWishlist }) =>
      isInWishlist ? "brightness(120%)" : "brightness(90%)"};
    cursor: pointer;
  }
`;

export const SOnlineInstallmentBanksPayment = styled.div`
  background-color: #ededed;
  padding: 20px 10px;
  margin-top: 30px;
  border-radius: 10px;
`;

export const SPaymentMethods = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    margin-top: 12px;
    text-align: center;
  }
  > div > span {
    font-size: 13px;
    font-weight: bold;
  }
  > h4 {
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 450px) {
    > div {
      padding: 0;
    }
    > div > span {
      font-size: 3.2vw;
    }
  }
`;

export const SOnlineInstallmentBanks = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
  }
  > div > img {
    width: 30%;
    background-blend-mode: darken;
  }
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
