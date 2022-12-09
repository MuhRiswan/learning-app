import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginPage from '../pages/login';

const LoginRoute = () => {
  if (Cookies.get('token') === undefined) {
    return (
      <>
        <LoginPage />
      </>
    );
  } else if (Cookies.get('token') !== undefined) {
    window.alert('anda sudah login');
    return <Navigate to={'/'} />;
  }
};

export default LoginRoute;
