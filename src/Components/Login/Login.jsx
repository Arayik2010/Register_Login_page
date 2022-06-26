import React from "react";
import { useRef } from "react";
import Button from "../Button/Button";
import Home from "../Home/Home";
import Input from "../Input/Input";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emaildata");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (email.current.value === "abc@gmail.com" && password.current.value === "AR25ar#$") {
      localStorage.setItem("emaildata", "abc@gmail.com");
      localStorage.setItem("passwordData", "AR25ar#$");
     
    }
    window.location.reload();
  };

  return (
    <>
      {" "}
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <div className="loginPage">
          <div className="login">
            <div>
              <h3>SIGN IN</h3>
            </div>

            <form>
              <Input
                inputStyle="input--primary--solid"
                inputSize="input--large"
                type="text"
                placeholder="email"
                ref={email}
              />
              <Input
                inputStyle="input--warning--solid"
                inputSize="input--large"
                type="password"
                placeholder="password"
                ref={password}
              />
              <div className="checkbox">
                <input className="inputCheckbox" type="checkbox" value="save" />
                <label for="save password">Save password</label>
              </div>

              <Button
                children="Login"
                type="button"
                buttonStyle="btn_log_solid"
                buttonSize="btn--large"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
