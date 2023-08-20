import styled from "styled-components";

export const SProductDescription = styled.div``;

export const SProductDescriptionTableHeader = styled.tr`
  background-color: #df3d41;
  height: 50px;
  color: #fff;
  font-size: 15px;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }

  > td {
    border-radius: 10px 10px 0 0;
    padding: 0 20px;
  }
`

export const SProductDescriptionTable = styled.table`
  width: 100%;
  box-sizing: border-box;
  border-spacing: 0;
  margin-bottom: 3rem;
`;

export const SProductDescriptionTableRow = styled.tr`
  display: flex;
  width: 100%;
  background-color: ${({isEven}) => (isEven ? "white" : "#f7dcdd")};

  > td {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  > td:nth-child(1) {
    flex: 3;
  }

  > td:nth-child(2) {
    flex: 2;
  }
`;
