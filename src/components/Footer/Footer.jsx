import React from "react";
import {
  SFooter,
  SFooterContact,
  SFooterInfo,
  SFooterInfoContact,
  SFooterLogo,
  SFooterLogoContainer,
  SFooterLogoSocial,
  SFooterSocial,
  SFooterSocialContainer,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <SFooter>
      <SFooterLogoSocial>
        <SFooterLogoContainer>
          <SFooterLogo src="../assets/images/LogoDark.png" alt="BlackLogo" />
        </SFooterLogoContainer>
        <SFooterSocialContainer>
          <SFooterSocial src="../assets/svg/Footer/fb.svg" alt="facebook" />
          <SFooterSocial
            src="../assets/svg/Footer/instagram.svg"
            alt="instagram"
          />
          <SFooterSocial src="../assets/svg/Footer/tiktok.svg" alt="tiktok" />
        </SFooterSocialContainer>
      </SFooterLogoSocial>
      <SFooterInfoContact>
        <SFooterInfo>
          <div>საინფორმაციო</div>
          <div>
            <span>ჩვენს შესახებ</span>
            <span>საგარანტიო პირობები</span>
            <span>მიწოდების პირობები</span>
            <span>კონფიდენციალურობა</span>
          </div>
        </SFooterInfo>
        <SFooterContact>
          <div>კონტაქტი</div>
          <div>
            <span>579-33-33-11</span>
            <span>mixmall.ge@gmail.com</span>
          </div>
        </SFooterContact>
      </SFooterInfoContact>
    </SFooter>
  );
};
