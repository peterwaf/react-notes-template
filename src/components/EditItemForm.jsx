import React from 'react';
import { useState, useEffect } from "react";

function EditItemForm(props) {
    //grab the note which has an existing Note id
    const [selectedNote] = props.selectedNoteId ? props.existingNotes.filter(existingNote => existingNote.id == props.selectedNoteId) : [];
    const [newNoteTitle, setNewNoteTitle] = useState("");
    const [newNoteContent, setNewNoteContent] = useState("");
    //update newNoteTitle and  newNoteContent if selectedNoteId changes
    useEffect(() => {
        // Update local state when selectedNoteId changes
        if (props.selectedNoteId) {
            const selectedNote = props.existingNotes.find(note => note.id === props.selectedNoteId);
            if (selectedNote) {
                setNewNoteTitle(selectedNote.noteTitle);
                setNewNoteContent(selectedNote.noteContent);
            }
        }
    }, [props.selectedNoteId, props.existingNotes]);

    return (
        <div className={`row z-3 m-0 p-0 position-absolute top-50 start-50 translate-middle ${props.editItem ? "" : "d-none"}`} id="form-container">
            <div className="col-md-6 mx-auto">
                {props.selectedNoteId ? <form onSubmit={(e) => {
                    e.preventDefault();
                    props.editSelectedNote(props.selectedNoteId, newNoteTitle, newNoteContent);
                    props.isEditItem(props.selectedNoteId);
                }} className="p-3 data-form rounded">
                    <input type="text" onChange={(e) => {
                        setNewNoteTitle(e.target.value)
                    }} value={newNoteTitle} className="form-control" placeholder="Title" id="noteTitle" aria-label="noteTitle" />
                    <textarea onChange={(e) => {
                        setNewNoteContent(e.target.value)
                    }} value={newNoteContent} className="form-control mt-3" placeholder="Type here" id="noteContent"></textarea>
                    <button type="submit" className="btn btn-dark mt-3">Save</button>
                </form> : ""}
            </div>
        </div>
    )
}

export default EditItemForm