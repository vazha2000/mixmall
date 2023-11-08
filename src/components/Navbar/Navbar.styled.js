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
  width: auto;
  gap: 1rem;
  margin-left: 1rem;
  justify-content: flex-end;
  padding-right: 5px;
  height: 45px;

  @media screen and (max-width: 768px) {
    padding-right: 9px;
  }
`;

export const SNavInputContainer = styled.div`
  display: flex;
  flex: 1;
  padding-right: 10px;
  align-items: center;
  background-color: #ededed;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const SNavInputSearchIconContainer = styled.div`
  display: none;
  flex: 1;
  padding-right: 20px;
  align-items: center;
  justify-content: flex-end;
  background-color: #ededed;
  @media screen and (max-width: 576px) {
    display: flex;
  }
`;



export const SNavContactContainer = styled.div`
  > span {
    font-weight: bold;
    margin-top: 4px;
  }

  min-width: 240px;
  gap: 20px;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 4px;
  border-radius: 5px;
  white-space: nowrap;
  height: 100%;

  &:hover {
    background-color: #df3d41;
    transition: 0.5s ease;
    cursor: pointer;

    > span {
      color: #fff;
    }
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

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
`;

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
  background-color: #ededed;
  width: 50px;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #df3d41;
    cursor: pointer;
  }
`;

export const SNavInputSearchIcon = styled(SWishlistContainer)`
  background-color: #df3d41;

  &:hover {
    background-color: #ff494e;
  }
`

export const SWishlistIcon = styled.img`
  transition: all 0.2s ease;
  filter: ${({ isInWishlist }) =>
    isInWishlist ? "brightness(0) invert(1)" : "brightness(0)"};

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

export const SCartQuantity = styled(SWishlistQuantity)``;

export const SBurgerMenuIcon = styled.img`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 968px) {
    display: flex;
  }
`;

export const SNavMenu = styled.div`
  display: flex;
  height: 60px;
  position: relative;

  @media screen and (max-width: 900px) {
    > ul:nth-child(3) {
      display: none;
    }
  }
  @media screen and (max-width: 750px) {
    > ul:nth-child(4) {
      display: none;
    }
  }
  @media screen and (max-width: 620px) {
    > ul:nth-child(2) {
      display: none;
    }
  }
`;
export const SNavMenuCategoriesWrapper = styled.div`
  flex: 0.4;
  min-width: 200px;
`;
export const SNavMenuCategories = styled.div`
  > span {
    font-size: 13px;
    margin-top: 5px;
  }
  > img {
    width: 20px;
    filter: brightness(0) invert(1);
  }
  background-color: #df3d41;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #ff494e;
    cursor: pointer;
    transition: 0.3s ease;
  }
`;

export const SNavSidebarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
`;

export const SNavMenuItemsContainer = styled.ul`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ isMenuHovered }) =>
    isMenuHovered ? "#b9b9b9" : "#ededed"};
  position: relative;
  font-size: 13px;
  font-weight: bold;
  color: ${({ isMenuHovered }) => (isMenuHovered ? "#fff" : "#1f1f1f")};
  transition: 0.3s ease;
  cursor: pointer;
`;

export const SNavMenuItems = styled.li`
  text-align: center;
  margin-top: 4px;
`;

export const SNavMenuDiscount = styled.div`
  flex: 1;
  background-color: #df3d41;
`;
