import React from 'react'
import { SFooter, SFooterContact, SFooterInfo, SFooterLogo, SFooterLogoContainer, SFooterLogoSocial, SFooterSocial, SFooterSocialContainer } from './Footer.styled'

export const Footer = () => {
  return (
    <SFooter>
      <SFooterLogoSocial>
        <SFooterLogoContainer>
          <SFooterLogo src='../assets/images/LogoDark.png' alt='BlackLogo'/>
        </SFooterLogoContainer>
        <SFooterSocialContainer>
          <SFooterSocial src='../assets/svg/Footer/fb.svg' alt='facebook'/>
          <SFooterSocial src='../assets/svg/Footer/instagram.svg' alt='instagram'/>
          <SFooterSocial src='../assets/svg/Footer/tiktok.svg' alt='tiktok'/>
        </SFooterSocialContainer>
      </SFooterLogoSocial>
      <SFooterInfo>
        <h4>საინფორმაციო</h4>
        <span>ჩვენ შესახებ</span>
        <span>საგარანტიო პირობები</span>
        <span>მიწოდების პირობები</span>
        <span>კონფიდენციალურობა</span>
      </SFooterInfo>
      <SFooterContact>
        <h4>კონტაქტი</h4>
        <span>579-33-33-11</span>
        <span>mixmall.ge@gmail.com</span>
      </SFooterContact>
    </SFooter>
  )
}
