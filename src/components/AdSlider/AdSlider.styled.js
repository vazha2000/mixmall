import styled from "styled-components";

export const SAdSlider = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 0;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`

export const SSlider = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px; 
    left: 50%; 
    transform: translateX(-50%); 
    padding: 0;
    margin: 0;
    z-index: 1;
  }

  .slick-dots li {
    margin: 0 5px;
  }

  .slick-dots li button {
    width: 10px; 
    height: 10px; 
    background-color: #f2f2f2; 
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.5s ease;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li.slick-active button {
    opacity: 1;
  }
`

export const SSliderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 520px;
`