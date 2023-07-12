import styled from "styled-components";

export const SNavbar = styled.nav`
  padding: 0 8.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1200px){
    padding: 0 4rem;
  }
  @media screen and (max-width: 968px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 650px) {
    padding: 0 1rem;
  }
`;


export const SLogo = styled.img`
  cursor: pointer;
`

export const SNavMenu = styled.ul`
  display: flex;
  gap: 3rem;
  padding: 0 1rem;
  @media screen and (max-width: 968px) {
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
`;

export const SNavInputContainer = styled.div`
  position: relative;
  background-color: #f5f5f5;
  height: 2.375rem;
  width: 15rem;
  border-radius: .25rem;
  display: flex;

  @media screen and (max-width: 650px){
    width: 9rem;
  }
`

export const SNavInput = styled.input`
  border: none;
  background-color: transparent;
  color: rgba(0,0,0, 0.8);
  padding-left: 1.25rem;
  width: 70%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0,0,0, 0.3);
  }
`;

export const SSearchIcon = styled.img`
  position: absolute;
  top: .5rem;
  right: .75rem;
  cursor: pointer;
`

export const SWishlistCartContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1.5rem;

  @media screen and (max-width: 768px) {
    margin-left: .5rem;
  }
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
