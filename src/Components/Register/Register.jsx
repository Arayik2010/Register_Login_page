import React from "react";
import Button from "../Button/Button";
import "./register.css";

const Register = () => {
  return (
    <div className="registerPage">
      <div className="register">
        <div>
          <p>
            <h3>Register your account</h3>
          </p>
        </div>
        <input className="input" type="text" placeholder="email" />
        <input className="input" type="text" placeholder="password" />
        <input className="input" type="text" placeholder="repeat password" />
        <input className="input" type="text" placeholder="phone number" />
        <Button children="Register" type="button" buttonStyle="btn--primary--solid" buttonSize="btn--large" />
      </div>
    </div>
  );
};
export default Register;
