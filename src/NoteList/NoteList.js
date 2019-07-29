import React from "react";
import "./NoteList.css";
import { Link } from "react-router-dom";

class NoteList extends React.Component {
  static defaultProps = {
    notes: []
  };

  render() {
    const notes = this.props.notes.map(note => {
      const date = new Date(Date.parse(note.modified)).toDateString();
      return (
        <div className="note" key={note.id}>
          <Link to={`/note/${note.id}`}>
            <h4>{note.name}</h4>
          </Link>
          <p className="modified">Date Modified {date}</p>
          <button className="delete-button">Delete</button>
        </div>
      );
    });

    return <div className="noteList">{notes}</div>;
  }
}

export default NoteList;