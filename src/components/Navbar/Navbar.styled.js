import styled from "styled-components";

export const SNavbar = styled.nav`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SLogo = styled.img`
  cursor: pointer;
`;

export const SNavMenu = styled.ul`
  display: flex;
  gap: 3rem;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SNavItem = styled.li`
  position: relative;
  font-size: 1rem;
  cursor: pointer;
  font-family: "BPG Mrgvlovani Caps 2010";
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  &:hover {
    background-color: #df3d41;
    color: #ffffff;
  }
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: calc(-1.5rem + 1px);
    width: 1px;
    height: 50%;
    transform: translateY(50%);
    background-color: rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }
`;

export const SNavActions = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-end;

  @media screen and (max-width: 1024px) {
    width: auto;
  }
`;

export const SNavInputContainer = styled.div`
  display: flex;
  width: 70%;
  border-radius: 0.5rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SWishlistCartContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1.5rem;
  position: relative;
`;

export const SWishlistContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const SWishlistQuantity = styled.div`
  position: absolute;
  top: -6px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 50%;
  background-color: #df3d41;
  color: #fff;

  &:hover {
    filter: brightness(120%);
    transition: .2s ease-in;
  }
`;

export const SWishlistIcon = styled.img`
  cursor: pointer;
`;

export const SCartIcon = styled.img`
  cursor: pointer;
`;

export const SBurgerMenuIcon = styled.img`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 968px) {
    display: flex;
  }
`;
