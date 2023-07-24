import styled from "styled-components";
import {
  SBrowseByCategoryLabel,
  SBrowseByCategoryLabelText,
} from "../BrowseByCategory/BrowseByCategory.styled";

export const SSaleOfMonth = styled.div`
  margin-bottom: 4.375rem;
`;

export const SSaleOfMonthLabel = styled(SBrowseByCategoryLabel)`
  margin-bottom: 1.5rem;
`;

export const SSaleOfMonthLabelText = styled(SBrowseByCategoryLabelText)``;
export const SSaleOfMonthHeaderButton = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const SSaleOfMonthHeader = styled.h2`
  white-space: nowrap;
`;

export const SSaleOfMonthHeaderCountingDown = styled.div`
  display: flex;
  gap: 87px;
  align-items: flex-end;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
`

export const SSaleOfMonthButton = styled.button`
  /* padding: 1rem 3rem; */
  background-color: #df3d41;
  border-radius: 0.25rem;
  border: none;
  font-size: 14px;
  font-family: "BPG Mrgvlovani Caps 2010";
  color: #f2f2f2;
  height: 50px;
  width: 160px;
  position: absolute;
  top: 0;
  right: 0;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: #c93034;
    transition: 0.1s ease-in;
  }
  @media screen and (max-width: 700px) {
    width: 140px;

  }
`;

export const SSaleOfMonthItems = styled.div`
  margin-top: 60px;
  row-gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 530px){
    justify-content: center;
  }
`;
