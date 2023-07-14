import styled from "styled-components";

export const SSidebarContainer = styled.div`
  flex: 1;
  /* background-color: #d5d8de; */
`;

export const SSideBarCategories = styled.ul`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
`;

export const SSideBarCategoriesList = styled.li`
  cursor: pointer;
  padding: 10px 0;
  font-weight: bold;

  &:hover {
    color: #3498db;
  }
`;
