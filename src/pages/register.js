import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    profile_image: '',
    email: '',
    password: '',
  });
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  // console.log(`user` + JSON.stringify(user), `loading` + loading);
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let { name, profile_image, email, password } = input;

    registerWithEmailAndPassword(name, profile_image, email, password);
    navigate('/');
    // console.log(user);
    // console.log(user.accessToken);
    // console.log(user.uid);
  };

  return (
    <div>
      <h1>Register</h1>
      <label>
        Nama
        <input
          name="name"
          onChange={handleChange}
          value={input.name}
          type="name"
          placeholder="name"
        />
      </label>
      <form onSubmit={handleRegister}>
        <label>
          Link Foto Profil
          <input
            name="profile_image"
            onChange={handleChange}
            value={input.profile_image}
            type="profile_image"
            placeholder="profile_image"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            onChange={handleChange}
            value={input.email}
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            onChange={handleChange}
            value={input.password}
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
