import React, { useRef } from "react";
import { checkLogin, validationEmail, validationPass } from "../../utils/Validation";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Login from "../Login/Login";
import "./register.css";

const Register = () => {
  const email = useRef();
  const password = useRef();

  const handleSubmit = () => {
    if (email.current.value && password.current.value) {
      localStorage.setItem("emaildata", email.current.value);
      localStorage.setItem("passwordData", password.current.value);


    }
    return true
    // window.location.reload();

  };
  return (
    <>

      <div className="registerPage">
        <div className="register">
          <div>
            <h3>Register your account</h3>
          </div>
          <label htmlFor="email_name">Email
            <Input
              id="emiai_name"
              inputStyle="input--primary--solid"
              inputSize="input--medium"
              type="text"
              placeholder="email"
              onChange={validationEmail}
              ref={email}
            />
          </label>
          <label htmlFor="pass_name">Password
            <Input
              id="pass_name"
              inputStyle="input--warning--solid"
              inputSize="input--medium"
              type="text"
              placeholder="password"
              onChange={validationPass}
              ref={password}
            />
          </label>

          <Button
            children="Register"
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
            onClick={handleSubmit}
          />
        </div>
      </div>


    </>


  );
};
export default Register;
