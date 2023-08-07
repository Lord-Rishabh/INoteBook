import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000/api/";
  // We are creating a state whose default value is s1.
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {

    // API Call :
    const url = `${host}notes/fetchallnotes`;
    // Search Fetch with Header if you don't remember this...
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)
  }

  // Add a Note 
  const addNote = async (title, description, tag) => {

    // API Call :
    const url = `${host}notes/addnote`;
    // Search Fetch with Header if you don't remember this...
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },

      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });
    const note = await response.json();

    // Add Function : 
    console.log("Adding a New Note");
    
    // We will use notes.concat because it returns a new notes. So that we can see the changes
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = async (id) => {

    // API call :
    const url = `${host}notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();

    // Delete Function : 
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  // Update a Note
  const updateNote = async (id, title, description, tag) => {

    // Api Call :
    const url = `${host}notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    

    // Update Function :
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes); 
  }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, updateNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;