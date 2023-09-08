import { motion } from "framer-motion";
import styled from "styled-components";

export const SSubcategories = styled.div`
  padding: 0 10px;
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
`

export const SFilterProducts = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  @media screen and (max-width: 830px){
    flex-direction: column-reverse;
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

  @media screen and (max-width: 831px){
    grid-template-columns: repeat(2, 1fr);
  }
`

export const SEmptyProducts = styled.div`
  > h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  flex: 3;
  justify-content: center;
  align-items: center;
  position: relative;
`