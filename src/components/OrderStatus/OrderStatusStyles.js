import styled from 'styled-components';

export const StatusStyled = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 1rem;
  padding: 0.3rem;
`;

export const CheckStyled = styled(StatusStyled)`
  background: #15be77;
`;

export const PendingStyled = styled(StatusStyled)`
  background: #ffa100;
`;

export const CancelStyled = styled(StatusStyled)`
  background: #ff005c;
`;
