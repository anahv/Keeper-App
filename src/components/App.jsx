import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote) {
    setNotes(prevValues => {
      return [...prevValues, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevValues => {
      return prevValues.filter((note, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNewNote={addNewNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
          id={index}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
