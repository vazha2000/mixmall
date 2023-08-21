import styled from "styled-components";

export const SProductImages = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #ededed;
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
  z-index: 2;
`;
export const SProductImageContainer = styled.div`
  display: flex;
  width: 70%;
  max-height: 90%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: inherit;
`;
export const SProductImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

const SArrows = styled.div`
  position: absolute;
  top: 50%;
  background-color: yellow;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SPrevArrow = styled(SArrows)`
  left: -50px;
  cursor: pointer;
`;

export const SNextArrow = styled(SArrows)`
  right: -50px;
  cursor: pointer;
`;
