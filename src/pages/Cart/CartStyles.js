import styled from "styled-components";
import { GlobalContainer, GlobalParagraph, GlobalSecondTitle, GlobalSection, GlobalTable, GlobalTitleSection } from "../../components/GlobalComponents/GlobalComponents";

export const SectionCart = styled(GlobalSection)`
    width: 100%;
    padding: 4rem 0;
`

export const TitleCart = styled(GlobalTitleSection)`
    color: #000;
    margin-bottom: .5rem;
`

export const CartContainer = styled(GlobalContainer)`
    display: block;
    color: #000;
    padding: 0 2rem;
    p,b{
      color: #000;
      font-size: 1.2rem;
    }
`

export const CartTable = styled(GlobalTable)`
  
    .icon{
    background-color: red;
    width: 25px;
    height: 25px;
    font-size: 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    cursor: pointer;

    :hover{
      transform: translateY(-2px);
    }

    @media (max-width:420px){
      width: 20px;
      height: 20px;
        font-size: .7rem;
          /* display: none; */
        }
  }
  
`

export const CountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;



  p,b{
    color: #000;
    text-align: center;
    font-size: 1rem;
    @media (max-width:420px){
        font-size: .7rem;
          /* display: none; */
        }
  }
`

export const ButtonCount = styled.button`
    border: 1px solid blue;
    font-size: 1rem;
    font-weight: 400;
    padding: 4px 6px;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    background-color: #75aadb;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    color: #fff;
    @media (max-width:420px){
        font-size: .7rem;
          /* display: none; */
        }

`


export const SummaryContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
`

export const ButtonClearCart = styled.button`
        font-size: 1rem;
    font-weight: 400;
    padding: 6px 8px;
    margin: 0 5px 0 0;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    color: #fff;
    background: orangered;

    :hover{
        transform: translateY(-2px);
    }
`

export const CheckoutContainer = styled.div`
  width: 100%;
`

export const BackToProducts = styled.div`
  font-size: 1.2rem;
  a{
    color: #000;
    font-weight: 700;
    transition: all 0.2s;
    :hover{
        transform: translateY(-2px);
        color: #75AADB;
    }
  }
`

export const Checkout = styled.div`
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 500px;
`

export const CheckoutParagraph = styled(GlobalParagraph)`

`

export const Text = styled.div`

`

export const ButtonCheckout = styled.button`
    font-size: 1.6rem;
    font-weight: 400;
    padding: 6px 8px;
    margin: 0 5px 0 0;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    color: #fff;
    background: #007bff;
    width: 100%;

    :hover{
        transform: translateY(-2px);
    }
`

export const ContactDetails = styled.div`
  
`