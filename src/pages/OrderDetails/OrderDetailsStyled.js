import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalContainer, GlobalParagraph, GlobalSection, GlobalTable, GlobalTitleSection } from '../../components/GlobalComponents/GlobalComponents';


export const OrderDetailsSection = styled(GlobalSection)`
  /* height: 100vh; */
  padding: 5rem 0;
`

export const OrderDetailsContainer = styled(GlobalContainer)`
  padding: 5px;
  width: 100%;
  overflow-x: auto;

  display: block;
  position: relative;


  a{
    color: #000;

  }
`

export const TitleOrderDetails = styled(GlobalTitleSection)``

export const ParagraphOrderDetails = styled(GlobalParagraph)``

export const DivHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  align-items: center;
`

export const OrdersDetailsTable = styled(GlobalTable)`
    /* width: 1500px; */
    
`
export const OrderDetailsContainerInfo = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 25px;
  h3{
    color: #000;
    font-size: 1.8rem;
  }

  @media (max-width:450px){
      h3{
        font-size: 1.1rem;
      }
        }
`;

export const ProductCost= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p,span{
    color: #333;
    font-size: 1.2rem;
  }

  @media (max-width:450px){
      p,span{
        font-size: 1rem;
      }
        }
`;

export const ShippingCost = styled(ProductCost)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalCost = styled(ProductCost)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  p,span{
    color: #000;
    font-size: 1.4rem;
  }

  @media (max-width:450px){
      p,span{
        font-size: 1rem;
      }
        }
`;
