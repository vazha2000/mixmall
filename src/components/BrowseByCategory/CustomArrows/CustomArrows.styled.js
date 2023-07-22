import styled from "styled-components";

export const SCustromPrevArrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  width: 3.125rem;
  height: 3.125rem;
  top: -80px;
  right: 70px;
  border-radius: 50%;
  
  &:hover {
    background-color: #cfcfcf;
    cursor: pointer;
    transition: all 0.1s ease-in;
  }

  @media screen and (max-width: 650px) {
    right: 110px;
  }
  @media screen and (max-width: 650px) {
    right: 80px;
  }
`

export const SCustomNextArrow = styled.div`
  > img {
    transform: rotate(180deg);
  }
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  width: 3.125rem;
  height: 3.125rem;
  top: -80px;
  right: 0;
  border-radius: 50%;

  &:hover {
    background-color: #cfcfcf;
    cursor: pointer;
    transition: all 0.1s ease-in;
  }

  @media screen and (max-width: 650px) {
    right: 40px;
  }
  @media screen and (max-width: 650px) {
    right: 10px;
  }
`