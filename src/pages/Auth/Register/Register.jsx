import { Formik } from 'formik'
import React, { useState } from 'react'
import { registerInitialValues, registerValidationSchema } from '../../../formik';
import {
  createUser,
  signInWithGoogle
} from '../../../firebase/firebase-utils';

import LoginInput from "../LoginInput/LoginInput"
import Submit from "../Submit/Submit"
import { Link, useNavigate } from 'react-router-dom';
import { RegisterButtonGoogle, RegisterContainer, RegisterEmail, RegisterForm, RegisterImgContainer, RegisterSection } from './RegisterStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
  const [submitting, setSubmitting] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const header = new Headers({ "Access-Control-Allow-Origin": "*" });
  const handleSubmit = async (values) => {
    // You can send the POST request here using fetch or Axios
    try {
      console.log("handlesubmit")
      console.log("values handle 1",values)
      const response = await fetch('https://api-scaloneta-store.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {

          'Content-Type': 'application/json',
        },
        mode: "no-cors",
        body: JSON.stringify(
          values
        )
      }
      );
      console.log("values handle",values)
      let json = response
      console.log("json response",json)


      if (response.ok) {
        // Registration successful, you can handle success here
        console.log('Registration successful');
      } else {
        // Registration failed, you can handle errors here
        
        console.error('Registration failed',response.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

const navigate = useNavigate()
  return (
    <>
    <RegisterSection>
      
      <RegisterContainer>

        <Formik initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
        // onSubmit={async (values,actions) => {
          
        //   try {
        //     console.log("values",values)
        //     handleSubmit(values)
        //     // navigate("/login");
        //   } catch (error) {
        //     if (error.code === 'auth/email-already-in-use') {
        //       toast.error("Mail en uso")
        //       alert('Mail en uso');
              
        //     }
        //   }
        //   // actions.resetForm();
        // }}
        >
          <RegisterForm>
          <h1>Register</h1>
            <LoginInput name='name' type='text' id="name" value={formData.name} onChange={handleChange} placeholder='Name'></LoginInput>
            <LoginInput name='email' type='text' id= "email" value={formData.email} onChange={handleChange} placeholder='Email'></LoginInput>
            <LoginInput name='password' type='password' id="password" value={formData.password} onChange={handleChange} placeholder='Password' />
            
            <Link to='/login'>
              <RegisterEmail>
                ¿Ya tenes cuenta? Inicia Sesión
              </RegisterEmail>
            </Link>
            <Submit type="submit">Registrate</Submit>
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