import React from 'react'
import { FooterContainer, FooterInfo, FooterLink, FooterMsg, FooterParagraph, FooterSection, FooterSocial, FooterTerms } from './FooterStyles'
import { ImTwitter, ImInstagram} from 'react-icons/im'

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterMsg>
          <FooterParagraph>
              Compra todo de la Scaloneta, en un solo lugar.
          </FooterParagraph>
        </FooterMsg>
        <FooterInfo>
          <FooterSocial>
              <ImTwitter></ImTwitter>
              <ImInstagram></ImInstagram>
          </FooterSocial>
          <FooterParagraph>
                ScalonetaStore <span color='##75aadb'>@2023</span>
          </FooterParagraph>
          <FooterTerms>
            <FooterLink href='#'>Privacy</FooterLink>
            <FooterLink href='#'>terms of use</FooterLink>
          </FooterTerms>
        </FooterInfo>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer