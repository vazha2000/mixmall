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
    background-color: #e0e0e0;
    cursor: pointer;
    transition: all 0.1s ease-in;
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
    background-color: #e0e0e0;
    cursor: pointer;
    transition: all 0.1s ease-in;
  }
`