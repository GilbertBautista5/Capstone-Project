import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function Note({ title, description, noteId, onDelete }) {
  const handleDeleteNote = (noteId) => {
    axios
      .delete(`http://localhost:8080/notes/${noteId}`)
      .then((result) => {console.log(result);
    onDelete(noteId)})

      .catch((error) => console.log(error));
  };
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <DeleteIcon size="small" onClick={()=> handleDeleteNote(noteId)}>Delete</DeleteIcon>
      </CardActions>
    </Card>
  );
}
