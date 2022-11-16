import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLoginPage from '../pages/adminLogin';

const AdminRoute = (props) => {
  if (Cookies.get('token') !== undefined && Cookies.get('user') !== undefined) {
    alert('Anda sudah login sebagai user, silahkan logout terlebih dahulu');
    return <Navigate to={'/'} />;
  } else {
    if (Cookies.get('admin') === undefined) {
      window.alert('Anda belum login!');
      return <Navigate to={'/adminLogin'} />;
    } else if (Cookies.get('admin') !== undefined) {
      return props.children;
    }
  }
};

export default AdminRoute;
