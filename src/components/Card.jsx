import React from 'react'

function Card(props) {
    return (
        props.notes.map(note =>
            <div key={note.id} className="col-md-3 col-sm-12 mb-3 mt-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{note.noteTitle}</h5>
                        <p className="card-text">{note.noteContent}</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button onClick={() => {
                                props.deleteNote(note.id)
                            }} className="btn text-warning-emphasis text-decoration-none">Delete</button>
                            <button onClick={() => {
                                props.isEditItem(note.id);
                            }} className="btn text-warning-emphasis text-decoration-none">Edit </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Card