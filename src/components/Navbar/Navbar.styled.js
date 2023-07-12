import styled from "styled-components";

export const SNavbar = styled.nav`
  padding: 0 8.5rem;
  /* background-color: green; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px){
    background-color: red;
  }
`;


export const SLogo = styled.img`
  cursor: pointer;
`

export const SNavMenu = styled.ul`
  display: flex;
  gap: 3rem;
`;

export const SNavItem = styled.li`
  font-size: 1rem;
  cursor: pointer;
`;

export const SNavActions = styled.div`
  display: flex;
`;

export const SNavInputContainer = styled.div`
  position: relative;
  background-color: #f5f5f5;
  height: 2.375rem;
  width: 15rem;

  display: flex;
`

export const SNavInput = styled.input`
  border: none;
  background-color: transparent;
  color: rgba(0,0,0, 0.8);
  padding-left: 1.25rem;

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
`

export const SWishlistIcon = styled.img`
  cursor: pointer;
`

export const SCartIcon = styled.img`
  cursor: pointer;
`
