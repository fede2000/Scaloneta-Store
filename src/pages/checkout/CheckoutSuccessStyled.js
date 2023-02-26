import styled from "styled-components";
import { GlobalContainer, GlobalSection } from "../../components/GlobalComponents/GlobalComponents";

export const CheckoutSuccessSection = styled(GlobalSection)`
    height: 86vh;
    display: block;
    

`

export const CheckoutSuccessContainer = styled(GlobalContainer)`
    margin: 5rem 0;
    justify-content: space-between;
    flex-direction: column;
    height: 400px;
    margin: 0 auto;

    h2,p{
        color: #000;
    }

    h2{
        font-size: 2.5rem;
    }

    p{
        font-size: 1.8rem;
    }

`
export const ButtonCheckoutSuccess = styled.div`

`