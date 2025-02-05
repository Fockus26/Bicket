import React from 'react';
import { useLocation } from 'react-router-dom';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import Error404 from './General/Error404';
import 'css/Authentication.css'

function Authentication(props) {
  const { setIsLogin } = props
  const location = useLocation().pathname

  return (
    <>
      {
        location === '/authentication/sign-in' ? <SignIn setIsLogin={ setIsLogin } />
        : location === '/authentication/sign-up' ? <SignUp setIsLogin={ setIsLogin } />
        : <Error404 />
      }
    </>
  )
}

export default Authentication;
