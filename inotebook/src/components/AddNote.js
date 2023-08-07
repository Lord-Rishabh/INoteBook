import React , {useContext , useState} from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {

    const {addNote } = useContext(noteContext);

    const [note,setNotes] = useState({title : "" , description : "" , tag : ""})

    
    const handleClick = (e) => {
        // This will not let page to reload.
        e.preventDefault();
        try {
            addNote(note.title , note.description , note.tag);
            setNotes({title : "" , description : "" , tag : ""})
            props.showAlert("Note Added Successfully" , "success");
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
                    <input type="text" value={note.title} className="form-control" id="title" aria-describedby="emailHelp" name="title" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={note.description} className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" value={note.tag} className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
                <button type="submit" disabled={note.title.length<3 || note.description.length<5} className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote