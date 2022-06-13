import React from "react";
import Button from "../Button/Button";
import "./login.css";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="login">
        <div>
          <p>
            <h3>SIGN IN</h3>
          </p>
        </div>
        <input className="inputLogin" type="text" placeholder="email" />
        <input className="inputLogin" type="text" placeholder="password" />
        <div className="radio">
          <input className="inputRadio" type="radio" value="save" />
          <label for="save password">Save password</label>
        </div>

        <Button children="Login" type="button" buttonStyle="btn--primary--solid" buttonSize="btn--large" />
      </div>
    </div>
  );
};
export default Login;
