import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from 'formik';
import { GlobalSecondTitle, GlobalTable } from "../GlobalComponents/GlobalComponents";


export const CheckoutDateForm = styled.div`
  width: 40%;
  margin: 0 auto;
  @media (max-width:800px){
  width: 50%;
  padding: 0 20px;

}
  `


export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const CheckoutFormTitle = styled(GlobalSecondTitle)`
    color: #000;
  `

export const FormCheckout = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin: 2rem 0;
  justify-content: space-between;
  border: 1px solid transparent;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  
`;

