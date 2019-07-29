import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import STORE from './Store' 
import FolderList from './FolderList/FolderList'
import NoteList from './NoteList/NoteList'
import Note from './Note/Note'


class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes,
      selectedFolder: "",
      selectedNote: ""
    };
  }
  render() {
    console.log(this.state.folders);
    console.log(this.state.notes);
  return (
    <div className='App'>
      <Link to="/">
          <h1>Noteful</h1>
      </Link>
      <nav>
      <Route
        exact
        path="/"
        render={() => (
         <FolderList
          folders={this.state.folders}
          selectedFolder={this.state.selectedFolder}
            />
            )}
          />
      <Route
         path="/folder/:folderid"
        render={() => <FolderList folders={this.state.folders} />}
        />
      <Route
          path="/note/:noteid"
          render={routeProps => {
             return (
              <FolderList
                folders={this.state.folders}
                note={this.state.notes.find(
                note => note.id === routeProps.match.params.noteid
                  )}
                />
              );
            }}
          />
      </nav>
      <main>
      <Route
        exact
        path="/"
        render={() => (
          <NoteList
            notes={this.state.notes}
            selectedFolder={this.state.selectedFolder}
            selectedNote={this.state.selectedNote}
          />
          )}
        />
      <Route
            path="/folder/:folderid"
            render={routeProps => (
              <NoteList
                notes={this.state.notes.filter(note => {
                  return note.folderId === routeProps.match.params.folderid;
                })}
              />
            )}
          />
      <Route path="/note/:noteid" component={Note} />
      </main>
    </div>
  );
  }
}

export default App;
