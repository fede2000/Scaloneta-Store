import styled from "styled-components";
import { GlobalParagraph, GlobalSecondTitle } from "../GlobalComponents/GlobalComponents";

export const CheckoutSummaryContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  @media (max-width:800px){
  width: 50%;
  padding: 0 20px;

}
  @media (max-width:620px){
    margin-bottom: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1rem;

}
  @media (max-width:420px){
    margin-bottom: 1rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;

}
  
`

export const CheckoutSummaryTitle = styled(GlobalSecondTitle)`
  color: #000;
  margin-bottom: 2rem;
  @media (max-width:1024px){


}
`

export const CheckoutContent = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
  padding: 1rem;
  border-radius: 15px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 0 auto;
  color: #000;
  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
  @media (max-width:1024px){


}


`

export const CheckoutSummaryButton = styled.button`
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
  color: #000;

  :hover {
  transform: translateY(-2px);
}
@media (max-width:1024px){


}
`

export const CardCheckoutSummary = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border: 1px solid #75aadb;
  margin-bottom: 5px;
  color: #000;
  border-radius: 15px;

  h4,p{
    color: #000;
  }
  h4{
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
  @media (max-width:920px){

    h4{
      font-size: 1rem;
    }
}

`

export const ParagraphCheckoutSummary = styled(GlobalParagraph)`
  margin-bottom: 1rem;
`

export const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  h4,h3 {
    color: #000;
  }
`