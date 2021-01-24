import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const history = useHistory()

  const initialValues = {
    username: '',
    password: ''
  }

  const [credentials, setCredentials] = useState(initialValues)

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      history.push('/colors')
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='text'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
