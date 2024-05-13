import React from 'react'

function Button(props) {
    return (
        <div className="row">
            <div className="col-6 mt-3 mx-auto">
                <button className="btn btn-dark" onClick={()=>{props.displayHideForm()}}>Add Note</button>
            </div>
        </div>
    )
}

export default Button