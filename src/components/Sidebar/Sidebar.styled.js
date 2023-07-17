import styled from "styled-components";

export const SSidebarContainer = styled.div`
  flex: 1;
  position: relative;
`;

export const SSideBarCategories = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  padding: 0 .5rem;
  border-radius: .313rem;
  -webkit-box-shadow: 1px 1px 11px 1px rgba(0,0,0,0.3);
  -moz-box-shadow: 1px 1px 11px 1px rgba(0,0,0,0.3);
  box-shadow: 1px 1px 11px 1px rgba(0,0,0,0.2);
`;

export const SSideBarCategoriesListWrapper = styled.div`
  //
`

export const SSideBarCategoriesList = styled.li`
  cursor: pointer;
  padding: .625rem 0;
  font-weight: 500;
  font-size: 14px;
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
