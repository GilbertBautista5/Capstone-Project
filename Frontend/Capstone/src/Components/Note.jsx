import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from '@mui/icons-material/Update';
import axios from "axios";
import { useState } from "react";

export default function Note({ title, description, noteId, onDelete }) {
const [editMode, setEditMode] = useState(false);
const [updatedTitle, setUpdateTitle] = useState("");
const [updatedDescription, setUpdateDescription] = useState("")


  const handleDeleteNote = (noteId) => {
    axios
      .delete(`http://localhost:8080/notes/${noteId}`)
      .then((result) => {console.log(result);
    onDelete(noteId)})

      .catch((error) => console.log(error));
  };

  const handleUpdateNote =(noteId) => {
    axios
    .put (`http://localhost:8080/notes/${noteId}`)
    .then((result) => {console.log(result);
        onUpdate(noteId)})
    
          .catch((error) => console.log(error));
  }
  return (
    <Card sx={{ minWidth: 275,
    maxWidth: 275, display: "flex",
    flexDirection:"column", justifyContent: "space-between", margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <DeleteIcon size="small" onClick={()=> handleDeleteNote(noteId)}>Delete</DeleteIcon>
        <UpdateIcon size="small" onClick={()=> handleUpdateNote(noteId)}>Update</UpdateIcon>
      </CardActions>
    </Card>
  );
}
