import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';

const RegulerUserRoute = (props) => {
  if (Cookies.get('admin') !== undefined) {
    window.alert('Anda login sebagai admin!');
    return <Navigate to={'/admin/adminDashboard'} />;
  } else {
    if (Cookies.get('token') !== undefined) {
      return props.children;
    } else {
      window.alert('Anda belum login!');
      return <Navigate to={'/login'} />;
    }
  }
};

export default RegulerUserRoute;
