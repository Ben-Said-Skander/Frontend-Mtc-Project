import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Sidebar/SideBar";
import { FaArrowLeft } from "react-icons/fa";
export default function AddNotes() {
  const [noteText, setNoteText] = useState("");
  const handClick = () => {
    let data = {
      noteText: noteText,
    };
    let noteId = JSON.parse(localStorage.getItem("noteId") || "1");
    data.id = noteId;
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push(data);
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("noteId", JSON.stringify(noteId + 1));
  };

  const changeNote = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <div>
      <Sidebar />
      <div className={styles.note_container}>
      
          <div className={styles.arrow_container} >
          <Link to="/Notes">
            <FaArrowLeft className={styles.arrow_icon}/>
          </Link>
             Note and Reminders
          </div>
        <br />
        <br />
        <br /> 
        <div className={styles.textarea_container}>
        <textarea className={styles.text}  value={noteText} onChange={changeNote}></textarea>
        </div>
        
        <br />
        <div className={styles.center}>
          <Link to="/Notes">
            <button
              type="button"
              className={styles.btn}
              onClick={handClick}
            >
              Confirm
            </button>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}
