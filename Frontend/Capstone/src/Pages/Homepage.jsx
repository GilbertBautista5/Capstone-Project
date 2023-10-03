import React from "react";
import DrawerAppBar from "../Components/NavBarHP";
import SignUp from "../Components/SignUp";

export default function Homepage() {
  return (
    <div className="HomePage">
      <h1> Welcome to PlanAhead</h1>
      <DrawerAppBar />
      <p className="Paragraph">
        PlanAhead is the ultimate daily planning application, offering users a
        robust tool to optimize their daily routines and enhance productivity
        with user-friendly features, including customizable to-do lists,
        calendar integration, priority management, and real-time reminders. This
        app is your trusted companion for efficient time management and
        achieving a more organized and balanced life.
      </p>
      <div className="SignUpContainer">
        {" "}
        <img src="../../public/Images/undraw.svg" alt="logo" />
        <SignUp />
      </div>
    </div>
  );
}
