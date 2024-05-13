import React from 'react';
import { useState } from "react";
function Form(props) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const updateForm = (event) => {
        event.preventDefault();
        props.displayHideForm();
        props.updateNotes(crypto.randomUUID(), noteTitle, noteContent);
        setNoteTitle("");
        setNoteContent("");
    }
    return (
        <div className={`row z-3 m-0 p-0 position-absolute top-50 start-50 translate-middle ${props.isFormVisible ? "" : "d-none"}`} id="form-container">
            <div className="col-md-6 mx-auto">
                <form className="p-3 rounded" onSubmit={updateForm}>
                    <input type="text" required onChange={(e) => { setNoteTitle(e.target.value) }} value={noteTitle} className="form-control" placeholder="Title" id="noteTitle" aria-label="noteTitle" />
                    <textarea required className="form-control mt-3" onChange={(e) => { setNoteContent(e.target.value) }} value={noteContent} placeholder="Type here" id="noteContent"></textarea>
                    <button type="submit" className="btn btn-dark mt-3">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form