import React from "react";
import DrawerAppBar from "../Components/NavBarHP";
import Login from "../Components/LoginForm";


export default function LoginPage() {
  return (
    <div className="LoginPage">
      <h1> Welcome to PlanAhead</h1>
      <DrawerAppBar />
      <div className="LoginContainer">
        {" "}
        <img src="../../public/Images/Log.svg" alt="logo" width={500} height={500}/>
        <Login />
      </div>
    </div>
  );
}