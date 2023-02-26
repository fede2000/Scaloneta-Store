import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


`;

export const LoginInputStyled = styled.input`
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  color: white;
  background-color: #75AADB;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  caret-color: white;

  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
  }

  @media (max-width: 1025px){

  }

  @media (max-width: 800px){
  padding: .8rem 1rem;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
