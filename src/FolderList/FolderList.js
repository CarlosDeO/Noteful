import React from "react";
import "./FolderList.css";
import { NavLink, Link } from "react-router-dom";

class FolderList extends React.Component {
  static defaultProps = {
    folders: []
  };

  render() {
    let goBack;
    const folders = this.props.folders.map(folder => {
      let className;
      if (this.props.note) {
        goBack = (
          <Link to="/" className="nav-link">
            Go Back
          </Link>
        );
        if (this.props.note.folderId === folder.id) {
          className = "nav-link active";
        } else {
          className = "nav-link";
        }
      } else {
        className = "nav-link";
      }
      return (
        <NavLink
          to={`/folder/${folder.id}`}
          className={className}
          key={folder.id}
        >
          {folder.name}
        </NavLink>
      );
    });

    return (
      <div className="folderList">
        {folders}
        {''}
        {goBack}
        <button className="addFolder">Add Folder</button>
      </div>
    );
  }
}

export default FolderList;