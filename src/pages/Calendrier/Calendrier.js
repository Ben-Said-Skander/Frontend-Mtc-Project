import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from "./styles.module.css";
import Sidebar from "../Sidebar/SideBar";

const Calendrier = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [comments, setComments] = useState(localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : {});

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storedComments = localStorage.getItem('comments');
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }
  }, []);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  
  const addComment = () => {
    const comment = prompt('Entrez votre commentaire:');
    setComments({
      ...comments,
      [selectedDate.toDateString()]: comment
    });
    const newComment = {
      comment: comment,
      id: Date.now()
    };
  };

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  return (
    <div className={style.calendrier_container}>
      <Sidebar />

      <div className={style.calendrier_header}>
        <span className={style.calendrier_month}>{selectedDate.toLocaleString('default', { month: 'long' })}</span>
        <span className={style.calendrier_year}>{selectedDate.getFullYear()}</span>
      </div>
      <Calendar
        className={style.calendrier}
        value={selectedDate}
        onChange={handleDateChange}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const comment = comments[date.toDateString()];
            return (
              <div onClick={() => handleDateChange(date)}>
                {comment && <div className={style.comment}>{comment}</div>}
              </div>
            );
          }
        }}
      />
      <button onClick={addComment}>Ajouter un commentaire</button>
    </div>
  );
};

export default Calendrier;
