import React from 'react';
import { useState } from 'react';
import { registerWithEmailAndPassword } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    profile_image: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    let { name, profile_image, email, password } = input;
    if (
      email === '' ||
      profile_image === '' ||
      password === '' ||
      name === ''
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'Inputan tidak boleh kosong!',
        icon: 'error',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
      });
    } else {
      registerWithEmailAndPassword(name, profile_image, email, password);
      navigate('/');
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>Register</h1>

        <form onSubmit={handleRegister}>
          <label htmlFor="email" className="form-label">
            Nama
          </label>
          <input
            className="form-control"
            name="name"
            onChange={handleChange}
            value={input.name}
            type="name"
            placeholder="Nama"
          />
          <label htmlFor="profile_image" className="form-label">
            Link foto profil
          </label>
          <input
            className="form-control"
            name="profile_image"
            onChange={handleChange}
            value={input.profile_image}
            type="profile_image"
            placeholder="Link foto profil"
          />

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            name="email"
            onChange={handleChange}
            value={input.email}
            type="email"
            placeholder="Email"
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            name="password"
            onChange={handleChange}
            value={input.password}
            type="password"
            placeholder="Password"
          />
          <p className="float-start mt-3">
            Sudah punya akun? <Link to="/login">Login</Link>
          </p>
          <button
            className="btn btn-primary rounded-pill float-end mt-3"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
