import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div>
      <div className="header">
        <h1 className="wel">Welcome Alex</h1>
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="save"
        >
          Dark Mode
        </button>
      </div>
      <small className="greeting">You are going great, keep it up</small>
    </div>
  );
};

export default Header;
