import styled from "styled-components";
import { SSideBarCategories, SSideBarCategoriesList } from "../Sidebar/Sidebar.styled";

export const SMobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  height: 100%;
  width: 70%;
  z-index: 2;
  -webkit-box-shadow: 2px 0px 12px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 0px 12px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 0px 12px 0px rgba(0,0,0,0.75);
`
export const STitleCloseButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem .5rem;
  white-space: nowrap;
`
export const SMobileMenuTitle = styled.h3`
  color: yellow;
  line-height: 1;
`

export const SMobileMenuCategories = styled(SSideBarCategories)`
  border-radius: 0;
`
export const SMobileMenuCategoriesList = styled(SSideBarCategoriesList)`
  display: flex;
  align-items: center;
  &:nth-last-child(-n+3) {
    display: none;
    @media screen and (max-width: 768px){
      display: block;
    }
  }
`
// 768px