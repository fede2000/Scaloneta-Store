import styled from "styled-components";
import { GlobalContainer, GlobalParagraph, GlobalSection, GlobalTitleSection } from "../../components/GlobalComponents/GlobalComponents";

export const CheckoutSection = styled(GlobalSection)`
    width: 100%;
    padding: 4rem 0;
    justify-content: baseline;
    display: block;
`

export const CheckoutContainer = styled(GlobalContainer)`
    margin: 0 auto;
    padding: 5rem 0;
    padding-top: 2rem;
    align-items: baseline;
    justify-content: space-between;

    @media (max-width:800px){
    gap: 10px;

    }
    @media (max-width:620px){
        flex-direction: column-reverse;
        padding: 3rem 0;

    }
`

export const CheckoutTitle = styled(GlobalTitleSection)`
    text-align: center;
` 

export const CheckoutParagraph = styled(GlobalParagraph)`
    font-size: 1.1rem;
    width: 90%;
    max-width: 1200px;
    margin: 2rem auto;
    margin-bottom: 0;
    /* padding-left: 3.5rem; */
    @media (max-width:430px){
        padding-left: 0;
    }
    
`