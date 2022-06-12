import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";




const App = () => {

    const [notes, setNotes] = useState([]);

    const addNote = (note) => {

        setNotes( (prevNote) => {
            return [...prevNote, note]
        });

    }



    const deleteNote = (id) => {
        setNotes( (prevNote) => {
            return prevNote.filter((note, index) => {
                return index !== id;

            });
        });
    }

    return(<div> 
    <Header /> 
    <Footer />
        <CreateArea addNote={addNote}/>
        {notes.map((note, index) => 
            <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onChecked={deleteNote}
            />
        )}
     </div>);
}

export default App;
