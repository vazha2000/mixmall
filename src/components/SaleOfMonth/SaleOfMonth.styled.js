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


export const SSaleOfMonthItems = styled.div`
  margin-top: 60px;
  row-gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
