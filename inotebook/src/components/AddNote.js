import React , {useContext , useState} from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = () => {

    const [notes, addNote, deleteNote, updateNote] = useContext(noteContext);

    const [note,setNotes] = useState({title : "" , description : "" , tag : "default"})

    const handleClick = (e) => {
        // This will not let page to reload.
        e.preventDefault();
        try {
            addNote(note.title , note.description , note.tag);
        } catch (error) {
            console.log(error);
        }
    }
    const onChange = (e) => {
        setNotes({...note , [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h1>Add a Note</h1>

            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" name="title" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote