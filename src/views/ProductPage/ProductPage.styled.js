import styled from "styled-components";

export const SProductPage = styled.div`
  /* background-color: cadetblue; */
  display: flex;
  margin: 3rem 0;
  /* gap: 10px; */
`

export const SProductPageImages = styled.div`
  flex: 3;
  display: flex;
  /* gap: 40px; */
`

export const SProductPageSmallImages = styled.div`
  flex: 1;
  /* background-color: burlywood; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const SProductPageSmallImage = styled.img`
  width: 70%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.2);
  -webkit-box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.2);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.2);
`

export const SProductPageMainImage = styled.div`
  flex: 4;
`

export const SProductPageBigImage = styled.img`
  width: 90%;
  object-fit: cover;
  border: 1px solid rgba(0,0,0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.2);
  -webkit-box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.2);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.2);
`

export const SProductPageOptions = styled.div`
  flex: 3;
  border: 1px solid black;
`