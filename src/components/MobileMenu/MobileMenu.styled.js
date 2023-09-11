import styled from "styled-components";
import { SSideBarCategories, SSideBarCategoriesList } from "../Sidebar/Sidebar.styled";
import { motion } from "framer-motion";
import { SCartInfoHeaderContainer } from "../CartInfo/CartInfo.styled";

export const SMobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e3e2de;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  z-index: 6;
  -webkit-box-shadow: 2px 0px 12px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 0px 12px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 0px 12px 0px rgba(0,0,0,0.75);
`
export const STitleCloseButton = styled(SCartInfoHeaderContainer)`
`
export const SMobileMenuTitle = styled.h3`
  color: #fff;
  line-height: 1;
`

export const SMobileMenuClose = styled.img`
  cursor: pointer;
  filter: brightness(0) invert(1);
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
  padding: 0 20px;
  text-shadow:1px 1px 2px rgba(0,0,0, 0.15);
  &:nth-last-child(-n + 3) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    &:nth-last-child(2) {
      display: flex;
    }
  }
  @media screen and (max-width: 750px) {
    &:nth-last-child(1) {
      display: flex;
    }
  }
  @media screen and (max-width: 620px) {
    &:nth-last-child(3) {
      display: flex;
    }
  }
  
`
export const SMobileMenuCategoriesContainer = styled(motion.ul)`
  overflow: hidden;
  > li:nth-child(2) {
    background-color: red;
  }
  display: flex;
  flex-direction: column;
`

export const SMobileMenuCategoriesListItems = styled.li`
  font-size: 12px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 50px;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
  &:hover {
    cursor: pointer;
    background-color: rgba(223, 61, 65, 0.4);
    color: #f2f2f2;
    > div > img {
      filter: brightness(0) invert(1);
    }
    > img {
      filter: brightness(0) invert(1);
    }
  }

`

export const SMobileMenuNameIcon = styled.div`
  position: relative;

  > img {
    display: flex;
  }

  > span {
    position: absolute;
    top: 4px;
    left: 30px;
    white-space: nowrap;
  }
  @media screen and (max-width: 390px){
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    align-items: center;
    > span {
      position: static;
      white-space: normal;
      padding: 5px 0 0 0;
    }
  }
`

export const SMobileSubcategoriesList = styled(motion.ul)`
  overflow: hidden;
  width: 90%;
  margin: 0 auto;

  > li:nth-last-child(2) {
    border-bottom: none;
  }
`

export const SMobileSubcategoriesListItems = styled.li`
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(223, 61, 65, 0.6);
    color: #fff;
  }
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0, 0.15);
`