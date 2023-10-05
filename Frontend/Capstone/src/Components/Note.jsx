import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import axios from "axios";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Note({
  title,
  description,
  noteId,
  onDelete,
  onUpdate,
}) {
  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleDeleteNote = (noteId) => {
    axios
      .delete(`http://localhost:8080/notes/${noteId}`)
      .then((result) => {
        console.log(result);
        onDelete(noteId);
      })

      .catch((error) => console.log(error));
  };

  const handleUpdateNote = (noteId) => {
    axios
      .put(`http://localhost:8080/notes/${noteId}`,{title:updatedTitle, description:updatedDescription})
      .then((result) => {
        console.log(result);
        onUpdate();
        setEditMode(false)
      })

      .catch((error) => console.log(error));
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 275,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 2,
      }}
    >
      <CardContent>
        {editMode ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />

            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </>
        ) : (
          <>
            {" "}
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <DeleteIcon size="small" onClick={() => handleDeleteNote(noteId)}>
          Delete
        </DeleteIcon>
        {editMode ? (
          <>
            <SaveIcon size="small" onClick={() => handleUpdateNote(noteId)}>
              Save
            </SaveIcon>
            <CancelIcon size="small" onClick={() => setEditMode(false)}>
              Cancel
            </CancelIcon>
          </>
        ) : (
          <UpdateIcon size="small" onClick={() => setEditMode(true)}>
            Update
          </UpdateIcon>
        )}
      </CardActions>
    </Card>
  );
}
