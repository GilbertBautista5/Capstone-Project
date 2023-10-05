import React from "react";
import Note from "./note";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../Context/UserContext";

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

  return (
    <div>
      {notes.map((note) => (
        <Note key={note._id} title={note.title} description={note.description} noteId={note._id} />
      ))}
    </div>
  );
}

export default Notes;
