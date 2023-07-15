import styled from "styled-components";

export const SSidebarContainer = styled.div`
  flex: 1;
  /* background-color: #d5d8de; */
  position: relative;
`;

export const SSideBarCategories = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SSideBarCategoriesList = styled.li`
  cursor: pointer;
  padding: .625rem 0;
  font-weight: bold;
  border-bottom: 1px solid rgba(0,0,0, 0.3);
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-right: .625rem;
  &:hover {
    color: #df3d41;
  }

  &:hover > img {
    filter: invert(38%) sepia(90%) saturate(4338%) hue-rotate(349deg) brightness(92%) contrast(100%);
  }
`;
