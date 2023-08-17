import styled from "styled-components";

export const SBrands = styled.div`
  margin: 5rem 0;
  position: relative;
`

export const SBrandsLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 10px;
`

export const SBrandsLabelText = styled.span`
  color: #df3d41;
  font-weight: bold;
  text-shadow: 0px 0px 0px red;
`
export const SBrandsHeaderSlider = styled.div`
  margin-top: 1.25rem;
`

export const SBrandsSlider = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`

export const SBrandsBoxWrapper = styled.div`
  border: 1px solid rgba(0,0,0, 0.2);
  border-radius: 8px;
  height: 7.5rem;
  width: 10.625rem !important;
  font-size: 12px;
  background-color: #fff;

  &:hover {
    border: 1px solid rgba(0,0,0, 0.7);
    cursor: default;
    transition: 0.1s ease-in;
  }
`

export const SBrandsBox = styled.div`
  > img {
    mix-blend-mode: multiply;
  }
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`
export const SLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0,0,0, 0.3);
  margin: 4.375rem 0;
`


