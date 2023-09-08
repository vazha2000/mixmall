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
  span {
    margin-top: 4px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? "#df3d41" : "#ededed")};
  cursor: pointer;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? "#fff" : "#1f1f1f")};

  &:hover {
    filter: ${({ isActive }) => !isActive && "brightness(85%)"};
  }
`;

export const SCubcategoryPaginationButton = styled.button`
  > img {
    width: 25px;
  }
  background-color: #e6e6e6;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  rotate: ${({ rotate }) => (rotate ? "180deg" : "0")};

  &:hover {
    filter: brightness(85%);
    cursor: ${({ firstPage, lastPage }) =>
      firstPage || lastPage ? "not-allowed" : "pointer"};
    ${({ firstPage }) => firstPage && `filter: saturate(0)`};
    ${({ lastPage }) => lastPage && `filter: saturate(0)`}
  }
`;

export const SPaginationEllipsis = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;
