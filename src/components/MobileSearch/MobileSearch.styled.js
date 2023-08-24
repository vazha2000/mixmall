import styled from "styled-components";
import {
  SCartInfo,
  SCartInfoHeaderContainer,
} from "../CartInfo/CartInfo.styled";

export const SMobileSearch = styled(SCartInfo)`
  > div:nth-child(2) {
    margin: 30px 0;
    height: 70px;
    width: 90%;
  }
  width: 100%;
  border: none;
  justify-content: flex-start;
  align-items: center;
`;

export const SmobileSearchHeaderContainer = styled(SCartInfoHeaderContainer)`
  > div:nth-child(1) {
    display: flex;
    gap: 10px;
    user-select: none;

    > h2 {
      margin-top: 6px;
    }
  }
  height: 80px;
`;

export const SMobileSearchClose = styled.div`
  > img {
    cursor: pointer;
    filter: brightness(0) invert(1);

    &:hover {
      filter: brightness(25%);
      transition: 0.2s ease;
    }
  }
  display: flex;
  justify-content: flex-end;
`;
