import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
// We are creating a state whose default value is s1.
    const notesInitial =  [
            {
              "_id": "64b7af74b29518be1f356aa111",
              "user": "64b0d98210e40e414a00d96111",
              "title": "my title",
              "description": "There are many variations of passages of Lorem Ipsum available, hello i am good how are you doing i hope you are doing good.",
              "tag": "personal",
              "date": "2023-07-19T09:40:04.354Z",
              "__v": 0
            }
           
          ]

    const [notes, setNotes] = useState(notesInitial);
    
    // Add a Note 
    const addNote = (title , description , tag) => {
      console.log("Adding a New Note");

      const note =  {
        "_id": "64c29193798bf5df01b563d622",
        "user": "64b0d98210e40e414a00d96322",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-07-27T15:47:31.563Z",
        "__v": 0
      };
      // We will use notes.concat because it returns a new array. So that we can see the changes
      setNotes(notes.concat(note));
    }
    
    // Delete a Note
    const deleteNote = (id) => {
      console.log("deleting the node with id : " + id);
      const newNotes = notes.filter((note) => { return note._id!==id});
      setNotes(newNotes);
    }

    // Update a Note
    const updateNote = () => {

    }

    return (
        <NoteContext.Provider value={[notes, addNote, deleteNote, updateNote]}>
        {props.children} 
        </NoteContext.Provider>
    )
}
export default NoteState;