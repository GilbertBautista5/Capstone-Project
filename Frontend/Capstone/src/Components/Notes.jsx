import React from "react";
import Note from "./note";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../Context/UserContext";
import NotesForm from '../Components/NotesForm'
import { Box } from "@mui/material";

function Notes() {
  const [notes, setNotes] = useState([]);
  const { currentUser } = useUserContext();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/notes/${currentUser._id}`)
      .then((response) => {
        console.log(response.data.data);
        setNotes(response.data.data);
      });
  }, []);

  const addNote = () => {
    axios
    .get(`http://localhost:8080/notes/${currentUser._id}`)
    .then((response) => {
      console.log(response.data.data);
      setNotes(response.data.data);
    });
  }

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note)=> note._id !== noteId)
    setNotes(updatedNotes)
  }

  return (
    <Box component="div" 
    sx={{display: "flex"}}>
    
        <NotesForm onUpdateNotes={addNote}/>
        <Box component="div" 
    sx={{display: "flex", justifyContent:"space-between"}}>
      {notes.map((note) => (
        <Note key={note._id} title={note.title} description={note.description} noteId={note._id} onDelete={deleteNote} />
      ))}
      </Box>
    </Box>
  );
}

export default Notes;
