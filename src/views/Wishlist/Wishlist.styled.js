import styled from "styled-components";

export const SWishlist = styled.div`
  display: flex;
  margin: 3rem 0;
  gap: ${({quantity}) => (quantity ? "0" : "2rem")};
  flex-wrap: wrap;
  row-gap: 1.5rem;
  justify-content: ${({quantity}) => (quantity ? "space-between" : "flex-start")};
  @media screen and (max-width: 560px){
    justify-content: space-around;
  }
`
export const SWishlistEmpty = styled.h1`
  width: 100%;
  text-align: center;
`