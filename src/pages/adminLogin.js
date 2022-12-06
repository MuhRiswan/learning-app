import React from 'react';
import { useState, useContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const AdminLogin = () => {
  const { contextState } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = input;
    if (email === 'admin' && password === '123') {
      Cookies.set('admin', '1', { expires: 1 });
      navigate('/admin/adminDashboard');
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleLogin}>
        <div className=" col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={input.email}
            placeholder="Email..."
          />
        </div>
        <br />
        <div className=" col-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
            value={input.password}
            placeholder="Password..."
          />
        </div>

        <p className="float-start mt-3">
          <Link to="/register">Register</Link>
        </p>
        <button
          className="btn btn-primary rounded-pill float-end mt-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
