import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    content: "",
    title: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote(prevValues => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.addNewNote(newNote);
    setNewNote({
      content: "",
      title: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            value={newNote.title}
            name="title"
            placeholder="Title"
            type="text"
          />
        )}
        <textarea
          onChange={handleChange}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          type="textarea"
          onClick={() => setIsExpanded(true)}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
