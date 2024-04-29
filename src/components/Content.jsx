import React from 'react'
import Card from "./Card"
function Content() {
    const notes = [{
        id: 1,
        noteTitle: "Ipsum 1",
        noteContent: "Lorem ipsum dolor sit amet consectetur adipis soluta. "
    }, {
        id: 2,
        noteTitle: "Ipsum 2",
        noteContent: "Lorem ipsum dolor sit amet consectetur adipis soluta. "
    }, {
        id: 3,
        noteTitle: "Ipsum 3",
        noteContent: "Lorem ipsum dolor sit amet consectetur adipis soluta. "
    }, {
        id: 4,
        noteTitle: "Ipsum 4",
        noteContent: "Lorem ipsum dolor sit amet consectetur adipis soluta. "
    }, {
        id: 5,
        noteTitle: "Ipsum 5",
        noteContent: "Lorem ipsum dolor sit amet consectetur adipis soluta. "
    }]
    return (
        <div className="row content">
            <Card notes = {notes} />
        </div>
    )
}

export default Content