import { Formik } from 'formik'
import React from 'react'
import { registerInitialValues, registerValidationSchema } from '../../../formik';
import {
  signInUser,
  signInWithGoogle,
  createUserProfileDocument,
} from '../../../firebase/firebase-utils';

import LoginInput from "../LoginInput/LoginInput"
import Submit from "../Submit/Submit"
import { Link } from 'react-router-dom';
import { RegisterButtonGoogle, RegisterContainer, RegisterEmail, RegisterForm, RegisterImgContainer, RegisterPassword, RegisterSection } from './RegisterStyles';

const Register = () => {
  return (
    <RegisterSection>
      
      <RegisterContainer>

        <Formik initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async values => {
          try{
            const { user } = await signInUser(values.email, values.password);
            createUserProfileDocument(user);
          } catch( error ) {
            if (error.code === 'auth/wrong-password'){
              alert("Contraseña Incorrecta")
            }
            if (error.code === 'auth/user-not-found'){
              alert("Usuario no encontrado")
            }
          }
        }}>
          <RegisterForm>
          <h1>Register</h1>
            <LoginInput name='name' type='text' placeholder='Name'></LoginInput>
            <LoginInput name='email' type='text' placeholder='Email'></LoginInput>
            <LoginInput name='password' type='password' placeholder='Password' />
            <p>O podes ingresar con</p>
            <RegisterButtonGoogle type='button' onClick={signInWithGoogle}>
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
            </RegisterButtonGoogle>
            <Link to='/login'>
              <RegisterEmail>
                ¿Ya tenes cuenta? Inicia Sesión
              </RegisterEmail>
            </Link>
            <Submit></Submit>
          </RegisterForm>
        </Formik>
        <RegisterImgContainer>
          <img src="images/register.svg" alt="" />
        </RegisterImgContainer>
      </RegisterContainer>
    </RegisterSection>
  )
}

export default Register