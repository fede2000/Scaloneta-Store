import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;
  @media (max-width:1024px){


}
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin-top: .7rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  font-size: 1.4rem;
  color: #000;
  @media (max-width:1024px){
    font-size: 1rem;

  }
`;

export const InputStyled = styled.input`
  background-color: #ddd;
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : '1px solid #555')};
  border-radius: 8px;
  height: 50px;
  padding: 0.5rem 1rem;
  color: #000;
  font-size: 1.3rem;
  width: 100%;
  margin: .7rem 0;

  ::placeholder {
    color: #000;
    opacity: 50%;
    font-size: 1.3rem;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(#000) inset;
  }
  @media (max-width:1024px){
    font-size: 1rem;
    padding: .2rem 1rem;
    height: 40px;

    ::placeholder{
      font-size: 1rem;
    }

  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
