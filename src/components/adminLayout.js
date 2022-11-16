import Cookies from 'js-cookie';
import React from 'react';
import Navbar from './adminNavbar';
import { Navigate } from 'react-router-dom';

const AdminLayout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default AdminLayout;
