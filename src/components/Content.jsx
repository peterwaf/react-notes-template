import React from 'react'
import Card from "./Card"
function Content(props) {
    return (
        <div className="row content">
            <Card notes = {props.notes} deleteNote = {props.deleteNote} isEditItem = {props.isEditItem}  />
        </div>
    )
}

export default Content