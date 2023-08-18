import styled from "styled-components";

export const SFooter = styled.div`
  display: flex;
  width: 100%;
  background-color: #1f1f1f;
  color: #f2f2f2;
  padding: 4% 5%;
  gap: 80px;
  @media screen and (max-width: 1024px) {
    padding: 4% 5%;
  }
  @media screen and (max-width: 700px){
    gap: 20px;
    padding: 3% 1%;
  }
`;

export const SFooterLogoSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SFooterLogoContainer = styled.div``;

export const SFooterLogo = styled.img`
  width: 120px;

  @media screen and (max-width: 620px) {
    width: 80px;
  }
`;

export const SFooterSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SFooterSocial = styled.img`
  width: 30px;
  cursor: pointer;
  filter: brightness(100%);

  &:hover {
    filter: brightness(80%);
  }
  @media screen and (max-width: 620px) {
    width: 20px;
  }
`;

export const SFooterInfo = styled(SFooterLogoSocial)`
  > div {
    display: flex;
    gap: 30px;


    @media screen and (max-width: 550px){
        gap: 12px;
        font-size: 13px;
      }
    
    > span {
      color: #fff;
      font-size: 13px;
      white-space: nowrap;

      &:hover {
        color: #df3d41;
        cursor: pointer;
        transition: 0.3s ease;
      }

      @media screen and (max-width: 550px){
        font-size: 10px;
      }
    }
  }

  > div:nth-child(2) {
    flex-wrap: wrap;
  }
  display: flex;
  flex-direction: column;
  gap:25px;
`;

export const SFooterContact = styled(SFooterInfo)``;

export const SFooterInfoContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 700px){
    flex-direction: row;
  }
`

export const SFooterContactIcon = styled.div`
  > img {
    filter: invert(20%) sepia(90%) saturate(3000%) hue-rotate(349deg)
        brightness(92%) contrast(100%);
  }
  display: flex;
  align-items: center;
  gap: 10px;
`
