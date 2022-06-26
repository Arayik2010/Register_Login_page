import React from "react";
import Button from "../Button/Button";

const Home = () => {
  const handlerClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <h1>Home page</h1>
      <Button
        children="Logout"
        type="button"
        buttonStyle="btn_log_solid"
        buttonSize="btn--large"
        onClick={handlerClick}
      />
    </div>
  );
};
export default Home;
