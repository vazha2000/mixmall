import styled from "styled-components";

export const SSidebarContainer = styled.div`
  flex: 1.2;
  position: relative;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  width: ${({ width }) => (width ? width : "auto")};
  z-index: 10;
  padding-top: 15px;
`;

export const SSideBarCategories = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  -webkit-box-shadow: -10px 0px 21px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -10px 0px 21px 3px rgba(0, 0, 0, 0.75);
  box-shadow: -10px 0px 21px 3px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  border-radius: 15px 0 0 15px;
`;

export const SSideBarCategoriesListWrapper = styled.div`
  //
`;

export const SSideBarCategoriesList = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: linear-gradient(45deg, #df3d41, #e66366);
    font-weight: bold;
  }

  &:hover > div > img {
    filter: brightness(0) invert(1);
  }
  &:hover > img {
    filter: brightness(0) invert(1);
  }
`;

export const SSideBarCategoriesIconName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  width: 86%;
  border-bottom: ${({ isLast }) =>
    isLast ? "none" : "1px solid rgba(0,0,0, 0.15)"};
  margin: 0 auto;
  position: relative;

  > span {
    font-size: 12px;
    display: flex;
    position: absolute;
    left: 50px;
    top: 56%;
    transform: translateY(-50%);
  }
`;
