import styled from "styled-components";

export const SSidebarContainer = styled.div`
  flex: 1.2;
  position: relative;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  width: ${({width}) => (width ? width : "auto")};
  z-index: 10;
  padding-top: 15px;
`;

export const SSideBarCategories = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  -webkit-box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 20px 1px rgba(0,0,0,0.25);
  overflow: hidden;
  border-radius: 0 15px 15px 0;
`;

export const SSideBarCategoriesListWrapper = styled.div`
  //
`

export const SSideBarCategoriesList = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: .625rem .5rem;
  font-size: 13px;
  font-weight: 500;
  border-bottom: ${({isLast}) => (isLast ? "none" : "1px solid rgba(0,0,0, 0.3)")};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: linear-gradient(45deg, #df3d41, #e66366);
    font-weight: bold;
  }

  &:hover > div > img {
    filter:  brightness(0) invert(1);
  }
  &:hover > img {
    filter:  brightness(0) invert(1);
  }
`;

export const SSideBarCategoriesIconName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
