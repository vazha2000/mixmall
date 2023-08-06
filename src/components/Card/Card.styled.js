import { motion } from "framer-motion";
import styled from "styled-components";

export const SCard = styled.div`
  width: ${({width}) => (width ? "200px" : "calc(25% - 50px)") };
  min-width: 15.625rem;
  height: auto;
  max-height: 21.563rem;
  border: ${({isHovered}) => (isHovered ? "1px solid rgba(0,0,0, 0.6);" : "1px solid rgba(0,0,0, 0.3);")};
  border-radius: 4px;
  padding-bottom: 20px;
  overflow: hidden;
  transition: 100ms ease-in;
`

export const SCardImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #e8e8e8;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
`

export const SAddToCardButton = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 15%;
  width: 100%;
  background-color: #df3d41;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(90%);
  }

  > span {
    color: #f2f2f2;
    font-size: 14px;
  }
`

export const SCardImage = styled.img`
  width: 70%;
  transition: 0.1s ease-in;

  &:hover {
    scale: 1.05;
  }
`

export const SCardWishlist = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: ${({isInWishlist}) => (isInWishlist ? "#df3d41" : "#f2f2f2")};
  border-radius: 50%;
  padding: 5px;

  &:hover {
    filter: brightness(120%);
  }
`

export const SCardSaleDiscount = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #df3d41;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 4px;
  color: #f2f2f2;
`

export const SCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const SCardProductName = styled.h4`
  margin: 1rem 0;
  font-size: 14px;
  text-shadow: 0px 0px 0px black;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-left: 4px;
`

export const SCardPriceContainer = styled.div`
  > span {
    pointer-events: none;
  }
  display: flex;
  gap: 20px;
`

export const SCardPrice = styled.span`
  color: #df3d41;
  padding-left: 4px;
`

export const SCardOldPrice = styled.span`
  text-decoration: line-through;
`
export const SCenteredContainer = styled.div`
position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 90%;
z-index: 5;
@media screen and (max-width: 600px){
  width: 80%;
}
`;

export const SProductAddedToWishlist = styled(motion.div)`
  width: 100%;
  height: 80px;
  white-space: nowrap;
  background-color: #df3d41;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  
  @media screen and (max-width: 600px){
  white-space: normal;
}
`