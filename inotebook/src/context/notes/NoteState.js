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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMGQ5ODIxMGU0MGU0MTRhMDBkOTYzIn0sImlhdCI6MTY4OTc0NDc0N30._5Qj2b8UjywkLhZu37O0w098RDXr-23RvqGEGmCMyK8"
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMGQ5ODIxMGU0MGU0MTRhMDBkOTYzIn0sImlhdCI6MTY4OTc0NDc0N30._5Qj2b8UjywkLhZu37O0w098RDXr-23RvqGEGmCMyK8"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });
    const json = response.json();

    // Add Function : 
    console.log("Adding a New Note");
    const note = {
      "_id": "64c29193798bf5df01b563d622",
      "user": "64b0d98210e40e414a00d96322",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-07-27T15:47:31.563Z",
      "__v": 0
    };
    // We will use notes.concat because it returns a new notes. So that we can see the changes
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = (id) => {

    // Delete Function : 
    console.log("deleting the node with id : " + id);
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMGQ5ODIxMGU0MGU0MTRhMDBkOTYzIn0sImlhdCI6MTY4OTc0NDc0N30._5Qj2b8UjywkLhZu37O0w098RDXr-23RvqGEGmCMyK8"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });
    const json = response.json();

    // Update Function : 
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={[notes, addNote, deleteNote, updateNote, getNotes]}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;