import styled from "styled-components";

export const SSidebarContainer = styled.div`
  flex: 1.2;
  position: relative;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SSideBarCategories = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  border-radius: .313rem;
  -webkit-box-shadow: 1px 1px 11px 1px rgba(0,0,0,0.3);
  -moz-box-shadow: 1px 1px 11px 1px rgba(0,0,0,0.3);
  box-shadow: 1px 1px 11px 1px rgba(0,0,0,0.1);
`;

export const SSideBarCategoriesListWrapper = styled.div`
  //
`

export const SSideBarCategoriesList = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: .625rem .5rem;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid rgba(0,0,0, 0.3);
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: #df3d41;
  }

  &:hover > img {
    filter: invert(38%) sepia(90%) saturate(4338%) hue-rotate(349deg) brightness(92%) contrast(100%);
  }
`;
