import { Formik } from 'formik'
import React from 'react'

import { forgotPasswordInitialValues, forgotPasswordValidationSchema } from '../../../formik';
import {
    resetPassword
} from '../../../firebase/firebase-utils';

import LoginInput from "../LoginInput/LoginInput"
import Submit from "../Submit/Submit"
import { Link } from 'react-router-dom';
import { ResetContainer, ResetDiv, ResetEmail, ResetForm, ResetImgContainer, ResetPassword, ResetSection } from './ResetStyles';

const Login = () => {
  return (
    <ResetSection>
      
      <ResetContainer>
        <ResetImgContainer>
          <img src="images/login.svg" alt="" />
        </ResetImgContainer>
        <Formik initialValues={forgotPasswordInitialValues}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={async (values, action) => {
            await resetPassword(values.email);
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
            <Submit></Submit>
            <ResetDiv>
                <Link to='/login'>
                    <ResetEmail>
                        Login
                    </ResetEmail>
                </Link>
                <Link to='/register'>
                    <ResetEmail>
                        Register
                    </ResetEmail>
                </Link>
            </ResetDiv>
            
          </ResetForm>
        </Formik>
      </ResetContainer>
    </ResetSection>
  )
}

export default Login