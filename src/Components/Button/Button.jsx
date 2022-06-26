import React from "react";
import "./button.css";

const Styles = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn_success_solid",
  "btn_log_solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
];

const Sizes = ["btn--medium", "btn--large"];

const Button = ({ children, type, buttonStyle, buttonSize, onClick }) => {
  const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
  return (
    <div>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
export default Button;
