import React from "react";
import { MdSearch } from "react-icons/md";
import style from "./styles.module.css";
const Search = ({ handleSearchCourse }) => {
  return (
    <div className={style.search}>
      <MdSearch className={style.search} size="1.3em" />
      <input
        onChange={(event) => handleSearchCourse(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
