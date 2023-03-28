import React from 'react';
import { useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/SideBar';
export default function AddNotes() {
  const [noteText, setNoteText] = useState('');
  const handClick = () => {
    let data = {
      noteText: noteText,
    };
    let noteId = JSON.parse(localStorage.getItem('noteId') || '1');
    data.id = noteId;
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push(data);
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('noteId', JSON.stringify(noteId + 1));
  };

  const changeNote = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <div>
      <Sidebar />
      <div className={styles.note_container}>
        <h1 className={styles.head}>
          <Link to="/Notes">
            <div className={styles.arrow} />{' '}
          </Link>
          Note and Reminders
        </h1>
        <br />
        <br />
        <br />
        <div>
          <textarea value={noteText} onChange={changeNote}></textarea>
        </div>
        <br />
        <div className={styles.center}>
          <Link to="/Notes">
            <button
              type="button"
              className={styles.blue_btn}
              onClick={handClick}
            >
              Confirm
            </button>
          </Link>
        </div>
      </div>{' '}
    </div>
  );
}
