import React, { useState } from 'react';
import '../styles/Login.css';
import {Link, useHistory } from 'react-router-dom';
import { auth } from '../Firebase'

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault();
    //login logic
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      //logged in redirect
      history.push("/");
      setEmail("");
      setPassword("")
    })
    .catch ((e) => (e.message));

  }

  const register = e => {
    e.preventDefault();
    //register logic
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      //logged in redirect
      history.push("/");
      setEmail("");
      setPassword("")
    })
    .catch ((e) => (e.message));
  }


  return (
    <div className = "login">
      <Link to = "/">
        <img className = "login__logo" src="https://upload.wikipedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
        <h5>Email</h5>
        <input value = {email} onChange = {e => setEmail( e.target.value)} type="email" />
        <h5>Password</h5>
        <input value = {password} onChange = {e => setPassword( e.target.value)} type="password" />
        <button onClick = {login} type = "submit" className = "login__signInButton">Sign In</button>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button onClick = {register} type = "submit" className = "login__registerButton">Create your Amazon Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
