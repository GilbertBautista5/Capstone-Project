import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useUserContext } from "../Context/UserContext";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";

export default function UpdateForm({onUpdateUser}) {
  const [result, setResult] = useState("");
  const { currentUser, handleUpdateUser } = useUserContext();
  const [userData, setUserData] = useState({ firstName: "", lastName: "",email: "",password: "" });
  // console.log(currentUser)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let firstName = data.get("firstName");
    let lastName = data.get("lastName");
    let email = data.get("email");
    let updateUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    //convert form data to object and post to backend
    axios
      .put(`http://localhost:8080/users/${currentUser._id}`,)
      .then((response) => {
        console.log(response);
        setUserData({ firstName: "", lastName: "",email: "" });
        onUpdateUser();
      })
      .catch((err) => {
        console.log(err);
        setResult(err.message + ": " + err.response.data.result);
      });
  };
  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Box className="NotesForm"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "75ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        id="firstName"
        label="First Name"
        variant="outlined"
        name="firstName"
        required
        value={userData.title}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        id="lastName"
        label="Last Name"
        variant="outlined"
        name="lastName"
        required
        value={userData.description}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        id="email"
        label="Email"
        variant="outlined"
        name="email"
        required
        value={userData.description}
        onChange={handleInputChange}
      />

      <Button fullWidth type="submit" variant="outlined">
        {" "}
        Update User
      </Button>
    </Box>
  );
}