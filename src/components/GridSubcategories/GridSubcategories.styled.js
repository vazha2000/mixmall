import styled from "styled-components";

export const SGridSubcategories = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr; 
  grid-gap: 30px; 
  align-items: center;
  margin-bottom: 60px;

  @media screen and (max-width: 650px){
    gap: 10px;
  }
`

export const SBigImageContainer = styled.div`
  grid-column: 1 / 2;
  width: 100%;
  max-width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;

  @media screen and (max-width: 650px){
    border-radius: 10px;
  }
`

export const SBigImgage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`



export const SSmallImagesContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 650px){
    gap: 5px;
  }
  
`

export const SSmallImageWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  border-radius: 15px;
  display: flex;

  @media screen and (max-width: 650px){
    border-radius: 10px;
  }
`

export const SSmallImage = styled.img`
  width: 100%;
  transition: transform 0.3s;  

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`