import styled from "styled-components";

import { Form as FormikForm } from 'formik';
import { GlobalContainer, GlobalSection } from "../../components/GlobalComponents/GlobalComponents";


export const AuthSection = styled(GlobalSection)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: calc(100vh - 207px);

`

export const AuthContainer = styled(GlobalContainer)`
    gap: 50px;
`

export const AuthImgContainer = styled.div`
    width: 50%;


    img{
        width: 100%;
        height: 100%;
        color: #75aadb;
    }
`


export const AuthForm = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 20px;
  color: #000;
  height: 100%;
  width: 450px;
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
  }
`;

export const AuthPassword = styled.p`
  margin: 0;

  color: #000;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
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
  width: 350px;
`;

export const AuthEmail = styled.p`
  color: #000;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
