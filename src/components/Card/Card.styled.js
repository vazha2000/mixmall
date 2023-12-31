import { motion } from "framer-motion";
import styled from "styled-components";
import { SWishlistContainer } from "../Navbar/Navbar.styled";

export const SCard = styled.div`
  height: max-content;
  padding-bottom: 20px;
  border: ${({ isHovered }) =>
    isHovered ? "1px solid rgba(0,0,0, 0.4);" : "1px solid rgba(0,0,0, 0.15);"};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const SCardImageContainer = styled.div`
  width: 90%;
  height: 70%;
  margin: 10px auto;
  display: flex;
  align-items: flex-end;
  text-align: center;
`;

export const SCardImageWrapper = styled.div`
  width: 100%;
`;

export const SCardImage = styled.img`
  width: 90%;
`;

export const SAddToCardButton = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease;
  background-color: ${({ isInCart }) => (isInCart ? "#df3d41" : "fff")};
  color: ${({ isInCart }) => (isInCart ? "#fff" : "#1f1f1f")};
  &:hover {
    background-color: #df3d41;
    color: #fff;
    border: none;
  }

  > span {
    font-size: 12px;
  }
`;
export const SCardSaleDiscount = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #df3d41;
  font-size: 12px;
  padding: 10px 10px;
  border-radius: 4px;
  color: #f2f2f2;
  z-index: 5;
  padding: ${({ isHovered }) => isHovered && "10px 15px"};
  transition: 0.3s ease;

  &::before {
    content: "ფასდაკლება";
  }

  @media screen and (max-width: 768px) {
    &::before {
      content: ${({ discountRate }) => discountRate && `'${discountRate}'`};
    }
  }

  @media screen and (max-width: 400px) {
    left: 8px;
    font-size: 10px;
    padding: 10px 8px;
  }
`;

export const SCardInfo = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
`;

export const SCardProductName = styled.span`
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-left: 4px;
  cursor: pointer;
  width: max-content;
  height: max-content;

  &:hover {
    text-decoration-line: underline;
    text-decoration-color: #1f1f1f;
    text-decoration-thickness: 1px;
  }
`;

export const SCardPriceContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 15px auto;
  gap: 8px;
  flex-direction: row-reverse;
  justify-content: flex-end;
  font-size: 18px;
`;

export const SCartPriceWrapper = styled.div`
  position: relative;
  width: max-content;
  display: flex;

  > div:nth-child(1) {
    > img {
      filter: invert(40%) sepia(100%) saturate(10000%) hue-rotate(349deg)
        brightness(92%) contrast(100%);
    }
  }

  @media screen and (max-width: 450px){
    font-size: 14px;

    >div {
      img {
        width: 12px;
      }
    }
  }
`;

export const SCardOldPriceWrapper = styled(SCartPriceWrapper)`
  > hr {
    width: 100%;
    height: 2px;
    background-color: #1f1f1f;
    border: none;
    position: absolute;
    top: 8px;
    right: 0;
  }
  > div:nth-child(1) {
    > img {
      filter: brightness(1) invert(0);
    }
    margin-left: 0;
  }
`;

export const SCardOldPrice = styled.span`
`;
export const SCardPrice = styled.span`
  color: #df3d41;
`;

export const SCardContentWrapper = styled.div`
  transform: ${({ isHovered }) =>
    isHovered ? "translateY(-3%)" : "translateY(0)"};
  transition: 0.2s ease;
`;

export const SCardWishlist = styled(SWishlistContainer)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ isInWishlist }) =>
    isInWishlist ? "#df3d41" : "#f0f0f0"};
  transform: ${({ isHovered }) =>
    isHovered ? "translateX(0)" : "translateX(200%)"};
  transition: 0.5 ease;

  @media screen and (max-width: 768px) {
    transform: translateX(0);
  }
  @media screen and (max-width: 400px) {
    transform: scale(0.8);
    top: 15px;
    right: 5px;
  }
  &:hover {
    background-color: ${({ isInWishlist }) =>
      isInWishlist ? "#f02227" : "#df3d41"};
    cursor: pointer;
  }
`;
