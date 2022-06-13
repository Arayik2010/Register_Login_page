import React from "react";
import Navbar from "../Navbar/Navbar";
import RouterLink from "../Routes/RouterLink";
import "../../App.css";

const Main = () => {
  return (
    <div>
      <div className="navHeader">
        <Navbar />
        <RouterLink />
      </div>
    </div>
  );
};
export default Main;
