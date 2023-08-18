import { motion } from "framer-motion";
import styled from "styled-components";

export const SNavbar = styled.nav`
  width: 100%;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.18); */
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const SLogo = styled.img`
  cursor: pointer;
`;

export const SNavActions = styled.div`
  display: flex;
  width: 90%;
  gap: 1rem;
  margin-left: 1rem;
  justify-content: space-between;
  padding-right: 5px;

  @media screen and (max-width: 1024px) {
    width: auto;
  }
  @media screen and (max-width: 768px) {
    padding-right: 9px;
  }
`;

export const SNavInputContainer = styled.div`
  display: flex;
  width: 50%;
  border-radius: 0.5rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SNavContactContainer = styled.div`

  > span {
    font-weight: bold;
  }

  min-width: 240px;
  gap: 20px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 4px;
  border-radius: 5px;
  white-space: nowrap;

  &:hover {
    background-color: #df3d41;
    transition: 0.5s ease;
    cursor: pointer;

    > span {
      color: #fff;
    }
  }
`

export const SNavContactIconContainer = styled.div`
  background-color: red;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  background-color: #fff;
  > img {
    width: 30px;
  }
`

export const SWishlistCartContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`;

export const SWishlistContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.8rem;
  background-color: #f0f0f0;
  width: 50px;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #df3d41;
    cursor: pointer;
  }
`;

export const SWishlistIcon = styled.img`
  transition: all 0.2s ease;
  filter: ${({isInWishlist}) => (isInWishlist ? "brightness(0) invert(1)" : "brightness(0)")};

  ${SWishlistContainer}:hover & {
    filter: brightness(0) invert(1);
  }
`;

export const SWishlistQuantity = styled.div`
  position: absolute;
  top: -12px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  font-size: 14px;
  border-radius: 50%;
  background-color: #df3d41;
  color: #fff;
  border: 1px solid #fff;
`;

export const SCartIconContainer = styled(SWishlistContainer)``;

export const SCartIcon = styled(SWishlistIcon)`
  width: 32px;
`;

export const SCartQuantity = styled(SWishlistQuantity)`
`;

export const SBurgerMenuIcon = styled.img`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 968px) {
    display: flex;
  }
`;

export const SNavMenu = styled.div`
  display: flex;
  height: 50px;
  position: relative;
`
export const SNavMenuCategoriesWrapper = styled.div`
  flex: 1.3;
`
export const SNavMenuCategories = styled.div`
  > span {
    font-size: 13px;
  }
  background-color: #1f1f1f;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #df3d41;
    cursor: pointer;
    transition: 0.3s ease;
  }
`

export const SNavSidebarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
`

export const SNavMenuItemsContainer = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ededed;
  background-color: ${({isMenuHovered}) => (isMenuHovered ? "#b9b9b9" : "#ededed")};
  position: relative;
  font-size: 13px;
  color: ${({isMenuHovered}) => (isMenuHovered ? "#fff" : "#1f1f1f")};
  transition: 0.3s ease;
  cursor: pointer;

  
  &::before {
    content: '';
    position: absolute;
    left: -18px;
    top: 0;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: ${({isMenuHovered}) => (isMenuHovered ? "19px solid #b9b9b9" : "19px solid #ededed")};
    overflow: hidden;
    transition: 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    right: -19px;
    top: 0;
    width: 0;
    height: 0;
    border-top: ${({isMenuHovered}) => (isMenuHovered ? "50px solid #b9b9b9" : "50px solid #ededed")};
    border-right: 19px solid transparent;
    transition: 0.3s ease;
  }
`

export const SNavMenuItems = styled.li`
  /* &:hover {
    cursor: pointer;
    color: #df3d41;

  } */
`

export const SNavMenuDiscount = styled.div`
  flex: 1.2;
  background-color: #df3d41;

`