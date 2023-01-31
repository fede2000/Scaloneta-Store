import { Formik } from 'formik'
import React from 'react'
import { Form, LoginButtonGoogle, LoginContainer, LoginEmail, LoginImgContainer, LoginPassword, LoginSection } from './LoginStyled'
import { loginInitialValues, loginValidationSchema } from '../../../formik';
import {
  signInUser,
  signInWithGoogle,
  createUserProfileDocument,
} from '../../../firebase/firebase-utils';
import { ToastContainer, toast } from 'react-toastify';
import LoginInput from "../LoginInput/LoginInput"
import Submit from "../Submit/Submit"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    
    <LoginSection>
      
      <LoginContainer>
        <LoginImgContainer>
          <img src="images/login.svg" alt="" />
        </LoginImgContainer>
        <Formik initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
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
          <Form>
          <h1>Login</h1>
            <LoginInput name='email' type='text' placeholder='Email'></LoginInput>
            <LoginInput name='password' type='password' placeholder='Password' />
            <Link to='/reset'>
              <LoginPassword>
                ¿Olvidaste la contraseña? Reestablecela
              </LoginPassword>
            </Link>
            <p>O podes ingresar con</p>
            <LoginButtonGoogle type='button' onClick={signInWithGoogle}>
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
            </LoginButtonGoogle>
            <Link to='/register'>
              <LoginEmail>
                ¿No tenes cuenta? Create una
              </LoginEmail>
            </Link>
            <Submit>Iniciar Sesión</Submit>
          </Form>
        </Formik>
      </LoginContainer>
    </LoginSection>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default Login