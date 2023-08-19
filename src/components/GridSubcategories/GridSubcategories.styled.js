import styled from "styled-components";

export const SGridSubcategories = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr; 
  grid-gap: 30px; 
  align-items: center;
  margin-bottom: 60px;
  padding: 0 10px;

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
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 650px){
    border-radius: 10px;
  }
`

export const SBigImgage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  transform: ${({isImageHovered}) => (isImageHovered ? "scale(1.1)" : "scale(1)")};
`

export const SBigImageText = styled.div`
  > h1 {
    font-size: 2.4vw;
  }
  > p {
    font-weight: bold;
    font-size: 1.15vw;
  }
  > p {
    > span {
      color: #df3d41;
    }
  }
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  left: 10px;
  gap: 15px;
`

export const SBigImageButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 10px;
  background-color: #df3d41;
  padding: 0 5px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;
  border-radius: 10px;
  height: 5vh;
  width: 12vw;

  &:hover {
    filter: brightness(120%);
  }
`

export const SSMallImageText = styled(SBigImageText)`
  > span {
    font-weight: bold;
    font-size: 1vw;
  }
  gap: 5px;
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
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 650px){
    border-radius: 10px;
  }
`

export const SSmallImage = styled.img`
  width: 100%;
  transition: transform 0.3s; 
  transform: ${({isSmallImageHovered}) => (isSmallImageHovered ? "scale(1.1)" : "scale(1)")};
`