import React from "react";
import "./Note.css";

import STORE from "../Store";

function Note(props) {
  const note = STORE.notes.find(note => note.id === props.match.params.noteid);
  const date = new Date(Date.parse(note.modified)).toDateString();
  return (
    <div className="note" key={note.id}>
      <h4>{note.name}</h4>
      <p className="modified">Date Modified {date}</p>
      <p className="hidden">{note.content}</p>
    </div>
  );
}

export default Note;