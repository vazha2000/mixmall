import styled from "styled-components";

export const SWishlist = styled.div`
  /* display: flex;
  margin: 3rem 0;
  gap: ${({quantity}) => (quantity ? "0" : "2rem")};
  flex-wrap: wrap;
  row-gap: 1.5rem;
  justify-content: ${({quantity}) => (quantity ? "space-between" : "flex-start")};
  @media screen and (max-width: 560px){
    justify-content: space-around;
  } */
  margin-top: 20px;
  display: grid;
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