import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
// We are creating a state whose default value is s1.
    const notesInitial =  [
            {
              "_id": "64b7af74b29518be1f356aa8",
              "user": "64b0d98210e40e414a00d963",
              "title": "my title",
              "description": "hello guys",
              "tag": "personal",
              "date": "2023-07-19T09:40:04.354Z",
              "__v": 0
            },
            {
              "_id": "64c29193798bf5df01b563d6",
              "user": "64b0d98210e40e414a00d963",
              "title": "my title - 2",
              "description": "hello guys what's up",
              "tag": "personal",
              "date": "2023-07-27T15:47:31.563Z",
              "__v": 0
            },
            {
              "_id": "64b7af74b29518be1f356aa8",
              "user": "64b0d98210e40e414a00d963",
              "title": "my title",
              "description": "hello guys",
              "tag": "personal",
              "date": "2023-07-19T09:40:04.354Z",
              "__v": 0
            },
            {
              "_id": "64c29193798bf5df01b563d6",
              "user": "64b0d98210e40e414a00d963",
              "title": "my title - 2",
              "description": "hello guys what's up",
              "tag": "personal",
              "date": "2023-07-27T15:47:31.563Z",
              "__v": 0
            },
            {
              "_id": "64b7af74b29518be1f356aa8",
              "user": "64b0d98210e40e414a00d963",
              "title": "my title",
              "description": "hello guys",
              "tag": "personal",
              "date": "2023-07-19T09:40:04.354Z",
              "__v": 0
            },
            {
              "_id": "64c29193798bf5df01b563d6",
              "user": "64b0d98210e40e414a00d963",
              "title": "my title - 2",
              "description": "hello guys what's up",
              "tag": "personal",
              "date": "2023-07-27T15:47:31.563Z",
              "__v": 0
            },
            
          ]
    const [notes, setNotes] = useState(notesInitial);
    
    return (
        <NoteContext.Provider value={[notes , setNotes]}>
        {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;