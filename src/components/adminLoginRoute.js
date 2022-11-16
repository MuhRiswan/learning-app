import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminLoginPage from '../pages/adminLogin';

const AdminLoginRoute = () => {
  if (Cookies.get('token') !== undefined && Cookies.get('user') !== undefined) {
    alert('Anda sudah login sebagai user, silahkan logout terlebih dahulu');
    return <Navigate to={'/'} />;
  } else {
    if (Cookies.get('admin') === undefined) {
      return (
        <>
          <AdminLoginPage />
        </>
      );
    } else if (Cookies.get('admin') !== undefined) {
      window.alert('anda sudah login');
      return <Navigate to={'/admin/adminDashboard'} />;
    }
  }
};

export default AdminLoginRoute;
