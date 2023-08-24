import styled from "styled-components";
import {
  SCartInfo,
  SCartInfoHeaderContainer,
} from "../CartInfo/CartInfo.styled";

export const SMobileSearch = styled(SCartInfo)`
  width: 100%;
  border: none;
  justify-content: flex-start;
`;

export const SmobileSearchHeaderContainer = styled(SCartInfoHeaderContainer)`
  height: 70px;
`;

export const SMobileSearchClose = styled.div`
  > img {
    cursor: pointer;
  }
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
`;
