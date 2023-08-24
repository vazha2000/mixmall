import styled from "styled-components";

export const SProductImages = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fafafa;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  z-index: 6;

  @media screen and (max-width: 1100px) {
    width: 90%;
    height: auto;
    padding: 30px 0;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    padding: 30px 0;
  }
`;
export const SProductImageContainer = styled.div`
  display: flex;
  width: 70%;
  max-height: 90%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: inherit;
`;
export const SProductImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

const SArrows = styled.div`
  position: absolute;
  top: 50%;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  user-select: none;

  &:hover {
    background-color: #df3d41;
    border: 1px solid rgba(0,0,0, 0.2);
    > img {
      filter: brightness(0) invert(1);
    }
  }

  @media screen and (max-width: 550px){
    height: 35px;
    width: 35px;
  }
`;

export const SPrevArrow = styled(SArrows)`
  left: -60px;
  cursor: pointer;

  > img {
    transform: rotate(180deg);
    width: 15px;
  }

  @media screen and (max-width: 550px){
    left: -50px;
  }
  @media screen and (max-width: 370px){
    left: -40px;
  }
`;

export const SNextArrow = styled(SArrows)`
  right: -60px;
  cursor: pointer;

  > img {
    width: 15px;
  }

  @media screen and (max-width: 550px){
    right: -50px;
  }
  @media screen and (max-width: 370px){
    right: -40px;
  }
`;

export const SCloseProductImages = styled.div`
  > img {
    width: 25px;
    cursor: pointer;
  }
  position: absolute;
  top: 10px;
  right: 2%;
  display: none;

  @media screen and (max-width: 550px){
    display: flex;
  }
`