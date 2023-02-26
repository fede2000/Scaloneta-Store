import styled from "styled-components";
import { GlobalContainer, GlobalSection, GlobalTitleSection } from "../../components/GlobalComponents/GlobalComponents";
import { motion } from 'framer-motion';
export const ContactSection = styled(GlobalSection)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const ContactContainer = styled(GlobalContainer)`
`

export const TitleContactSection = styled(GlobalTitleSection)`
  margin-bottom: 4rem;
`
export const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    padding: 0 2rem;

    @media (max-width:800px){

      flex-direction: column-reverse;
      align-items: center;
      gap: 20px;
      padding: 0 2rem;
      }
    

`

export const FormContact = styled.form`
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 1rem;
    border: 1px solid #ccc;
    max-width: 500px;
    margin: 0;
    width: 100%;
    margin-right: 1rem;

    @media (max-width:800px){
    }


    label{
      display: flex;
      margin: .7rem 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 80%;
      font-size: 1.4rem;
      color: #000;
      @media (max-width:520px){
        
        font-size: .7rem;
       
     }
    }
    input{
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
        font-size: .8rem;
      }

      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px var(#000) inset;
      }
      @media (max-width:520px){
        
        font-size: .8rem;
        height: 40px;
        padding: 0.4rem .8rem;
       
     }

   
    }

    input,
    select,
    textarea{
        display: block;
        font-size: 1rem;
        font-weight: 300;
        padding: 1rem;
        margin: 1rem auto;
        width: 100%;
        border: 1px solid #777;
        border-radius: 3px;
        outline: none;
        color: #000;
        @media (max-width:520px){
        
         font-size: .7rem;
        
      }
      }
`

export const ButtonContact = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #75aadb;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  width: 100%;
  max-width: 180px;
  margin: 1rem auto;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    
  }
  @media (max-width:800px){
    margin: .7rem auto ;
  }
  `

export const ContactDetails = styled.div`
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 2rem;
    background-color: #75aadc;
    color: #fff;
    max-width: 500px;
    h3,
    p {
      color: #000;
    }
    span {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 1rem;
        a,
        p {
          margin-left: 5px;
        }
      }
    @media (max-width:800px){
    padding: 1.3rem;
  }
`

export const DivIcons = styled.div`
        margin: 3rem 0;
        span {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 1rem;
        a,
        p {
          margin-left: 5px;
        }
      }
`


export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: .7rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  font-size: 1.4rem;
  color: #000;
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
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;