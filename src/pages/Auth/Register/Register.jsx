import { Formik } from 'formik'
import React from 'react'
import { registerInitialValues, registerValidationSchema } from '../../../formik';
import {
  createUser,
  signInWithGoogle
} from '../../../firebase/firebase-utils';

import LoginInput from "../LoginInput/LoginInput"
import Submit from "../Submit/Submit"
import { Link, useNavigate } from 'react-router-dom';
import { RegisterButtonGoogle, RegisterContainer, RegisterEmail, RegisterForm, RegisterImgContainer, RegisterPassword, RegisterSection } from './RegisterStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Loader from '../../../components/Loader/Loader';



const Register = () => {
const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate()
  return (
    <>
    {isLoading && <Loader/>}
    <RegisterSection>
      
      <RegisterContainer>

        <Formik initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values,actions) => {
          setIsLoading(true);
          try {
            await createUser(values.email, values.password, values.name);
            setIsLoading(false);
            navigate("/login");
          } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              toast.error("Mail en uso")
              setIsLoading(false);
            }
          }
          actions.resetForm();
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
            <Submit>Registrate</Submit>
          </RegisterForm>
        </Formik>
        <RegisterImgContainer>
          <img src="images/register.svg" alt="" />
        </RegisterImgContainer>
      </RegisterContainer>
    </RegisterSection>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default Register