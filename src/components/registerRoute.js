import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';
import RegisterPage from '../pages/register';

const RegisterRoute = () => {
  if (Cookies.get('token') === undefined) {
    return (
      <>
        <RegisterPage />
      </>
    );
  } else if (Cookies.get('token') !== undefined) {
    window.alert('anda sudah login');
    return <Navigate to={'/'} />;
  }
};

export default RegisterRoute;
