import { motion } from "framer-motion";
import styled from "styled-components";

export const SSubcategories = styled.div`
  
`
export const SSubcategoriesBreadcrumbs = styled.div`
  background-color: red;
`

export const SSidebarContainer = styled.div`
  flex: 1;
`

export const SSubcategoriesSidebarContainer = styled.div`
  flex: 1;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1024px) {
    display: none;
  }  
`

export const SSubcategoriesCategories = styled(motion.button)`
  background-color: #df3d41;
  color: #f2f2f2;
  padding: 10px 18px;
  border-radius: 5px;
  font-family: inherit;
  font-size: 14px;
  border: none;
  width: 95%;

  &:hover {
    background-color: #c93034;
    cursor: pointer;
  }
`

export const SSubcategoriesSidebarWrapper = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 3;
`

export const SSubcategoriesProducts = styled.ul`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`