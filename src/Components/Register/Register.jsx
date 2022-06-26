import React from "react";
import { checkLogin, validationEmail, validationPass } from "../../utils/Validation";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./register.css";

const Register = () => {
  return (
    <div className="registerPage">
      <div className="register">
        <div>
          <h3>Register your account</h3>
        </div>
        <Input
          inputStyle="input--primary--solid"
          inputSize="input--medium"
          type="text"
          placeholder="email"
          onChange={validationEmail}
        />

        <Input
          inputStyle="input--warning--solid"
          inputSize="input--medium"
          type="text"
          placeholder="password"
          onChange={validationPass}
        />
        <Input inputStyle="input--danger--solid" inputSize="input--medium" type="text" placeholder="repeat password" />
        <Input inputStyle="input_success_solid" inputSize="input--medium" type="number" placeholder="phone number" />
        <Button
          children="Register"
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
          checkLogin={checkLogin}
        />
      </div>
    </div>
  );
};
export default Register;
