import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "../../Courses Page/Header/Header";
import Search from "../../Courses Page/Search Component/Search";
import Students from "../../My Students/All Students/AllStudents";
import { Link } from "react-router-dom";
import style from "./styles.module.css";
import Sidebar from "../../../components/Teacher Sidebar/Sidebar";
export default function StudentList() {
  const [profs, setProfs] = useState([
    {
      id: nanoid(),
      name: "Aicha",
      age: "22",
      education: "BAC+5",
      experience: 3,
      contact: "aicha@gamil.com",
    },
    {
      id: nanoid(),
      name: "Aline",
      age: "22",
      education: "BAC+3",
      experience: 1,
      contact: "aline@gamil.com",
    },
    {
      id: nanoid(),
      name: "Samar",
      age: "27",
      education: "BAC+7",
      experience: 2,
      contact: "samar@gamil.com",
    },
    {
      id: nanoid(),
      name: "Salma",
      age: "24",
      education: "BAC+2",
      experience: 1,
      contact: "mohamed@gamil.com",
    },
  ]);

  const [searchName, setSearchName] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("react-profs-app-data", JSON.stringify(profs));
  }, [profs]);

  return (
    <div>
      <Sidebar />
      <div className={`${style.darkMode && "dark-mode"}`}>
        <div className={style.container}>
          <Header handleToggleDarkMode={setDarkMode} />
          <br></br>
          <Search handleSearchCourse={setSearchName} className={style.searchh} />
          <h1 className={style.see}>Mes Etudiants</h1>

         
          <Students
            profs={profs.filter((prof) =>
              prof.name.toLowerCase().includes(searchName)
            )}
          />
        
        </div>
      </div>{" "}
    </div>
  );
}
