import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from "./styles.module.css";
import Sidebar from "../Sidebar/SideBar";

const Calendrier = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div   className={style.calendrier_container}>
              <Sidebar />

      <div className={style.calendrier_header}>
        <span className={style.calendrier_month}>{selectedDate.toLocaleString('default', { month: 'long' })}</span>
        <span className={style.calendrier_year}>{selectedDate.getFullYear()}</span>
      </div>
      <Calendar value={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default Calendrier;
