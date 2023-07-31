import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {

  const context = useContext(noteContext);
  const [notes, addNote, deleteNote, updateNote] = context;
  const { note , updateNotes } = props;
  const handleClick = () => {
    deleteNote(note._id);
  }
  return (
    <div className='col-md-3 my-3'>
      <div className="card">
        <div className="card-body">
          <h5 className="mx-2 card-title">{note.title}</h5>
          <p className="mx-2 card-text">{note.description}</p>
          <i className="mx-2 fa-solid fa-pen-to-square"  onClick={() => {updateNotes(note)}} style={{color:"#2f7a9d"}}></i>
          <i className="mx-2 fa-solid fa-trash" onClick={handleClick} style={{color:"#2f7a9d"}}></i>
        </div>
      </div>
    </div>
  )
}

export default NoteItem