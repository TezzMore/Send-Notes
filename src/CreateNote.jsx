import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './styling/createnote.css';


const CreateNote = (props) => {

    const [expand, setExpand]=useState(false);

    const [note, SetNote]=useState({
        title: "",
        content: "",

    });
    const InputEvent=(e)=>{
        const {name,value}=e.target;
        SetNote((prevData) =>{
            return {
                ...prevData,
                [name] :value,
            }
        })
        
    }

    const addEvent=()=>{
        props.passNote(note);
        SetNote({
            title: "",
            content: "",
    
        });
    }
    const expandIt=()=>{
        setExpand(true);
    }
    const btoNormal=()=>{
        setExpand(false);
    }
  return (
    <>
    <div className='main_note'
    onDoubleClick={btoNormal}>
        <form>
            {expand?
            <input 
            name='title'
            type='text' 
            value={note.title}
            onChange={InputEvent}
            placeholder='Title' 
            autoComplete='off'/>
            :null
            }

            <textarea 
            name='content'
            rows="" 
            column=""
            value={note.content} 
            onChange={InputEvent}
            placeholder='Write a Note...' 
            onClick={expandIt}
            >
            
            </textarea>
            {expand?<Button onClick={addEvent}>
                <AddIcon className='plus_sign'/>
            </Button>:null}
        </form>
    </div>
    </>
  )
}

export default CreateNote;