import styled from "styled-components";

export const SCard = styled.div`
  width: calc(25% - 50px);
  min-width: 250px;
  height: auto;
  border: ${({isHovered}) => (isHovered ? "1px solid rgba(0,0,0, 0.6);" : "1px solid rgba(0,0,0, 0.3);")};
  border-radius: 4px;
  padding-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
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
`

export const SCardImage = styled.img`
  width: 70%;
  scale: ${({isHovered}) => (isHovered ? 1.05 : 1)};
  transition: 0.1s ease-in;
`

export const SCardWishlist = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #f2f2f2;
  border-radius: 50%;
  padding: 5px;
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
`

export const SCardOldPrice = styled.span`
  text-decoration: line-through;
`