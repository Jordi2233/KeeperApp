import React, { useState } from "react";

const CreateArea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    const noteHolder = (event) => {

        const {value, name} = event.target;

       setNote( (prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
       });
    }



    return (
        <div>
            <form>
                <input name="title" 
                placeholder="Title" 
                onChange={noteHolder} 
                value={note.title} />

                <textarea name="content" 
                rows="3" 
                placeholder="Take a note..."
                onChange={noteHolder} 
                 value={note.content}>
                </textarea>

                <button 
                onClick={(event) => {props.addNote(note); setNote({title: "", content: ""}); event.preventDefault()}}>
                Add
                </button>

            </form>
        </div>
    )


}

export default CreateArea