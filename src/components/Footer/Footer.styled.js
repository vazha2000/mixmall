import styled from "styled-components";

export const SFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #1f1f1f;
  color: #f2f2f2;
  padding: 0 10%;

  @media screen and (max-width: 1024px){
    padding: 0 2%;
  }
`

export const SFooterLogoSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 7% 0;
`

export const SFooterLogoContainer = styled.div`

`

export const SFooterLogo = styled.img`
  width: 120px;

  @media screen and (max-width: 620px){
    width: 80px;
  }
`

export const SFooterSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SFooterSocial = styled.img`
  width: 30px;
  cursor: pointer;
  filter: brightness(100%);
  
  &:hover {
    filter: brightness(80%);
  }
  @media screen and (max-width: 620px){
    width: 20px;
  }
`

export const SFooterInfo = styled(SFooterLogoSocial)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 7% 0;
  > h4 {
    pointer-events: none;
  }
  >span {
    font-size:.9rem;
    cursor: pointer;

    &:hover {
      color: #d8d8d8;
    }
  }
  @media screen and (max-width: 1024px){
    > span {
      font-size: .8rem;
    }
  }
  @media screen and (max-width: 620px){
    > span {
      font-size: .6rem;
    }
    > h4 {
      font-size: .8rem;
    }
  }
`

export const SFooterContact = styled(SFooterInfo)`

`