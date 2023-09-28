import React from "react";
import DrawerAppBar from "../Components/NavBarHP";
import SignUp from "../Components/SignUp";

export default function Homepage() {
  return (
    <div className="HomePage">
      <h1> Welcome to PlanAhead</h1>
      <DrawerAppBar />
      <div className="SignUpContainer">
        {" "}
        <img src="../../public/Images/undraw.svg" alt="logo" />
        <SignUp />
      </div>
    </div>
  );
}
