import React from "react";
import {
  SFooter,
  SFooterContact,
  SFooterContactIcon,
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
            <SFooterContactIcon>
              <img src="assets/svg/phone.svg" alt="" width={20} />
              <span>579-55-55-55</span>
            </SFooterContactIcon>
            <SFooterContactIcon>
              <img src="assets/svg/envelope.svg" alt="" width={20} />
              <span>primebasket12@gmail.com</span>
            </SFooterContactIcon>
          </div>
        </SFooterContact>
      </SFooterInfoContact>
    </SFooter>
  );
};
