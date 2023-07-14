import styled from "styled-components";

export const SSidebarContainer = styled.div`
  flex: 1;
  /* background-color: #d5d8de; */
`;

export const SSideBarCategories = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SSideBarCategoriesList = styled.li`
  cursor: pointer;
  padding: 10px 0;
  font-weight: bold;
  border-bottom: 1px solid rgba(0,0,0, 0.3);
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-right: 10px;
  &:hover {
    color: red;
  }
`;
