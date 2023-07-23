import styled from "styled-components";
import {
  SBrowseByCategoryLabel,
  SBrowseByCategoryLabelText,
} from "../BrowseByCategory/BrowseByCategory.styled";

export const SSaleOfMonth = styled.div`
  height: 700px;
`;

export const SSaleOfMonthLabel = styled(SBrowseByCategoryLabel)`
  margin-bottom: 3.75rem;
`;

export const SSaleOfMonthLabelText = styled(SBrowseByCategoryLabelText)``;
export const SSaleOfMonthHeaderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SSaleOfMonthHeader = styled.h2``;

export const SSaleOfMonthButton = styled.button`
  padding: 1rem 3rem;
  background-color: #df3d41;
  border-radius: 0.25rem;
  border: none;
  font-size: 14px;
  font-family: "BPG Mrgvlovani Caps 2010";
  color: #f2f2f2;

  &:hover {
    cursor: pointer;
    background-color: #c93034;
    transition: 0.1s ease-in;
  }
`;

export const SSaleOfMonthItemsContainer = styled.div``;

export const SSaleOfMonthItems = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  justify-content: space-between;
  row-gap: 20px;
`;

export const SSaleOfMonthItemsCard = styled.div`
  width: 250px;
  height: auto;
  border: 1px solid rgba(0,0,0, 0.3);
  border-radius: 4px;
  padding-bottom: 10px;
  /* cursor: pointer; */
`;

export const SSaleOfMonthItemsCardImageContainer = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px 5px 0 0;
  background-color: #e8e8e8;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SSaleOfMonthItemsCardImage = styled.img`
  width: 180px;
`

export const SSaleOfMonthWishlist = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f2f2f2;
  border-radius: 50%;
  padding: 5px;
`

export const SSaleOfMonthItemsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SSaleOfMonthItemsCardName = styled.h4`
  margin: 1rem 0;
  font-size: 14px;
  text-shadow: 0px 0px 0px black;

`
export const SSaleOfMonthItemsCardPriceContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const SSaleOfMonthItemsCardPrice = styled.span`
  color: #df3d41;
`

export const SSaleOfMonthItemsCardOldPrice = styled.span`
  text-decoration: line-through;
`
