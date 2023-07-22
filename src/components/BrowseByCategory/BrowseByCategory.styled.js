import styled from "styled-components";

export const SBrowseByCategory = styled.div`
  width: 100%;
  margin-top: 5rem;
  height: 31.25rem;
  position: relative;
`

export const SBrowseByCategoryLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SBrowseByCategoryLabelText = styled.span`
  color: #df3d41;
  font-weight: bold;
  text-shadow: 0px 0px 0px red;
`
export const SBrowseByCategoryHeaderSlider = styled.div`
  margin-top: 1.25rem;
`
export const SBrowseByCategoryHeader = styled.h2`
  margin-bottom: 3rem;
`

export const SBrowseByCategorySlider = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`

export const SBrowseByCategoryBoxWrapper = styled.div`
  border: 1px solid rgba(0,0,0, 0.3);
  border-radius: .25rem;
  height: 9.125rem;
  width: 10.625rem !important;
  font-size: 12px;

  &:hover {
    border: 1px solid black;
    cursor: pointer;
    transition: 0.1s ease-in;
    color: black;
  }
`

export const SBrowseByCategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`



