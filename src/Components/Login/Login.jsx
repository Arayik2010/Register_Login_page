import React, { useEffect, useState } from "react";
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

  const [log, setLog] = useState(false)



  const checkData = () => {
    if (email.current.value === getEmail && password.current.value === getPassword) {
      setLog(true)
    }
  };

 

  // localStorage.setItem("emaildata", "abc@gmail.com");
  //     localStorage.setItem("passwordData", "AR25ar#$");

  return (
    <>
      {" "}
      {log ? (<Home />) : (
        <div className="loginPage">
          <div className="login">
            <div>
              <h3>SIGN IN</h3>
            </div>

            <form>
              <label htmlFor="blogs_name">login
                <Input
                  id="login_name"
                  inputStyle="input--primary--solid"
                  inputSize="input--large"
                  type="text"
                  placeholder="email"
                  ref={email}
                />
              </label>
              <label htmlFor="pass_name">Password
                <Input
                  id='pass_name'
                  inputStyle="input--warning--solid"
                  inputSize="input--large"
                  type="password"
                  placeholder="password"
                  ref={password}
                />
              </label>
              <div className="checkbox">
                <input className="inputCheckbox" type="checkbox" value="save" />
                <label for="save password">Save password</label>
              </div>

              <Button
                children="Login"
                type="button"
                buttonStyle="btn_log_solid"
                buttonSize="btn--large"
                onClick={checkData}
              />
            </form>
          </div>
        </div>
      )}



    </>
  );
};
export default Login;
