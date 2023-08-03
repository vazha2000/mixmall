import styled from "styled-components";

export const SSubcategoryPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const SSubcategoryPaginationList = styled.ul`
  gap: 0.6rem;
`;

export const SSubcategoryPaginationListItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? "#e81318" : "#babfbb")};
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#1f1f1f")};

  &:hover {
    filter: ${({ isActive }) => !isActive && "brightness(80%)"};
  }
`;

export const SCubcategoryPaginationButton = styled.button`
  background-color: #df3d41;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  rotate: ${({ rotate }) => (rotate ? "180deg" : "0")};

  &:hover {
    filter: brightness(70%);
    cursor: ${({ firstPage, lastPage }) =>
      firstPage || lastPage ? "not-allowed" : "pointer"};
    ${({ firstPage }) => firstPage && `filter: saturate(0)`};
    ${({ lastPage }) => lastPage && `filter: saturate(0)`}

};
`;
