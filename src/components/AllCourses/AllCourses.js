import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Profs from "../Profs/Profs";
import { Link } from "react-router-dom";

export default function AllCourses() {
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
      name: "Mohamed",
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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <br></br>
        <Search handleSearchCourse={setSearchName} />
        <h1 className="see">All Courses</h1>

        <h2 className="cours">Math</h2>
        <Profs
          profs={profs.filter((prof) =>
            prof.name.toLowerCase().includes(searchName)
          )}
        />
        <h2 className="cours">Phy</h2>
        <Profs
          profs={profs.filter((prof) =>
            prof.name.toLowerCase().includes(searchName)
          )}
        />
        <h2 className="cours">Gym</h2>
        <Profs
          profs={profs.filter((prof) =>
            prof.name.toLowerCase().includes(searchName)
          )}
        />
        <br></br>
        <Link to="../">
          <button className="btn">Previous</button>
        </Link>
      </div>
    </div>
  );
}
