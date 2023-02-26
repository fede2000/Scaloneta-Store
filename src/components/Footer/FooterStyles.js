import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #000;
`

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    flex-wrap: wrap;
    width: 100%;
    gap: 70px;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 992px) {
    gap: 40px;
  }
`

export const FooterMsg = styled.div`
    text-align: justify;
    font-weight: 700;
    font-size: 24px;
    max-width: 450px;

    @media (max-width: 992px) {
    max-width: 600px;
    text-align: center;
  }
`

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    font-size: 14px;
    max-height: 100px;

    @media (max-width: 992px) {
    align-items: center;
    gap: 20px;
  }
`

export const FooterSocial = styled.div`
    display: flex;
    gap: 20px;
`


export const FooterTerms = styled.div`
    display: flex;
    gap: 25px;

    @media (max-width: 992px) {
    justify-content: center;
    text-align: center;
  }
`

export const FooterParagraph = styled.p`
font-size: 1rem;
font-weight: 300;
  @media (max-width: 992px) {
    text-align: center;
  }
`

export const FooterLink = styled.a`

`