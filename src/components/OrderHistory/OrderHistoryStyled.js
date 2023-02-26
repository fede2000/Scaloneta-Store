import styled from 'styled-components';
import { GlobalSecondTitle, GlobalParagraph, GlobalTable} from '../GlobalComponents/GlobalComponents';

export const MyOrdersContainer = styled.div`
  padding: 1rem;
  /* display: flex; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
  p,b{
    color: #000;
  }
`;

export const TitleMyOrders = styled(GlobalSecondTitle)`
  color: #000;
  margin: 5px 0;
`

export const ParagraphMyOrders = styled(GlobalParagraph)``

export const MyOrdersTable = styled(GlobalTable)`
    
`

export const OrderContainer = styled.div`
  background: #75AADB;
  width: 380px;
  border-radius: 15px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
