import styled from "styled-components";

export const SProductDescription = styled.div`
  padding: 0 10px;
`;

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
`;

export const SProductDescriptionTableRow = styled.tr`
  display: flex;
  width: 100%;
  background-color: ${({isEven}) => (isEven ? "white" : "#f7dcdd")};
  border-bottom: ${({isLast}) => (isLast ? "1px solid rgba(0,0,0, 0.15)" : "none")};

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

export const SShowButtonContainer = styled.div`
  > button {
    padding: 10px 16px;
    background-color: #df3d41;
    color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid transparent;

    &:hover {
      cursor: pointer;
      background-color: transparent;
      color: #df3d41;
      font-weight: bold;
      border: 1px solid #df3d41;
      transition: 0.1s ease-in;
    }
  }
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`