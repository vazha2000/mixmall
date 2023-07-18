import styled from "styled-components";

export const SMainPage = styled.div`
  width: 82%;
  margin: 0 auto;

  @media screen and (max-width: 1024px){
    width: 97%;
  }
`

export const SBurgerMenuIcon = styled.img`
  cursor: pointer;
  margin-right: 1.25rem;
`

export const SSearchInputHamburger = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    margin-top: .5rem;
  }
`