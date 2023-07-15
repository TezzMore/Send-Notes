import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currData, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="notes-container">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
