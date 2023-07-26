import styled from "styled-components";
import { SSideBarCategories, SSideBarCategoriesList } from "../Sidebar/Sidebar.styled";
import { motion } from "framer-motion";

export const SMobileMenu = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e3e2de;
  height: 150vh;
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
  color: #df3d41;
  line-height: 1;
`

export const SMobileMenuClose = styled.img`
  cursor: pointer;
`

export const SMobileMenuCategories = styled(SSideBarCategories)`
  border-radius: 0;
  background-color: #e3e2de;
  box-shadow: none;
`
export const SMobileMenuCategoriesList = styled(SSideBarCategoriesList)`
  display: flex;
  align-items: center;
  font-size: 13px;
  text-shadow:1px 1px 2px rgba(0,0,0, 0.15);
  &:nth-last-child(-n+3) {
    display: none;
    @media screen and (max-width: 768px){
      display: block;
    }
  }
`
export const SMobileMenuCategoriesContainer = styled(motion.ul)`
  overflow: hidden;
`

export const SMobileMenuCategoriesListItems = styled.li`
  font-size: 12px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: aquamarine;
    cursor: pointer;
    background-color: rgba(223, 61, 65, 0.4);
    color: #f2f2f2;
  }
`

export const SMobileSubcategoriesList = styled(motion.ul)`
  padding: 0 .8rem;
  overflow: hidden;
`

export const SMobileSubcategoriesListItems = styled.li`
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: rgba(223, 61, 65, 0.6);
  }
`