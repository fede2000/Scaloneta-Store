import styled from 'styled-components';
import { GlobalContainer, GlobalTitleSection } from '../../components/GlobalComponents/GlobalComponents';

export const MyOrdersContainer = styled(GlobalContainer)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  display: block;
  h2{
    color: #000;
  }
`;

export const MyOrdersTitle = styled(GlobalTitleSection)`
  text-align: center;
`;

export const MyOrdersBtnContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
