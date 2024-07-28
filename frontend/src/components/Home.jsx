<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from "react";
=======
import React, { useState } from "react";
>>>>>>> origin/main
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
<<<<<<< HEAD
import axios from "axios";
const API_URL = "http://localhost:4000";

function Home({ user }) {

  const [notes, setNotes] = useState([]);

  const fetching = useCallback(async () => {
    try {
      const respo = await axios.get(`${API_URL}/get/${user.id}`);
      setNotes(respo.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setNotes([]);
    }
  }, [user.id]);

  useEffect(() => {
    fetching();
  }, [fetching]);


  const addNote = async (newNote) => {

    const finalData = {
      id: user.id,
      title: newNote.title,
      content: newNote.content,
    };

    try {
      const respo = await axios.post(`${API_URL}/add`, finalData);
      console.log(respo.data.message);
      fetching();
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const respo = await axios.delete(`${API_URL}/delete/${id}`);
      console.log(respo.data.message);
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return noteItem.id !== id;
        });
      });

    } catch (error) {
      console.error("Error deleting data:", error);
    }

=======


function Home({ user }) {
  
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
>>>>>>> origin/main
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
<<<<<<< HEAD
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.description}
=======
            id={index}
            title={noteItem.title}
            content={noteItem.content}
>>>>>>> origin/main
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Home;
