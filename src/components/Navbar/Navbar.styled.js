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
`

export const SNavMenu = styled.ul`
  display: flex;
  gap: 3rem;
  padding: 0 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SNavItem = styled.li`
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SNavActions = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-end;

  @media screen and (max-width: 1024px){
    width: auto;
  }
`;

export const SNavInputContainer = styled.div`
  display: flex;
  width: 70%;
  border-radius: .5rem;
  overflow: hidden;

  @media screen and (max-width: 1024px){
    display: none;
  }
`

export const SWishlistCartContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1.5rem;

  /* @media screen and (max-width: 768px) {
    margin-left: 0;
    gap: 0;
  } */
`

export const SWishlistIcon = styled.img`
  cursor: pointer;
`

export const SCartIcon = styled.img`
  cursor: pointer;
`

export const SBurgerMenuIcon = styled.img`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 968px){
    display: flex;
  }
`
