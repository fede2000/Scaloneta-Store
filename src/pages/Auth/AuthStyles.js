import styled from "styled-components";

import { Form as FormikForm } from 'formik';
import { GlobalContainer, GlobalSection } from "../../components/GlobalComponents/GlobalComponents";


export const AuthSection = styled(GlobalSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  @media (max-width: 800px){
      padding: 2rem 0;
      
    }
`

export const AuthContainer = styled(GlobalContainer)`
    gap: 50px;


    @media (max-width: 1025px){

    }

    @media (max-width: 800px){
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  
`

export const AuthImgContainer = styled.div`
    width: 50%;


    img{
        width: 100%;
        height: 100%;
        color: #75aadb;
    }
    @media (max-width: 1025px){

    }
`


export const AuthForm = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 20px;
  color: #000;

  width: 50%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem 2rem 0rem 2rem;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  overflow: hidden;

  p{
    color: black;
  }

  h1{
    font-size: 2rem;
    @media (max-width: 800px){
      font-size: 1.5rem;
    
    }
  }
  @media (max-width: 1025px){
    padding: 1rem;
    margin: 2rem auto;
    max-width: 350px;
  }

  @media (max-width: 800px){
    width: 100%;
    margin: 2rem 1rem;
    gap: 10px;
    
    }
`;

export const AuthPassword = styled.p`
  margin: 0;
  text-align: center;
  color: #000;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
  @media (max-width: 800px){
    padding: 0;
    margin: 0;
    font-size: .8rem;
    
    }
`;

export const AuthButtonGoogle= styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: 1px solid #000;
  border-radius: 1rem;
  color: #000;
  cursor: pointer;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1025px){
    padding: 1rem;
  }

  @media (max-width: 800px){
    padding: .5rem .8rem;
    
    }
`;

export const AuthEmail = styled.p`
  color: #000;
  text-align: center;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
  @media (max-width: 800px){
    padding: 0;
    margin: 0;
    font-size: .8rem;
    
    }
`;
