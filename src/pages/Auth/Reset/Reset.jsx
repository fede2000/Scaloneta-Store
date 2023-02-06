import { Formik } from 'formik'
import React, { useState }  from 'react'

import { forgotPasswordInitialValues, forgotPasswordValidationSchema } from '../../../formik';
import { toast } from 'react-toastify';
import LoginInput from "../LoginInput/LoginInput"
import Submit from "../Submit/Submit"
import { Link } from 'react-router-dom';
import { ResetContainer, ResetDiv, ResetEmail, ResetForm, ResetImgContainer, ResetPassword, ResetSection } from './ResetStyles';
import Loader from '../../../components/Loader/Loader';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebase/firebase-utils';

const Reset = () => {
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (email) => {
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Verifique su correo electrónico para el cambio de contraseña.");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("usuario no encontrado");
      });
  };
  return (
    <>
    {isLoading && <Loader />}
    <ResetSection>
      
      <ResetContainer>
        <ResetImgContainer>
          <img src="images/reset.svg" alt="" />
        </ResetImgContainer>
        <Formik initialValues={forgotPasswordInitialValues}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={async (values, action) => {
            resetPassword(values.email);
            action.resetForm();
        }}>
          <ResetForm>
          <h1>Reestablecer Contraseña</h1>
            <LoginInput name='email' type='text' placeholder='Email de Recuperación'></LoginInput>
            <Link to='/login'>
                    <ResetEmail>
                        ¿Ya te acordaste la contraseña? Volve
                    </ResetEmail>
                </Link>
            <Submit>Restablecer Contraseña</Submit>
            <ResetDiv>
                <Link to='/login'>
                    <ResetEmail>
                        - Login
                    </ResetEmail>
                </Link>
                <Link to='/register'>
                    <ResetEmail>
                        - Register
                    </ResetEmail>
                </Link>
            </ResetDiv>
            
          </ResetForm>
        </Formik>
      </ResetContainer>
    </ResetSection>

    </>
  )
}

export default Reset