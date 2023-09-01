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
  flex: 3.5;
  display: flex;
  height: max-content;
  justify-content: center;

  @media screen and (max-width: 1400px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }
`;

export const SProductPageSmallImages = styled.div`
  
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 5px;
  left: 50%;
  width: 18%;
  gap: 10px;
  transform: translate(-50%);
`;

export const SProductPageSmallImage = styled.img`
  width: 80%;
  border: 1px solid #b8b8b8;
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SProductPageBigImage = styled.img`
  width: 90%;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
  /* border-radius: 10px; */
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  padding: 25px 10px 10px 10px;

  > h2 {
    color: #1f1f1f;
    font-size: 18px;
  }
`;

export const SProductPrices = styled.div`
  display: flex;
  gap: 20px;
  margin: 1rem 0;
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
    position: relative;

    ::after {
      content: "(-5%)";
      position: absolute;
      top: -10px;
      right: -35px;
      font-size: 14px;
      color: #df3d41;
      font-weight: bold;
    }
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

  &:hover {
    background-color: #e3e3e3;
  }
`;

export const SProductQuantityMinus = styled(motion.button)`
  > img {
    width: 25px;
  }
  width: 30px;
  height: 30px;
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

export const SProductQuantityPlus = styled(SProductQuantityMinus)``;

export const SProductBuyNow = styled.button`
  width: auto;
  background-color: ${({ isInCart }) => (isInCart ? "#df3d41" : "#ededed")};
  border-radius: 20px;
  font-size: 14px;
  color: ${({ isInCart }) => (isInCart ? "#fff" : "#1f1f1f")};
  font-weight: 600;
  padding: 0 30px;
  white-space: nowrap;
  min-height: 38px;

  &:hover {
    cursor: pointer;
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
  > img {
    width: 30px;
  }
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isInWishlist }) =>
    isInWishlist ? "#df3d41" : "#ededed"};

  &:hover {
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

export const SProductWarranty = styled.div`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1em;
  > span {
    color: #df3d41;
  }
  margin-bottom: 15px;
`;
