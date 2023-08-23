import styled from "styled-components";
import {
  SCartCardTableBox,
  SCartCardTableBoxImageContent,
  SCartCardTableBoxNameContent,
} from "../CartInfo/CartInfo.styled";

export const SSearchInputContainer = styled.div`
  position: relative;
  background-color: #fff;
  height: 80%;
  width: 100%;
  display: flex;
  border-radius: 10px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  z-index: 6;

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
  padding-left: 10px;
  width: 90%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
`;

export const SSearchIconContainer = styled.div`
  > img {
    width: 20px;
    filter: invert(0) sepia(0%) saturate(400%) hue-rotate(349deg)
      brightness(85%) contrast(100%);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 100%;
  transition: all 0.1s ease;
`;

export const SSearchButtonContainer = styled.div`
  > span {
    font-size: 12px;
    color: #fff;
    font-weight: bold;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 100%;
  background-color: #df3d41;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    filter: brightness(110%);
  }
`;

export const SSearchIcon = styled.img``;

export const SSearchedProducts = styled.table`
  position: absolute;
  top: 50px;
  right: -25%;
  width: 45vw;
  max-height: 500px;
  overflow-y: auto;
  z-index: 5;
  background-color: #fff;
  padding: ${({ filteredProducts }) => (filteredProducts ? "0" : "10px")};
  border-radius: 10px;
  -webkit-box-shadow: -1px 22px 47px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 22px 47px 2px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 22px 47px 2px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #c9c9c9;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5e5e5e;
  }
`;

export const SLoadingResult = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const SSearchProductBox = styled(SCartCardTableBox)`
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 100px;
`;

export const SSearchProductBoxImageContent = styled(
  SCartCardTableBoxImageContent
)``;

export const SSearchProductImage = styled.img`
  height: 100%;
`;

export const SSearchProductNameQuantity = styled(
  SCartCardTableBoxNameContent
)``;

export const SSearchProductPrice = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
`;

export const SShowAllProducts = styled.tr`
  display: ${({ isLast }) => (isLast ? "flex" : "none")};
  justify-content: center;
`;

export const SShowAllProductsButton = styled.button`
  background-color: #df3d41;
  border-radius: 4px;
  border: 1px solid #df3d41;
  font-size: 14px;
  font-family: "BPG Mrgvlovani Caps 2010";
  color: #fff;
  height: 50px;
  width: 160px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #df3d41;
    font-weight: bold;
    transition: 0.1s ease-in;
  }
`;
