import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useUserContext } from "../Context/UserContext";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";

export default function NotesForm({onUpdateNotes}) {
  const [result, setResult] = useState("");
  const { currentUser, handleUpdateUser } = useUserContext();
  const [formData, setFormData] = useState({ title: "", description: "" });
  // console.log(currentUser)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let title = data.get("title");
    let description = data.get("description");
    let newNote = {
      title: title,
      description: description,
      user: currentUser._id,
    };
    console.log(newNote);

    //convert form data to object and post to backend
    axios
      .post("http://localhost:8080/notes/create", newNote)
      .then((response) => {
        console.log(response);
        setFormData({ title: "", description: "" });
        onUpdateNotes();
      })
      .catch((err) => {
        console.log(err);
        setResult(err.message + ": " + err.response.data.result);
      });
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Box className="NotesForm"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
      noValidate
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        id="title"
        label="Title"
        variant="outlined"
        name="title"
        required
        value={formData.title}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        id="description"
        label="Take a note..."
        variant="outlined"
        name="description"
        required
        value={formData.description}
        onChange={handleInputChange}
      />

      <Button fullWidth type="submit" variant="outlined">
        {" "}
        submit
      </Button>
    </Box>
  );
}
