import { Formik } from 'formik'
import React, { useState }  from 'react'
import { Form, LoginButtonGoogle, LoginContainer, LoginEmail, LoginImgContainer, LoginPassword, LoginSection } from './LoginStyled'
import { loginInitialValues, loginValidationSchema } from '../../../formik';
import {
  signInUser, auth,
  createUserProfileDocument,
} from '../../../firebase/firebase-utils';
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from 'react-toastify';
import LoginInput from "../LoginInput/LoginInput"
import Submit from "../Submit/Submit"
import { Link, useNavigate  } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../../redux/user/user-actions';
// import { selectPreviousURL } from "../../redux/slice/cartSlice";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const redirectUser = () => {
    navigate("/");
  };
  const dispatch = useDispatch();

    // Login with Goooglr
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          dispatch(userActions.toggleIsLoggedIn())
          toast.success("Login Successfully");
          redirectUser();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };
  return (
    <>
    {isLoading && <Loader />}
    <LoginSection>
      <LoginContainer>
        <LoginImgContainer>
          <img src="images/login.svg" alt="" />
        </LoginImgContainer>
        <Formik initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          setIsLoading(true);
          try{
            const { user } = await signInUser(values.email, values.password);
            dispatch(userActions.toggleIsLoggedIn())
            setIsLoading(false);
            redirectUser();
            window.location.reload();
            toast.success("Iniciaste Sesión");
          } catch( error ) {
            if (error.code === 'auth/wrong-password'){
              setIsLoading(false);
              toast.error("Contraseña incorrecta");
            }
            if (error.code === 'auth/user-not-found'){
              setIsLoading(false);
              toast.error("usuario no encontrado");
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
    </>
  )
}

export default Login