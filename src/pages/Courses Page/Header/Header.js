import React from "react";
import styles from "./styles.module.css";
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.wel}>Welcom Alex</h1>
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="{styles.save}"
        >
          Dark Mode
        </button>
      </div>
      <small className={styles.greeting}>You are going great, keep it up</small>
    </div>
  );
};

export default Header;
