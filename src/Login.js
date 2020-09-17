import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon login"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text"></input>

          <h5>Password</h5>
          <input type="password"></input>

          <button className="login__signInButton">Sign In</button>
        </form>

        <p>
          By Signing In to AMAZON CLONE, You give permission to send the Ad's
        </p>

        <button className="login__registerButton">
          Create an Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
