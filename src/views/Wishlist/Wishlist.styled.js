import styled from "styled-components";

export const SWishlist = styled.div`
  margin-top: 20px;
  display: ${({quantity}) => (quantity ? "block" : "grid")};
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 20px 10px;

  @media screen and (max-width: 800px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const SWishlistEmpty = styled.h1`
  width: 100%;
  text-align: center;
`