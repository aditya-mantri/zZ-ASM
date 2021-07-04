import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkContainer,  SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import Wave from '../../wavesmusic/App'

//import { useHistory } from 'react-router';
//

const Footer = ({ecomm , id}) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer id={id}>
      <FooterWrap>
        <FooterLinkContainer>
            <Wave  ecomm={ecomm}/>  
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
             zZ_ASM. 
            </SocialLogo>
            <SocialLogo to='/Shop-E-Wasool' >
             <img src='https://smith.queensu.ca/_templates/images/content/icons/shop.png' height="35px" width="35px" alt=''/>
            </SocialLogo>
            <WebsiteRights>zZ_ASM. © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/aditya.mantri.58/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/o_.mantri._o/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/aditya-mantri-8bb358123/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
