import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Login = () => {
  const navigate = useNavigate();
  const { contextState } = useContext(GlobalContext);
  const { setIsLoggedIn } = contextState;
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

    logInWithEmailAndPassword(email, password);
    setIsLoggedIn(true);
    navigate('/');
  };
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
