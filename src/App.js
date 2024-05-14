import logo from './logo.svg';
import './App.css';
import notesdata from "./components/notes_data";
import Header from "./components/Header";
import Content from "./components/Content";
import Form from "./components/Form";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import EditItemForm from "./components/EditItemForm";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState("");
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const displayHideForm = () => { setIsFormVisible(!isFormVisible) };
  const updateNotes = (id, noteTitle, noteContent) => {
    setNotes(prevData => [...prevData, { id: id, noteTitle: noteTitle, noteContent: noteContent }])
  }

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id != id);
    setNotes(filteredNotes);
  }

  //effect to save items in local storage

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);

  //check if edit button is clicked

  const isEditItem = (noteId) => {
    setEditItem(!editItem);
    setSelectedNoteId(noteId);
  }

  const editSelectedNote = (id, title, content) => {
    const newNotes = notes.map(prevNote => {
      if (prevNote.id == id) {
        return { id: id, noteTitle: title, noteContent: content };
      }
      return prevNote;
    })
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <Button displayHideForm={displayHideForm} isFormVisible = {isFormVisible} />
        <Form isFormVisible={isFormVisible} displayHideForm={displayHideForm} updateNotes={updateNotes} />
        <EditItemForm editItem={editItem} existingNotes={notes} isEditItem={isEditItem} selectedNoteId={selectedNoteId} editSelectedNote={editSelectedNote} />
        <Content notes={notes} deleteNote={deleteNote} isEditItem={isEditItem} />
      </div>
    </div>
  );
}

export default App;
