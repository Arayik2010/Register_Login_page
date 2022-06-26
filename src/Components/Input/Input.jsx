import React from "react";

import "./input.css";

const Styles = ["input--primary--solid", "input--warning--solid", "input--danger--solid", "input_success_solid"];
const Sizes = ["input--medium", "input--large"];

const Input = React.forwardRef(({ placeholder, inputStyle, inputSize, type, onChange },ref) => {
  const checkInputStyle = Styles.includes(inputStyle) ? inputStyle : Styles[0];
  const checkInputSize = Sizes.includes(inputSize) ? inputSize : Sizes[0];

  return (
    <div>
      <input
        className={`input ${checkInputStyle} ${checkInputSize}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
});
export default Input;
