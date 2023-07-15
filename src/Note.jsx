import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './styling/note.css';
const Note = (props) => {
  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return (
    <>
    <div className='note'>
    <h1>{props.title}</h1>
    <br/>
    <p>{props.content}</p>
    <button className='btn' onClick={deleteNote}>
    <DeleteOutlineIcon className="deleteIcon"/>
    </button>
    </div>
    </>
  );
};

export default Note;