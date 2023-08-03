import styled from "styled-components";

export const SProductDescription = styled.div``;

export const SProductDescriptionTable = styled.table`
  width: 100%;
  box-sizing: border-box;
  border-spacing: 0;
`;

export const SProductDescriptionTableRow = styled.tr`
  display: flex;
  width: 100%;
  background-color: gray;

  > td:nth-child(1) {
    flex: 3;
  }

  > td:nth-child(2) {
    flex: 2;
  }
`;
