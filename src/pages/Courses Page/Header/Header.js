import React from "react";
import style from "./styles.module.css";
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div>
      <div className={style.header}>
        <h1 className={style.wel}>Welcome Alex</h1>
       
      </div>
      <small className={style.greeting}>You are going great, keep it up</small>
    </div>
  );
};

export default Header;
