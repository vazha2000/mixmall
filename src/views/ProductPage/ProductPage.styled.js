import styled from "styled-components";

export const SProductPage = styled.div`
  display: flex;
  margin: 3rem 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SProductPageImages = styled.div`
  flex: 3;
  display: flex;
`;

export const SProductPageSmallImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SProductPageSmallImage = styled.img`
  width: 70%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
`;

export const SProductPageMainImage = styled.div`
  flex: 4;
`;

export const SProductPageBigImage = styled.img`
  width: 90%;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1024px) {
    width: 100%;
}
`;

export const SProductPageOptions = styled.div`
  flex: 3;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -2px 2px 10px -1px rgba(0, 0, 0, 0.2);
  padding: 10px;

  > h2 {
    color: #1f1f1f;
  }
`;

export const SProductPrices = styled.div`
  display: flex;
  gap: 2rem;
  margin: 3rem 0;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  > span {
    color: #1f1f1f;
    font-size: 30px;
  }
  > span:nth-child(2) {
    color: #df3d41;
    text-decoration: line-through;
    text-decoration-thickness: 3px;
  }
`;

export const SProductQuantityBuyFavorites = styled.div`
  display: flex;
  gap: 30px;
`;

export const SProductQuantity = styled.div`
  display: flex;
`;

export const SProductQuantityMinus = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0 0 4px;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    transition: all .2s ease;
    background-color: #df3d41;
  }
`;
export const SProductCurrentQuantity = styled.input`
  width: 80px;
  height: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  border: none;
  border-top: 1px solid rgba(0,0,0, 0.5);
  border-bottom: 1px solid rgba(0,0,0, 0.5);
  text-align: center;
`;

export const SProductQuantityPlus = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 4px 4px 0;

  &:hover {
    cursor: pointer;
    transition: all .2s ease;
    background-color: #df3d41;
  }
`;

export const SProductBuyNow = styled.button`
  width: 120px;
  border: 1px solid rgba(0,0,0, 0.5);
  background-color: inherit;
  background-color: ${({isInCart}) => (isInCart ? "#df3d41" : "white")};
  border-radius: 5px;
  font-size: 16px;
  color: ${({isInCart}) => (isInCart ? "#fff" : "#1f1f1f")};
  font-weight: 600;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0,0,0, 0.9);
    filter: ${({isInCart}) => (isInCart ? "brightness(120%)" : "brightness(90%)")};
    transition: all .2s ease;
  }
`

export const SAddToFavorites = styled.div`
  width: 40px;
  border: 1px solid rgba(0,0,0, 0.5);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({isInWishlist}) => (isInWishlist ? "#df3d41" : "white")};

  &:hover {
    border: 1px solid rgba(0,0,0, 0.9);
    filter: ${({isInWishlist}) => (isInWishlist ? "brightness(120%)" : "brightness(90%)")};
    cursor: pointer;
  }
`
