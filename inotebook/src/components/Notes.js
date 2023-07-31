import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote'

const Notes = () => {

    const context = useContext(noteContext);
    const [notes, addNote, deleteNote, updateNote, getNotes] = context;
    const [note,setNotes] = useState({etitle : "" , edescription : "" , etag : "default"})

    useEffect(() => {
        getNotes();
    }, [])

    const editNotes = (currentNote) => {
        ref.current.click();
        setNotes({id:currentNote._id, etitle : currentNote.title, edescription : currentNote.description , etag : currentNote.tag});
    }

    const ref = useRef(null);
    const refClose_Update = useRef(null);
    const refClose = useRef(null);
    
    const handleClick = (e) => {
        // This will not let page to reload.
        e.preventDefault(); 
        updateNote(note.id, note.etitle, note.edescription, note.etag);
        refClose_Update.current.click();
    }
    const handleClose = (e) => {
        e.preventDefault(); 
        refClose.current.click();
    }
    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }


    return (<>

        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* form like add Note */}
                        <form className='my-3'>
                            <div className="mb-3">
                                <label htmlFor="etitle" className="form-label">Title</label>
                                <input type="text" className="form-control" value={note.etitle} id="etitle" aria-describedby="emailHelp" name="etitle" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Description</label>
                                <input type="text" className="form-control" value={note.edescription} id="edescription" name="edescription" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label">Tag</label>
                                <input type="text" className="form-control" value={note.etag} id="etag" name="etag" onChange={onChange} />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleClose} ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" disabled={note.etitle.length<3 || note.edescription.length<5} onClick={handleClick} ref={refClose_Update} className="btn btn-primary">Update Note</button>
                    </div>
                </div>
            </div>
        </div>

        <AddNote />
        <div className='row my-3'>
            <h1>Your Notes</h1>
            <div className="container mx-1">
                {notes.length === 0 && 'No Notes to display.'}
            </div>
            {notes.map((note) => {
                return <NoteItem key={note._id} editNotes={editNotes} note={note} />;
            })}
        </div>
    </>
    )
}

export default Notes;